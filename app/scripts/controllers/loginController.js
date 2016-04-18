'use strict';

/**
 * @ngdoc function
 * @name Numisma.controller:FeedbackController
 * @description
 * # FeedbackController
 */
angular.module('Numisma')
    .controller('LoginController', function($scope, AuthService, $stateParams, $state, User) {

      if (User.getProfile) {
        $state.go('app.home');
      }
      
      $scope.loginWithGoogle = function() {
        AuthService.loginWithGoogle().then(function(response) {
          console.log(response)
          if ($stateParams.route === 'app.login' || !$stateParams.route) {
            console.log('sending home')
            $state.go('app.home');
          } else {
            console.log('sending to desired route')
            $state.go($stateParams.route)
          }
        }, function() {
          console.log('error')
        });
      }


    });
