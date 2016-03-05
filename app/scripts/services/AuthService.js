'use strict';

/**
 * @ngdoc service
 * @name CanteenFeedback.AuthService
**/
angular.module('CanteenFeedback')
    .factory('AuthService', function($firebaseAuth, FirebaseUrl) {
        var ref = new Firebase(FirebaseUrl);
        var auth = $firebaseAuth(ref);

        ref.authAnonymously();

        return auth;
    });
