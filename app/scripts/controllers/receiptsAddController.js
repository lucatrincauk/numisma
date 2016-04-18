'use strict';

/**
 * @ngdoc function
 * @name Numisma.controller:FeedbackController
 * @description
 * # FeedbackController
 */
angular.module('Numisma')
    .controller('ReceiptsAddController', function($scope, Receipts) {

      $scope.receipts = receipts;
      $scope.newReceipt = {
        amount: ''
      };


      $scope.addReceipt = function() {
        $scope.receipts.$add($scope.newReceipt).then(function(){
          $scope.newReceipt = {
            amount: ''
          };
        });
      };


    });
