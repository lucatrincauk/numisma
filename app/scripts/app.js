'use strict';

/**
 * @ngdoc overview
 * @name Numisma
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('Numisma', ['ionic', 'ngCordova', 'ngResource', 'ngSanitize', 'firebase'])

    .run(function($ionicPlatform, $rootScope, AuthService, $state, User) {

        $ionicPlatform.ready(function() {
            // save to use plugins here
        });
        var hasRedirected = false;
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          if (toState.name !== 'app.login' && !User.getProfile()) {
            event.preventDefault();
            console.log(event)
            AuthService.getAuth().then(function(response) {
              console.log('successful login')
              if (!hasRedirected) {
                console.log('first time success')
                $state.go(toState)
                hasRedirected = true;
              }
            }, function(error) {
              console.log('failed login')
              $state.go('app.login', {'route': toState.name});
            })
          }
        });





    })
    .constant('FirebaseUrl', 'https://numisma.firebaseio.com/')

    .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
        // register $http interceptors, if any. e.g.
        // $httpProvider.interceptors.push('interceptor-name');

        // Application routing
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/main.html',
                controller: 'MainController'
            })
            .state('app.home', {
                url: '/home',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/home.html',
                        controller: 'HomeController'
                    }
                },
                resolve: {
                  feedbacks: function (Feedbacks){
                    return Feedbacks.getAllFeedbacks().$loaded();
                  }
                }

            })
            .state('app.login', {
                url: '/login',
                cache: true,
                params: {
                  'route': null
                },
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('app.feedback', {
                url: '/feedback',
                cache: true,
                views: {
                    'viewContent': {
                        templateUrl: 'templates/views/feedback.html',
                        controller: 'FeedbackController'
                    }
                },
                resolve: {
                  feedbacks: function (Feedbacks){
                    return Feedbacks.getTodaysFeedbacks().$loaded();
                  }
                }

            });


        // redirects to default route for undefined routes
        $urlRouterProvider.otherwise('/app/home');
    });
