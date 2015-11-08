'use strict';

/**
 * @ngdoc directive
 * @name commentsFeedApp.directive:comments
 * @description comment is a directive to show a single comment
 * # comments
 */
angular.module('commentsFeedApp.comments',[])
  .directive('comment', function () {
    return {
      templateUrl: 'views/comments/comment.html',
      restrict: 'E',
      scope: {
        comment: '='
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
