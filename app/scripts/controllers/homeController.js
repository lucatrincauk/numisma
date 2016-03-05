'use strict';

/**
 * @ngdoc function
 * @name CanteenFeedback.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('CanteenFeedback')
    .controller('HomeController', function($scope, feedbacks) {

      $scope.feedbacks = feedbacks;
      console.log(feedbacks)

    });
