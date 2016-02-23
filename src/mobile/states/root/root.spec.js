describe( 'Root State', function() {
  var $state, RootCtrl, scope, generateYozio, $controller, config, Api, iState, user;

  beforeEach( module( 'YouNowLite', function($provide) {
      $provide.constant('configData', {}); //mock out our constant for the config service
      window.globalVars = {
        pageType: '',
        isAndroid: ''
      };
  }));

  beforeEach( inject( function(_$state_, _$controller_, $rootScope, _config_, _Api_, _iState_, _user_) {
    scope = $rootScope.$new();
    $state = _$state_;
    $controller = _$controller_;
    config = _config_;
    Api = _Api_;
    iState = _iState_;
    user = _user_;

    //inject a fake broadcast
    user.store({
      broadcastId: 11111
    }, 'broadcast');

    //inject a fake user
    user.store({
      userId: 11111
    }, 'channel');

  }));

  it( 'should be a valid state and have a controller', function() {
    RootNotLiveCtrl = $controller('RootNotLiveCtrl', {
      $scope: scope,
      config: config,
      Api: Api,
      iState: iState,
      user: user
    });

    expect(RootNotLiveCtrl).toBeDefined();
    $state.go('router.rootNotLive');
    scope.$apply();
    expect($state.current.name).toBe('router.rootNotLive');
  });

  it( 'should be a valid state and have a controller', function() {
    RootTabletCtrl = $controller('RootTabletCtrl', {
      $scope: scope,
      config: config,
      Api: Api,
      iState: iState,
      user: user
    });

    expect(RootTabletCtrl).toBeDefined();
    $state.go('router.rootTablet');
    scope.$apply();
    expect($state.current.name).toBe('router.rootTablet');
  });

  it( 'should be a valid state and have a controller', function() {
    RootLiveGnCtrl = $controller('RootLiveGnCtrl', {
      $scope: scope,
      config: config,
      Api: Api,
      iState: iState,
      user: user
    });

    expect(RootLiveGnCtrl).toBeDefined();
    $state.go('router.rootLiveGn');
    scope.$apply();
    expect($state.current.name).toBe('router.rootLiveGn');
  });

  it( 'should be a valid state and have a controller', function() {
    RootReturnCtrl = $controller('RootReturnCtrl', {
      $scope: scope,
      config: config,
      Api: Api,
      iState: iState,
      user: user
    });

    expect(RootReturnCtrl).toBeDefined();
    $state.go('router.rootReturn');
    scope.$apply();
    expect($state.current.name).toBe('router.rootReturn');
  });


});
