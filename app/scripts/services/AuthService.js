'use strict';

/**
 * @ngdoc service
 * @name Numisma.AuthService
**/
angular.module('Numisma')
    .factory('AuthService', function($firebaseAuth, FirebaseUrl, $q) {
        var ref = new Firebase(FirebaseUrl);


        function loginWithGoogle() {
          var deferred = $q.defer();

          ref.authWithOAuthPopup("google", function(error, authData) {
            if (error) {
              deferred.reject('Login failed: ' + error);
            } else {
              deferred.resolve(authData);
            }
          });

          return deferred.promise;
        }

        function getAuth() {
          var deferred = $q.defer();

          var authData = ref.getAuth();

          if (authData === null) {
            deferred.reject('You need to be authenticated to access this resource.');
          } else {
            deferred.resolve(authData);
          }
          return deferred.promise;
        }

        function logout() {
          ref.unauth();
        }


        return {
          loginWithGoogle: loginWithGoogle,
          getAuth: getAuth,
          logout: logout
        }
    });
