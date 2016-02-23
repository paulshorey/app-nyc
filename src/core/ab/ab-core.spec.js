// describe('Ab core', function() {
//     var AbCore, ab, $location;
//
//     beforeEach(function() {
//         config = {
//             settings: {
//                 ServerLocalBaseUrl: "http://www2-vd.younow.com",
//                 ServerCDNBaseUrl: "http://cdn2-vd.younow.com",
//                 ServerSecureLocalBaseUrl: "https://www2-vd.younow.com",
//                 TrackingHost: "test"
//             },
//             params: {
//                 host: 'www2-vd.younow.com'
//             }
//         };
//         module('younow.core.services');
//     });
//
//     beforeEach(inject(function(_AbCore_, _$location_) {
//         AbCore = _AbCore_;,
//         $location = _$location_;
//     }));
//
//     /*================================= FAIL ==================================*/
//     it('should fail if no config option is passed', function() {
//         var options = {
//             experiments: {},
//             app: 'desktop',
//             captureCallback: function() {
//             }
//         };
//
//         try {
//             new AbCore.Base(options);
//         } catch(e) {
//             expect(e.message).toBe('The ApiCore requires a config');
//         }
//     });
//
//     it('should fail if no experiments option is passed', function() {
//         var options = {
//             config: config,
//             app: 'desktop',
//             captureCallback: function() {
//             }
//         };
//
//         try {
//             new AbCore.Base(options);
//         } catch(e) {
//             expect(e.message).toBe('An experiments option is required for the abCore');
//         }
//     });
//
//     it('should fail if no app option is passed', function() {
//         var options = {
//             config: config,
//             experiments: {},
//             captureCallback: function() {
//             }
//         };
//
//         try {
//             new AbCore.Base(options);
//         } catch(e) {
//             expect(e.message).toBe('An app option (mobile or desktop) must be specified');
//         }
//     });
//
//     it('should fail if no capture callback option is passed', function() {
//         var options = {
//             config: config,
//             app: 'desktop',
//             experiments: {}
//         };
//
//         try {
//             new AbCore.Base(options);
//         } catch(e) {
//             expect(e.message).toBe('A captureCallback option must be specified for tracking');
//         }
//     });
//     /*================================= Variants ==================================*/
//     beforeEach(function() {
//
//         var experiments = {
//             home: {
//     		variantOverload: false,
//     		trafficAllocation: 100,
//     		version: 1,
//     		variants: {
//     			control: 'router.root',
//     			a: 'router.root_a'
//     		}
//     	};
//
//         var options = {
//             config: config,
//             app: 'desktop',
//             experiments: experiments,
//             captureCallback: function() {
//             }
//         };
//
//         ab = new AbCore.Base(options);
//     });
//
//     // it('should respect a url override', function() {
//     //     ab.variant
//     //     $location.path('www.younow.com?ab_EXPERIMENT');
//     // });
//     //
//     // it('should respect a backend ab test', function() {
//     //
//     // });
//     //
//     // it('should respect a variant overload', function() {
//     //
//     // });
//     //
//     // it('should be set in localStorage if not backend', function() {
//     //
//     // });
//     //
//     // it('should meet a set of conditions', function() {
//     //
//     // });
//     //
//     // it('should fire a tracking pixel event if the user joins the experiment', function() {
//     //
//     // });
// });
