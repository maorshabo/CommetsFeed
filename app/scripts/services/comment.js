'use strict';

/**
 * @ngdoc service
 * @name commentsFeedApp.comments.Comment
 * @description Comment service used as constructor of new comment
 * # Comment
 * Service in the commentsFeedApp.comments
 */
angular.module('commentsFeedApp.comments')
  .service('Comment', function () {

    var id = 1;

    function generateId() {
      return id++;
    }

    return function Comment(email, message) {
      this.id = generateId();
      this.email = email;
      this.message = message;
      // Gravatar documentations says that we need to md5 hash the email and then get the user profile image
      this.image = 'http://www.gravatar.com/avatar/' + SparkMD5.hash(email, false) + '.jpg';
    };
  });
