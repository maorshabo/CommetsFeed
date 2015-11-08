'use strict';

/**
 * @ngdoc overview
 * @name commentsFeedApp
 * @description
 * # commentsFeedApp
 *
 * Main module of the application.
 */
angular
  .module('commentsFeedApp', [
    'ngRoute',
    'commentsFeedApp.comments'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
