'use strict';

/**
 * @ngdoc function
 * @name CanteenFeedback.service:Users
 */
angular.module('CanteenFeedback')
  .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + 'users');
    var users = $firebaseArray(ref);

    var Users = {
      getProfile: function(uid) {
        return $firebaseObject(ref.child(uid));
      },
      getDisplayName: function(uid) {
        return users.$getRecord(uid).displayName;
      }
    };
    return Users;

  });
