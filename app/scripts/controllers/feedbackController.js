'use strict';

/**
 * @ngdoc function
 * @name Numisma.controller:FeedbackController
 * @description
 * # FeedbackController
 */
angular.module('Numisma')
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
