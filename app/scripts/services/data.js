'use strict';

/**
 * @ngdoc service
 * @name sibasApp.data
 * @description
 * # data
 * Factory in the sibasApp.
 */
angular.module('sibasApp')
  .factory('Data', function($http, $q) {
    var deferred = $q.defer();

    $http.get('data/data.wiki.ru.json').success(function(data) {
      deferred.resolve(data);
    });

    return deferred.promise;
  });
