'use strict';

/**
 * @ngdoc overview
 * @name sibasApp
 * @description
 * # sibasApp
 *
 * Main module of the application.
 */
angular
  .module('sibasApp', [
    'ui.bootstrap',
    'ngResource',
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/atata', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/atata/:id', {
        templateUrl: 'views/admin-edit.html',
        controller: 'AdminEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
