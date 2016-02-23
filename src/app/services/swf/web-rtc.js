angular.module('younow.services.web-rtc', [])

.factory('webRtc', ["$rootScope", "swf", "config", "$q", "Api", "$modal", "$http", "$timeout", "trpx", function($rootScope, swf, config, $q, Api, $modal, $http, $timeout, trpx) {
	var webRtc = {},
		pcConfig,
		localVideo,
		isGuest,
		remoteVideo,
		constraints = {
			"video": {
				"mandatory": {
					"maxWidth": 640,
					"maxHeight": 480,
					"maxFrameRate": "15"
				},
				"optional": []
			}
		},
		videoLastBytes,
		audioLastBytes,
		videoLastBytesRecv,
		audioLastBytesRecv,
		lastStatCheck,
		receivingRemoteStream = false,
		canvas,
		stats = {
			forNerds: {
				bps: 0
			},
			analytics: {}
		},
		ctx;

	if (config.params.audioStudio && config.params.audioStudio == "1") {
		constraints.audio = {
			"optional": [{
				"echoCancellation": false
			}]
		};
	} else {
		constraints.audio = {
			"mandatory": {
				"googEchoCancellation": true,
				"googAutoGainControl": false,
				"googAutoGainControl2": false,
				"googNoiseSuppression": false,
				"googHighpassFilter": false,
				"googTypingNoiseDetection": false
			},
			"optional": []
		};
	}

	//setup the watermark
	var watermark = new window.Image();
	watermark.crossOrigin = 'anonymous';

	config.init.then(function() {
		watermark.src = config.settings.ServerCDNBaseUrl + '/angularjsapp/src/assets/images/logo/logo_now_watermark.svg';
	});

	webRtc.settings = {
		mirroredCamera: Api.store('mirrorCamera'),
		sources: {},
		state: 'ready',
		streams: {},
		audioSupported: micVolumeIsSupported()
	};

	webRtc.initialize = function(iceCandidateCallback, guest) {
		var deferred = $q.defer();

		isGuest = guest;
		pcConfig = new PcConfig();
		webRtc.pc = new pcConfig.PeerConnection(pcConfig.PeerConnectionConfig);
		if (iceCandidateCallback) {
			webRtc.pc.onicecandidate = iceCandidateCallback;
		}
		webRtc.pc.oniceconnectionstatechange = onIceConnectionStateChange;
		webRtc.pc.onaddstream = onRemoteStreamAdded;
		webRtc.pc.onremovestream = onRemoteStreamRemoved;

		$rootScope.$evalAsync(function() {
			console.log("about to try and run video");
			if (!isGuest) {
				localVideo = document.getElementById('bcVideo');
			} else {
				localVideo = document.getElementById('guestVideo');
			}

			if (localVideo == null) {
				webRtc.setStatus('Local video element not found! (Maybe caused by flash-block plugin?)');
			}

			if (navigator.getUserMedia) {
				// Request access to video only

				navigator.getUserMedia(constraints,
					function(stream) {
						setStream(stream);
						deferred.resolve(guest);
					},
					function(error) {
						webRtc.setStatus("Something went wrong with getting user data. error: " + error);
						deferred.reject();
					}
				);
			} else {
				webRtc.setStatus('Sorry, the browser you are using doesn\'t support getUserMedia');
				deferred.reject();
			}
		});
		return deferred.promise;
	};

	webRtc.setRemoteDescriptionSuccess = function() {
		console.log("setRemoteDescriptionSuccess");
	};

	webRtc.setRemoteDescriptionFail = function() {
		console.log("setRemoteDescriptionFail");
	};

	webRtc.getCurrentConfig = function() {
		return pcConfig;
	};

	webRtc.setupWebrtcStream = function() {
		// Add stream
		webRtc.pc.addStream(pcConfig.webrtcStream);
		//Create the offer.
		webRtc.pc.createOffer(offerCreated, createOfferError);
		captureWebrtcData('WEBRTC_OFFER', 'CREATE');
	};

	webRtc.setStatus = function(msg) {
		console.log(msg);
	};

	webRtc.destroy = function(stream, videoEl, isPreview) {
		if (videoEl && videoEl.stop) {
			videoEl.stop();
			videoEl.src = '';
		}
		//kill the raw microphone only for non preview streams
		if (webRtc.settings.sources.rawMicTrack && !isPreview) {
			webRtc.settings.sources.rawMicTrack.stop();
		}

		if (!stream && pcConfig) {
			stream = pcConfig.webrtcStream;
		}

		if (stream) {
			var tracks = stream.getTracks();
			if (tracks && tracks.length > 0) {
				for (var i = 0; i < tracks.length; i++) {
					if (tracks[i].readyState !== "ended") {
						tracks[i].stop();
					}
				}
			}
			if(webRtc.pc && webRtc.pc.signalingState !== "closed") {
				webRtc.pc.close();
			}
		}
	};

	webRtc.changeCamera = function(media) {
		constraints.video.optional = [{
			"sourceId": media.deviceId
		}];

		navigator.getUserMedia(constraints, function(stream) {
			setStream(stream);
		}, console.error);
	};

	webRtc.changeMicrophone = function(media) {
		constraints.audio.optional = [{
			sourceId: media.deviceId
		}];

		navigator.getUserMedia(constraints, function(stream) {
			setStream(stream);
		}, console.error);
	};

	webRtc.getMediaDevices = function() {
		var media,
			audio = [],
			video = [],
			currentVideo = pcConfig.webrtcStream.getVideoTracks()[0],
			currentAudio = webRtc.settings.sources.rawMicTrack;

		navigator.mediaDevices.enumerateDevices().then(function(media_sources) {
			for (media in media_sources) {
				var currentMedia = media_sources[media];
				if (currentMedia.kind == "videoinput") {
					currentMedia.enabled = currentVideo.label === currentMedia.label ? true : false;
					video.push(currentMedia);
				}
				if (currentMedia.kind == "audioinput") {
					currentMedia.enabled = currentAudio.label === currentMedia.label ? true : false;
					audio.push(currentMedia);
				}
			}
		});

		return {
			audio: audio,
			video: video
		};
	};

	webRtc.takeSnapshot = function(video, width, height, withWatermark) {
		var canvas = document.createElement('canvas');
		canvas.width = width || 640;
		canvas.height = height || 480;
		var ctx = canvas.getContext('2d');

		if (!video) {
			video = localVideo;
		}
		// if (withWatermark) {
		// ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		// drawWatermark(ctx, canvas);
		// } else {
		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		// }
		return canvas.toDataURL('image/jpeg').replace("data:image/jpeg;base64,", "");
	};

	webRtc.takeGuestSnapshot = function(bcVideo, guestVideo, guestSnapshot) {
		var canvas = document.createElement('canvas');
		var guestSnapshotImage;
		canvas.width = 640;
		canvas.height = 480;
		var ctx = canvas.getContext('2d');
		var deferred = $q.defer();

		if (guestSnapshot) {
			guestSnapshotImage = new window.Image();
			guestSnapshotImage.crossOrigin = 'anonymous';
			//We need to generate a random number in order to properly break the cache and reinitiate a preflight options request
			guestSnapshotImage.src = guestSnapshot + '?' + (Math.random() * 1000).toFixed(0);
			guestSnapshotImage.onload = function() {
				ctx.drawImage(guestSnapshotImage, 160, 0, canvas.height, canvas.height);
				ctx.drawImage(bcVideo, 160, 0, 320, canvas.height, 0, 0, 320, canvas.height);
				drawWatermark(ctx, canvas);
				deferred.resolve(canvas.toDataURL('image/jpeg').replace("data:image/jpeg;base64,", ""));
			};
			return deferred.promise;
		} else {
			ctx.drawImage(guestVideo, 160, 0, 320, canvas.height, 320, 0, 320, canvas.height);
			ctx.drawImage(bcVideo, 160, 0, 320, canvas.height, 0, 0, 320, canvas.height);
			drawWatermark(ctx, canvas);
			deferred.resolve(canvas.toDataURL('image/jpeg').replace("data:image/jpeg;base64,", ""));
			return deferred.promise;
		}
	};

	webRtc.setGain = function(gain) {
		webRtc.settings.sources.gainNode.gain.value = (gain / 100);
	};

	webRtc.getGain = function() {
		if (!webRtc.settings.sources.gainNode) {
			return 0;
		} else {
			return (webRtc.settings.sources.gainNode.gain.value * 100);
		}
	};

	webRtc.loadPreview = function(video) {
		var deferred = $q.defer();
		video = document.getElementById(video);
		$rootScope.$evalAsync(function() {
			if (navigator.getUserMedia) {
				navigator.getUserMedia(constraints,
					function(stream) {
						var url = window.URL || window.webkitURL;
						video.src = url ? url.createObjectURL(stream) : stream;
						video.play();
						video.muted = 'true';
						deferred.resolve(stream);
					},
					function(error) {
						$modal.alert("You must allow camera access to guest broadcast. You can edit this in your browser settings.");
						webRtc.setStatus("Something went wrong with getting user data. error: " + error);
						deferred.reject();
					}
				);
			} else {
				webRtc.setStatus('Sorry, the browser you are using doesn\'t support getUserMedia');
				deferred.reject();
			}
		});
		return deferred.promise;
	};

	webRtc.getBasicPermissions = function() {
		var deferred = $q.defer();
		$rootScope.$evalAsync(function() {
			if (navigator.getUserMedia) {
				navigator.getUserMedia(constraints,
					function(stream) {
						if (stream.getVideoTracks().length > 0) {
							deferred.resolve(stream);
							webRtc.destroy(stream);
						} else {
							$modal.alert("We were unable to detect your camera. Please check your browser settings and try again.");
							deferred.reject();
						}
					},
					function(error) {
						$modal.alert("You must allow camera access to guest broadcast. You can edit this in your browser settings.");
						webRtc.setStatus("Something went wrong with getting user data. error: " + error);
						deferred.reject();
					}
				);
			} else {
				webRtc.setStatus('Sorry, the browser you are using doesn\'t support getUserMedia');
				deferred.reject();
			}
		});
		return deferred.promise;
	};

	//firefox specific
	webRtc.ffMediaSetup = function() {
		navigator.getUserMedia(constraints, function(stream) {
			setStream(stream);
		}, console.error);
	};

	//TODO: we need to wait for firefox to implement the MediaStream.addTrack/MediaStream.removeTrack so we can add a richer gain control.
	webRtc.ffMuteStream = function() {
		if (pcConfig && pcConfig.webrtcStream) {
			pcConfig.webrtcStream.getAudioTracks()[0].enabled = !pcConfig.webrtcStream.getAudioTracks()[0].enabled;
			return pcConfig.webrtcStream.getAudioTracks()[0].enabled;
		}
	};

	webRtc.streamReadyCallback = function(id, callback) {
		if (id && callback) {
			document.getElementById(id).oncanplaythrough = function() {
				callback();
			};
		}
	};

	webRtc.supportsWebRtc = function() {
		var allowedBrowsers = ['Chrome', 'Firefox', 'Chromium'];
		if (allowedBrowsers.indexOf(Api.browser.name) !== -1) {
			return true;
		} else {
			return false;
		}
	};

	webRtc.checkIfCameraExists = function(stream) {
		if (!stream) {
			stream = webRtc.getCurrentConfig().webrtcStream;
		}
		var cameras = stream.getVideoTracks();
		if (cameras.length === 0) {
			return false;
		} else {
			return true;
		}
	};

	webRtc.getStats = function() {
		var deferred = $q.defer();
		var specs = window.UAParser();
		var stat;
		var timeSinceLastCheck;
		if (webRtc.pc && webRtc.pc.getStats) {
			webRtc.pc.getStats(null).then(function(response) {

				timeSinceLastCheck = new window.Date().getTime() - (lastStatCheck || 0);

				if (!lastStatCheck || timeSinceLastCheck > 6000) {
					videoLastBytes = undefined;
					audioLastBytes = undefined;
					videoLastBytesRecv = undefined;
					audioLastBytesRecv = undefined;
				}
				stats.forNerds.bps = 0;

				lastStatCheck = new window.Date().getTime();

				for (stat in response) {
					//Chrome
					if (Api.browser.name.indexOf('Chrome') !== -1) {
						if (stat.indexOf('_send') !== -1 && response[stat].googCodecName && response[stat].googCodecName === 'VP8') {
							stats.forNerds.framerate = response[stat].googFrameRateSent;
							stats.forNerds.vRTT = response[stat].googRtt + ' ms';
							stats.forNerds.resolution = response[stat].googFrameWidthSent + 'x' + response[stat].googFrameHeightSent;
							stats.analytics.framewidthsent = response[stat].googFrameWidthSent;
							stats.analytics.frameheightsent = response[stat].googFrameHeightSent;
							stats.analytics.outgoingframerate = response[stat].googFrameRateSent;
							stats.analytics.rtt = response[stat].googRtt;
							stats.analytics.packetslost = response[stat].packetsLost;
							stats.analytics.packetssent = response[stat].packetsSent;
							if (videoLastBytes === undefined) {
								videoLastBytes = response[stat].bytesSent;
								stats.forNerds.vbr = "Loading...";
							} else {
								stats.forNerds.vbr = bytesToBitrate(response[stat].bytesSent - videoLastBytes);
								stats.forNerds.bps += (response[stat].bytesSent - videoLastBytes) / 5;
								stats.analytics.outgoingvbr = toKbsOnly(response[stat].bytesSent - videoLastBytes);
								videoLastBytes = response[stat].bytesSent;
							}
						}
						if (stat.indexOf('_send') !== -1 && response[stat].googCodecName && response[stat].googCodecName === 'opus') {
							if (audioLastBytes === undefined) {
								audioLastBytes = response[stat].bytesSent;
								stats.forNerds.abr = "Loading...";
							} else {
								stats.forNerds.abr = bytesToBitrate(response[stat].bytesSent - audioLastBytes);
								stats.forNerds.bps += (response[stat].bytesSent - audioLastBytes) / 5;
								stats.analytics.outgoingabr = toKbsOnly(response[stat].bytesSent - audioLastBytes);
								audioLastBytes = response[stat].bytesSent;
							}
							stats.analytics.jitter = response[stat].googJitterReceived;
						}
						if (response[stat].networkType) {
							stats.forNerds.network = response[stat].networkType;
							stats.analytics.connectiontype = response[stat].networkType;
						}
						//check for guest steam data only if there is no guest using this node: receivingRemoteStream
						if (receivingRemoteStream) {
							if (stat.indexOf('_recv') !== -1 && response[stat].googCodecName && response[stat].googCodecName === 'VP8') {
								if (videoLastBytesRecv === undefined) {
									videoLastBytesRecv = response[stat].bytesReceived;
								} else {
									stats.analytics.incomingvbr = toKbsOnly(response[stat].bytesReceived - videoLastBytesRecv);
									videoLastBytesRecv = response[stat].bytesReceived;
								}
							}
							if (stat.indexOf('_recv') !== -1 && response[stat].googCodecName && response[stat].googCodecName === 'opus') {
								if (audioLastBytesRecv === undefined) {
									audioLastBytesRecv = response[stat].bytesReceived;
								} else {
									stats.analytics.incomingabr = toKbsOnly(response[stat].bytesReceived - audioLastBytesRecv);
									audioLastBytesRecv = response[stat].bytesReceived;
								}
							}
						}
					}
					//firefox:
					//NOTE Firefox currently does not return the frame specs (height, width and resolution), also missing the network type
					if (Api.browser.name.indexOf('Firefox') !== -1) {
						if (stat === 'outbound_rtp_video_1') {
							stats.forNerds.framerate = response[stat].framerateMean.toFixed(0);
							stats.forNerds.vbr = bytesToBitrate(response[stat].bitrateMean, true);
							stats.forNerds.bps += response[stat].bitrateMean / 8;
							stats.analytics.outgoingframerate = response[stat].framerateMean.toFixed(0);
							stats.analytics.packetssent = response[stat].packetsSent || '';
							stats.analytics.outgoingvbr = toKbsOnly(response[stat].bytesSent - videoLastBytes);
						}
						if (stat === 'outbound_rtcp_video_1') {
							stats.forNerds.vRTT = response[stat].mozRtt + ' ms';
							stats.analytics.rtt = response[stat].mozRtt;
							stats.analytics.packetslost = response[stat].packetsLost;
						}

						if (stat === 'outbound_rtp_audio_0') {
							if (audioLastBytes === undefined) {
								audioLastBytes = response[stat].bytesSent;
								stats.forNerds.abr = "Loading...";
							} else {
								stats.forNerds.abr = bytesToBitrate(response[stat].bytesSent - audioLastBytes);
								stats.forNerds.bps += (response[stat].bytesSent - audioLastBytes) / 5;
								stats.analytics.outgoingabr = toKbsOnly(response[stat].bytesSent - audioLastBytes);
								audioLastBytes = response[stat].bytesSent;
							}
						}
						if (stat === 'outbound_rtcp_audio_0') {
							stats.analytics.jitter = response[stat].jitter;
						}
						if (receivingRemoteStream) {
							if (stat === 'inbound_rtp_video_1') {
								stats.analytics.incomingvbr = toKbsOnly(response[stat].bitrateMean, true);
								stats.analytics.incomingframerate = response[stat].framerateMean.toFixed(0);
							}
							if (stat = 'inbound_rtp_audio_0') {
								if (audioLastBytesRecv === undefined) {
									audioLastBytesRecv = response[stat].bytesReceived;
								} else {
									stats.analytics.incomingabr = toKbsOnly(response[stat].bytesReceived - audioLastBytesRecv);
									audioLastBytesRecv = response[stat].bytesReceived;
								}
							}
						}
					}
				}
				deferred.resolve(stats);
			});
		} else {
			deferred.reject();
			console.warn('No peer connection found, either start a peer connection or wait for the current one to finish setting up.');
		}
		return deferred.promise;
	};

	webRtc.retrieveStats = function() {
		return stats;
	};

	webRtc.onPusherEvent = function(event, eventData) {
		var data = (eventData && eventData.message) ? eventData.message : null;
		if (event === 'onGuestBroadcasting') {
			receivingRemoteStream = true;
		}

		if (event === 'onGuestEnd') {
			receivingRemoteStream = false;
		}

		if (event === 'onBroadcastMcuDisconnect' && data && webRtc.pc) {
			//TODO: IMPLEMENT A RETRY METHOD IN CASE THE FIRST ATTEMPT FAILS
			webRtc.initialize(function(event) {
				if (event.candidate) {} else {
					webRtc.setStatus("End of candidates, sending sdp to server.");
					pcConfig.streamReady = true;
					Api.post('broadcast/reconnect', {
						userId: eventData.channelId,
						sdpOffer: webRtc.pc.localDescription.sdp
					}).then(function(response) {
						if (response.data.sdpAnswer) {
							webRtc.pc.setRemoteDescription(new pcConfig.SessionDescription({
								"sdp": response.data.sdpAnswer,
								"type": "answer"
							}), webRtc.setRemoteDescriptionSuccess, webRtc.setRemoteDescriptionFail);
						}
					});
				}
			}).then(function() {
				webRtc.setupWebrtcStream();
			});
		}
		if (event === 'onBroadcastPlayData' && (stats.analytics.outgoingabr !== undefined || stats.analytics.outgoingvbr !== undefined)) {
			captureWebrtcData('WEBRTC_HEARTBEAT', '');
		}

		if (event === 'onGuestEnd' || event === 'onBroadcastEnd') {
			//reset the webrtc stats
			stats = {
				forNerds: {
					bps: 0
				},
				analytics: {}
			};
		}
	};

	function micVolumeIsSupported() {
		var MediaStream = window.webkitMediaStream || window.MediaStream;
		if (MediaStream !== undefined) {
			return !!MediaStream.prototype.addTrack && !!MediaStream.prototype.removeTrack;
		} else {
			return false;
		}
	}

	function setStream(stream) {
		if (pcConfig.webrtcStream && pcConfig.webrtcStream.active) {
			webRtc.destroy(pcConfig.webrtcStream);
		}

		var url = window.URL || window.webkitURL,
			source;
		if (!webRtc.settings.sources.audioContext) {
			webRtc.settings.sources.audioContext = window.AudioContext ? new window.AudioContext() : new window.webkitAudioContext();
		}

		// Show video locally
		localVideo.src = url ? url.createObjectURL(stream) : stream;
		localVideo.play();
		localVideo.muted = 'true';

		//setup microphone settings
		if (micVolumeIsSupported() && Api.browser.name != 'Firefox') {
			webRtc.settings.sources.microphone = webRtc.settings.sources.audioContext.createMediaStreamSource(stream);
			webRtc.settings.sources.gainNode = webRtc.settings.sources.audioContext.createGain();
			var destination = webRtc.settings.sources.audioContext.createMediaStreamDestination();
			var outputStream = destination.stream;
			webRtc.settings.sources.microphone.connect(webRtc.settings.sources.gainNode);
			webRtc.settings.sources.gainNode.connect(destination);

			//create
			var filteredTrack = outputStream.getAudioTracks()[0];
			var originalTrack = stream.getAudioTracks()[0];
			webRtc.settings.sources.rawMicTrack = originalTrack;
			filteredTrack.label = originalTrack.label;

			//add the stream
			stream.addTrack(filteredTrack);
			stream.removeTrack(originalTrack);
		}

		//capture the stream
		pcConfig.webrtcStream = stream;
	}


	function onRemoteStreamAdded(event) {
		webRtc.setStatus("Received remote stream");
		var videoId = isGuest ? 'bcVideo' : 'guestVideo';
		var video = document.getElementById(videoId);
		video.src = window.URL.createObjectURL(event.stream);
		video.play();
		captureWebrtcData('WEBRTC_REMOTE_CONN', 'ADDED');
	}

	function onRemoteStreamRemoved(event) {
		var remoteVideo = document.getElementById('guestVideo');
		remoteVideo.src = '';
		captureWebrtcData('WEBRTC_REMOTE_CONN', 'REMOVED');
	}

	function offerCreated(description) {
		webRtc.pc.setLocalDescription(description, localDescriptionSet, localDescriptionNotSet);
		captureWebrtcData('WEBRTC_OFFER', 'SUCCESS');
	}

	function localDescriptionSet() {
		// console.log(webRtc.pc.localDescription.sdp);
		captureWebrtcData('WEBRTC_LOCAL', 'SET');
	}

	function localDescriptionNotSet() {
		webRtc.setStatus("Local description not set!");
		captureWebrtcData('WEBRTC_LOCAL', 'NOTSET');
	}

	function onIceConnectionStateChange() {
		captureWebrtcData('WEBRTC_ICE_STATE', webRtc.pc.iceConnectionState.toUpperCase());
	}

	function createOfferError(error) {
		captureWebrtcData('WEBRTC_OFFER', 'FAIL');
	}

	function WebSocketOnError(event) {
		webRtc.setStatus("WebSocket Error");
	}

	function WebSocketOnClose(event) {
		webRtc.setStatus("WebSocket Closed");
	}

	function WebSocketOnMessage(event) {

		var signal = JSON.parse(event.data);
		if (signal.sdp) {
			console.log("Remote SDP Packet received");
			console.log(signal.sdp);
			webRtc.pc.setRemoteDescription(new pcConfig.SessionDescription({
				"sdp": signal.sdp,
				"type": "answer"
			}), webRtc.setRemoteDescriptionSuccess, webRtc.setRemoteDescriptionFail);
		}

		if (signal.candidate && signal.broadcaster) {
			console.log("Candidate received from server, adding");
			webRtc.pc.addIceCandidate(new pcConfig.RTCIceCandidate(signal.candidate));
		}

		if (signal.close_me) {
			//connection.close();   // connection is not defined...
		}
	}

	function WebSocketOnOpen(event) {
		//webRtc.setStatus("WebSocket Opened: " + serverSocket);  // serverSocket is not defined....
	}

	function PcConfig() {
		this.PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
		this.SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
		this.RTCIceCandidate = window.mozRTCIceCandidate || window.webkitRTCIceCandidate || window.RTCIceCandidate;
		this.PeerConnectionConfig = {
			'iceServers': [{
				'url': 'stun:stun.l.google.com:19302'
			}]
		};
		this.location = window.location;
		this.streamReady = false;
		this.webrtcStream = undefined;
		this.videoWidth = 640;
		this.videoHeight = 480;
	}

	function drawWatermark(ctx, canvas) {
		var gradient = ctx.createLinearGradient(-Math.abs(canvas.height), canvas.height, 104, 104);
		gradient.addColorStop(0, "black");
		gradient.addColorStop(1, "transparent");
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(watermark, 15, (canvas.height - 85), 104, 70);
		return ctx;
	}

	function bytesToBitrate(bytes, alreadyBits) {
		var bits = alreadyBits ? bytes : (bytes / 5) * 8;
		if (bits < 1000) {
			return bits + " bps";
		} else if (bits < 1000000) {
			return (bits / 1000).toFixed(0) + "kbps";
		} else if (bits < 1000000000) {
			return (bits / 1000000).toFixed(1) + "mbps";
		} else if (bits >= 1000000000) {
			return (bits / 1000000000).toFixed(2) + "gbps";
		} else {
			console.warn('Could not convert bits');
		}
	}

	function toKbsOnly(bytes, alreadyBits) {
		var bits = alreadyBits ? bytes : (bytes / 5) * 8;
		return (bits / 1000).toFixed(2);
	}

	function captureWebrtcData(eventName, eventLabel) {
		if (swf.currentSession && swf.currentSession.partner == 1) {
			//this is a wrapper method so we don't have to add 1 second delays everywhere. We need this to calculate a potential set of bitrates
			stats.analytics.event = eventName;
			stats.analytics.eventlabel = eventLabel;
			stats.analytics.isguest = isGuest ? 1 : 0;
			trpx.capture(stats.analytics, trpx.captureGroups.webrtc);
		}
	}

	return webRtc;
}])

;
