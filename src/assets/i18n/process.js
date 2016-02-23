var pro = process = process || {};
pro.fs = require('fs');
pro.glob = require('glob');
pro.merge = require('merge');

var valt = function(_val, _k){
	if (
		_k!='header_progress' &&
		_k!='eob_progress_to' &&
	    	_k!='livebroadcast_of_broadcasters_on'
	) {
		var match = _val.match(/(\{\{[a-z]+\}\})/);
		var tag = match ? match[1] : '{{value}}';
		_val = _val.replace(/(\{\ ?\{.*\}\ ?\})/, tag);
	}
	return _val;
}


// #) UNDO MANUAL CORRECTIONS
pro.glob("*.json", {}, function (er, files) {
	for (var f in files) {
		var _la = files[f].match(/(\w{2})\./)[1];
		if (_la=='en') {
			continue;
		}
		if (_la) {

			var _current = JSON.parse(pro.fs.readFileSync(files[f], 'utf8'));
			var _smartling = JSON.parse(pro.fs.readFileSync('_smartling/'+_la+'.json', 'utf8'));
			
			// each key
			for (var _k in _current) {
				_k = _k.replace(/-/g,'_');

				// use smartling
				if (_smartling[_k]) {
					_current[_k] = valt(_smartling[_k], _k);
				}

			}

			pro.fs.unlink(_la+'.json');
			pro.fs.writeFile(_la+'.json', JSON.stringify(_current, null, "\t"), function(err) {
				if (err) {
					return console.log('Error: '+err);
				} else {
					//console.log('current');
				}
			});
		}
	}
});








// var valt = function(_val, _k){
// 	if (
// 		_k!='header_progress' &&
// 		_k!='eob_progress_to' &&
// 	    	_k!='livebroadcast_of_broadcasters_on'
// 	) {
// 		var match = _val.match(/(\{\{[a-z]+\}\})/);
// 		var tag = match ? match[1] : '{{value}}';
// 		_val = _val.replace(/(\{\ ?\{.*\}\ ?\})/, tag);
// 	}
// 	return _val;
// }


// // #) UNDO MANUAL CORRECTIONS
// pro.glob("*.json", {}, function (er, files) {
// 	for (var f in files) {
// 		var _la = files[f].match(/(\w{2})\./)[1];
// 		if (_la=='en') {
// 			continue;
// 		}
// 		if (_la) {

// 			var _google= {};
// 			var _current = JSON.parse(pro.fs.readFileSync(files[f], 'utf8'));
// 			var _smartling = JSON.parse(pro.fs.readFileSync('_smartling/'+_la+'.json', 'utf8'));
// 			var _diff_smartling= {};
// 			var _diff_manual= {};
// 			var _diff_compare= '';
			
// 			// each key
// 			for (var _k in _current) {
// 				_k = _k.replace(/-/g,'_');

// 				// value
// 				if (_smartling[_k]==_current[_k]) {
// 					// same
// 				} else {
// 					// different
// 					if (!_smartling[_k]) {
// 						// use our google translate
// 						_current[_k] = valt(_current[_k], _k);
// 						_google[_k] = _current[_k];
// 					} else if (
// 						// use ours always with exceptions
// 						_k!='header_progress' &&
// 						_k!='eob_progress_to' &&
// 					    	_k!='livebroadcast_of_broadcasters_on' &&
// 					    	_k!='subscribe_cancel_last_day' &&
// 					    	_k!='golive_camera' &&
// 					    	_k!='golive_mic'
// 				    	) {
// 						_current[_k] = valt(_current[_k], _k);
// 						_diff_smartling[_k] = _smartling[_k];
// 						_diff_manual[_k] = _current[_k];
// 						console.log("["+_k+"]\n[smartling]\t"+_smartling[_k]+"\n[manually]\t"+valt(_current[_k], _k)+"\n\n");
// 						_diff_compare += "["+_k+"]\n[smartling]\t"+_smartling[_k]+"\n[manually]\t"+valt(_current[_k], _k)+"\n\n";

// 					} else if (1==1) {
// 						// use smartling
// 						_current[_k] = valt(_smartling[_k], _k);
// 					}

// 				}

// 			}

// 			pro.fs.unlink(_la+'.json');
// 			pro.fs.writeFile(_la+'.json', JSON.stringify(_current, null, "\t"), function(err) {
// 				if (err) {
// 					return console.log('Error: '+err);
// 				} else {
// 					//console.log('current');
// 				}
// 			}); 
// 			pro.fs.unlink('_diff_smartling/'+_la+'.json');
// 			if (_diff_smartling.length>0) {
// 				pro.fs.writeFile('_diff_smartling/'+_la+'.json', JSON.stringify(_diff_smartling, null, "\t"), function(err) {
// 					if (err) {
// 						return console.log('Error: '+err);
// 					} else {
// 						//console.log('smartling');
// 					}
// 				}); 
// 			}
// 			pro.fs.unlink('_diff_manual/'+_la+'.json');
// 			if (_diff_manual.length>0) {
// 				pro.fs.writeFile('_diff_manual/'+_la+'.json', JSON.stringify(_diff_manual, null, "\t"), function(err) {
// 					if (err) {
// 						return console.log('Error: '+err);
// 					} else {
// 						//console.log('manual');
// 					}
// 				}); 
// 			}
// 			pro.fs.unlink('_google/'+_la+'.json');
// 			if (_google.length>0) {
// 				pro.fs.writeFile('_google/'+_la+'.json', JSON.stringify(_google, null, "\t"), function(err) {
// 					if (err) {
// 						return console.log('Error: '+err);
// 					} else {
// 						//console.log('google');
// 					}
// 				}); 
// 			}
// 			pro.fs.unlink('_diff_compare/'+_la+'.txt');
// 			pro.fs.writeFile('_diff_compare/'+_la+'.txt', _diff_compare, function(err) {
// 				if (err) {
// 					return console.log('Error: '+err);
// 				} else {
// 					//console.log('compare');
// 				}
// 			}); 
// 		}
// 	}
// });


