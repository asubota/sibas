'use strict';

/**
 * @ngdoc service
 * @name sibasApp.District
 * @description
 * # District
 * Service in the sibasApp.
 */
angular.module('sibasApp')
  .service('District', function($resource) {
    return $resource('http://10.1.12.119:3000/api/districts');
  });
