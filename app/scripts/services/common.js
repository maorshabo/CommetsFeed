'use strict';

/**
 * @ngdoc service
 * @name commentsFeedApp.Common
 * @description Common service is a "application service" all the common functions and settings should be here
 * # Common
 * Service in the commentsFeedApp.
 */
angular.module('commentsFeedApp')
  .service('Common', ['Comment',function (Comment) {
    // variable that holds all comments in the application
    this.commentsList = [];
    // function to add new comment to the comments list
    this.addComment = function addComment(email,message) {
      this.commentsList.unshift(new Comment(email,message));
    }.bind(this);
  }]);
