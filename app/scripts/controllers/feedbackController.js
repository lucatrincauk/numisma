'use strict';

/**
 * @ngdoc function
 * @name CanteenFeedback.controller:FeedbackController
 * @description
 * # FeedbackController
 */
angular.module('CanteenFeedback')
    .controller('FeedbackController', function($scope, feedbacks) {

      $scope.feedbacks = feedbacks;
      $scope.newFeedback = {
        choice: ''
      };


      $scope.addFeedback = function() {
        $scope.feedbacks.$add($scope.newFeedback).then(function(){
          $scope.newFeedback = {
            choice: ''
          };
        });
      };


    });
