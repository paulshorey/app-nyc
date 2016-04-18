'use strict';

angular.module('mytodoApp', [
    'backand',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.sortable',
    'mytodoApp.config.interceptors',
    'mytodoApp.config.consts'
])
    .config(['$stateProvider', '$locationProvider', '$httpProvider', '$urlRouterProvider', 'BackandProvider', 'CONSTS',
        function ($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider, BackandProvider, CONSTS) {
            BackandProvider.setAnonymousToken(CONSTS.anonymousToken)
                .setSignUpToken(CONSTS.signUpToken)
                .setAppName(CONSTS.appName);
            
            $locationProvider.html5Mode(true);

            //By default in the SDK when signup is success it's automatically signin.
            //In this app we wanted to show all the process so we turned it off.
            BackandProvider.runSigninAfterSignup(false);

            $httpProvider.interceptors.push('todoHttpInterceptor');

            $urlRouterProvider.otherwise("");

            $stateProvider
                .state('/appAbstract', {
                	   url: '/',
                    abstract: true,
                    templateUrl: 'views/all/header.html',
                    controller: 'HeaderCtrl as header'
                })
                .state('/all', {
                    url: '',
                    parent: '/appAbstract',
                    templateUrl: 'views/all/list.html',
                    controller: 'TodoListCtrl as todoList'
                })

                // user
                .state('/userAbstract', {
                    url: '/',
                    abstract: true,
                    templateUrl: 'views/my/header.html',
                    controller: 'HeaderCtrl as header'
                })
                .state('/my', {
                    url: '/my',
                    parent: '/userAbstract',
                    templateUrl: 'views/my/edit.html',
                    controller: 'TodoListCtrl as todoList'
                })
                .state('/changePassword', {
                    url: '/changePassword',
                    parent: '/userAbstract',
                    templateUrl: 'views/my/change-password.html',
                    controller: 'ChangePasswordCtrl as changePassword'
                })
                .state('/login', {
                    url: '/login',
                    templateUrl: 'views/my/login.html',
                    controller: 'LoginCtrl as login',
                    params: {
                        error: null
                    }
                })
                .state('/user/resetPassword', {
                    url: '/user/resetPassword',
                    templateUrl: 'views/my/reset-password.html',
                    controller: 'ResetPasswordCtrl as resetPassword'
                });
        }]);
