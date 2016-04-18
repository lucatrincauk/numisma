'use strict';

/**
 * @ngdoc service
 * @name Numisma.AuthService
**/
angular.module('Numisma')
    .factory('User', function($firebaseAuth, FirebaseUrl, $q) {
        var ref = new Firebase(FirebaseUrl),
            userProfile = null;


        ref.onAuth(function(authData) {
          if (authData) {
            userProfile = authData;
          } else {
            console.log("Client unauthenticated.")
          }
        });

        var removeProfile = function() {
          userProfile = null;
        };

        var getProfile = function() {
          return userProfile || null;
        }

        return {
          getProfile: getProfile,
          removeProfile: removeProfile
        }
    });
