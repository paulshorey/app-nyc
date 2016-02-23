describe( 'YouNowLite main app ctrl', function() {
  var $state, YouNowLiteRouter, scope, $window, config;

  beforeEach( module( 'YouNowLite', function($provide) {
    $provide.constant('configData', {}); //mock out our constant for the config service
    window.globalVars = {
      pageType: '',
      isAndroid: ''
    };

    window.ga = function() {};
  }) );

  beforeEach( inject( function(_$state_, $controller, $rootScope, _$window_, _config_, broadcasterService, iState) {
    scope = $rootScope.$new();
    $state = _$state_;
    $window = _$window_;
    config = _config_;
    iState = iState;

    //populate user
    broadcasterService.store({
      userId: 11111
    },'channel');

    YouNowLiteRouter = $controller('YouNowLiteRouter', {
      $scope: scope,
      config: config,
      broadcasterService: broadcasterService,
      query: 'test',
      iState: iState
    });
  }));

  it( 'should be a valid state and have a controller', function() {
    expect(YouNowLiteRouter).toBeDefined();
    expect($state.current.name).toBe('');
  });

  // it( 'should load the ga object and set up ga', function() {
  //   expect($window.ga).toBeDefined();
  // });

  // it( 'should send the user to the live state if live', function() {

  // });

  // it( 'should send the user to the profile state if not live', function() {

  // });

  // it( 'should render itself if the user is not defined', function() {

  // });

});
