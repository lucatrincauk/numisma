'use strict';

/**
 * @ngdoc function
 * @name Numisma.service:Feedbacks
 */
angular.module('Numisma')
  .factory('Receipts', function($firebaseArray, FirebaseUrl) {

    var ref = new Firebase(FirebaseUrl);


    var getAllReceipts = function() {
      return $firebaseArray(ref.child('receipts'));
    };

    var receipts = {
      getAllReceipts: getAllReceipts
    }

    return receipts;

  });
