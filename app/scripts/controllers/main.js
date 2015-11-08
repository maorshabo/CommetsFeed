'use strict';

/**
 * @ngdoc function
 * @name commentsFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the commentsFeedApp
 */
angular.module('commentsFeedApp')
  .controller('MainCtrl', ['Common', function (Common) {
    this.common = Common;
  }]);
