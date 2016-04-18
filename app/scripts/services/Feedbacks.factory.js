'use strict';

/**
 * @ngdoc function
 * @name Numisma.service:Feedbacks
 */
angular.module('Numisma')
  .factory('Feedbacks', function($firebaseArray, FirebaseUrl) {



    function dateFormat () {
    	var date = new Date();
    	return date.toJSON().slice(0, 10);
    }


    var ref = new Firebase(FirebaseUrl);

    var getTodaysFeedbacks = function() {
      return $firebaseArray(ref.child('feedbacks').child(dateFormat()));
    };

    var getAllFeedbacks = function() {
      return $firebaseArray(ref.child('feedbacks').orderByKey().startAt('2016-03-02').endAt('2016-03-03'));
    };

    var feedbacks = {
      getTodaysFeedbacks: getTodaysFeedbacks,
      getAllFeedbacks: getAllFeedbacks
    }

    return feedbacks;

  });
