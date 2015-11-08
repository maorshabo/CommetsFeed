'use strict';

/**
 * @ngdoc directive
 * @name commentsFeedApp.directive:commentsList
 * @description directive used to display a comments list with a filter option
 * # commentsList
 */
angular.module('commentsFeedApp.comments')
  .directive('commentsList', ['$parse',function ($parse) {
    return {
      templateUrl: 'views/comments/commentsList.html',
      restrict: 'E',
      scope: {
        list: '='
      },
      controllerAs: 'commentsList',
      bindToController: true,
      controller: function Controller($scope) {
        // reset the filter model
        this.filter = '';
        // function to determine if we need to show an "not found" message
        this.shouldShowNotFoundMessage = function() {
          return $parse('(commentsList.list | filter: commentsList.filter).length == 0')($scope) && this.filter.length > 0 && this.list.length > 0
        }.bind(this)
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  }]);
