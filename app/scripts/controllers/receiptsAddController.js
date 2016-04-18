'use strict';

/**
 * @ngdoc function
 * @name Numisma.controller:FeedbackController
 * @description
 * # FeedbackController
 */
angular.module('Numisma')
    .controller('ReceiptsAddController', function($scope, receipts, User) {

      $scope.receipts = receipts;
      $scope.newReceipt = {
        'date': new Date()
      };

      $scope.user = User.getProfile();
      $scope.addReceipt = function() {
        $scope.newReceipt.uid = $scope.user.uid;
        $scope.newReceipt.receiptDate = $scope.newReceipt.date.toString();
        $scope.receipts.$add($scope.newReceipt).then(function(){
          $scope.newReceipt = {
            'date': new Date()
          };
        });
      };


    });
