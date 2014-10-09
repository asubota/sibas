'use strict';

/**
 * @ngdoc filter
 * @name sibasApp.filter:regexFilter
 * @function
 * @description
 * # regexFilter
 * Filter in the sibasApp.
 */
angular.module('sibasApp')
  .filter('regexFilter', function() {
    var data = function(item, term) {
      var regex = new RegExp(term.replace(/\*/g, '.+').replace(/\?/g, '.'), 'g');

      return function(field) {
        return !!item[field] ? regex.test(item[field].toLowerCase()) : false;
      };
    };

    return function(dataArray, searchTerm) {
      var term;

      if (!dataArray) {
        return;
      }

      if( !searchTerm ){
        return dataArray;
      }

      term = searchTerm.toLowerCase();
      return dataArray.filter(function(item) {
        var coordinates, test = data(item, term);

        coordinates = item.coordinates ? item.coordinates.join().indexOf(term) > -1 : false;

        return test('name_ru') || test('name') || coordinates;
      });
    };
  });
