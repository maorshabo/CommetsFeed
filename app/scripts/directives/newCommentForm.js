'use strict';

/**
 * @ngdoc directive
 * @name commentsFeedApp.directive:newCommentForm
 * @description New Comment Form is a directive that shows a form and handle new comments
 * # newCommentForm
 */
angular.module('commentsFeedApp')
  .directive('newCommentForm', ['Common', function (Common) {
    return {
      templateUrl: 'views/newCommentForm.html',
      restrict: 'E',
      bindToController: true,
      controllerAs: 'newCommentForm',
      controller: function Controller() {
        // view's comment model
        this.comment = {
          email: '',
          message: '',
          reset: function ResetCommentView() {
            this.email = '';
            this.message = '';
          }
        };

        // function to handler the submit button of the form
        this.addComment = function () {
          Common.addComment(this.comment.email, this.comment.message);
          this.comment.reset();
        }.bind(this);
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  }]);
