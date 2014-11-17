'use strict';

/**
 * @ngdoc service
 * @name sibasApp.Addresses
 * @description
 * # Addresses
 * Service in the sibasApp.
 */
angular.module('sibasApp')
  .service('Addresses', function($resource) {
    return $resource('http://10.1.12.119:3000/addresses/:id', {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  });
