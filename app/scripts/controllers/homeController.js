'use strict';

/**
 * @ngdoc function
 * @name Numisma.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Numisma')
    .controller('HomeController', function($scope, receipts, AuthService) {

      $scope.receipts = receipts;
      console.log(receipts)

    });
