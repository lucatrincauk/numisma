'use strict';

/**
 * @ngdoc function
 * @name CanteenFeedback.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('CanteenFeedback')
    .controller('HomeController', function($scope, ExampleService) {

        $scope.myHTML = null;

        $scope.fetchRandomText = function() {
            ExampleService.doSomethingAsync()
                .then(ExampleService.fetchSomethingFromServer)
                .then(function(response) {
                    $scope.myHTML = response.data.text;
                    // close pull to refresh loader
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };

        $scope.fetchRandomText();
    });
