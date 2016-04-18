'use strict';

/**
 * @ngdoc function
 * @name Numisma.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Numisma')
    .controller('HomeController', function($scope, feedbacks, AuthService) {

      $scope.feedbacks = feedbacks;
      console.log(feedbacks)

      // AuthService.loginWithGoogle();

    });
