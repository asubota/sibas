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
    // return $resource('/api/addresses/:id', {id: '@_id'}, {

    return $resource('http://0.0.0.0:3000/addresses/:id', {id: '@_id'}, {
      update: {
        method: 'PUT'
      }
    });
  });
