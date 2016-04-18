'use strict';

/**
 * @ngdoc function
 * @name Numisma.controller:MainController
 * @description
 * # MainController
 * This controller handles the side menu
 */
angular.module('Numisma')
    .controller('MainController', function($scope, AuthService, $state, User) {

      $scope.logout = function() {
        AuthService.logout();
        User.removeProfile();
        $state.go('app.login');
      }

      $scope.user = User.getProfile();
      

    });
