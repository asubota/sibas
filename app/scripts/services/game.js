'use strict';

/**
 * @ngdoc service
 * @name sibasApp.Game
 * @description
 * # Game
 * Service in the sibasApp.
 */
angular.module('sibasApp')
  .service('Game', function($resource) {
    return $resource('http://10.1.12.119:3000/api/game/:district/:count', {
      district: '@_district',
      count: '@_count'
    });
  });
