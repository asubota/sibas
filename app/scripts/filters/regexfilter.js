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
    return function(dataArray, searchTerm) {
      var term, regex;

      if (!dataArray) {
        return;
      }

      if( !searchTerm ){
        return dataArray;
      } else {
        term = searchTerm.toLowerCase();
        regex = new RegExp(['.*', term.replace(/\*/g, '.'), '.*'].join(''), 'g');
      }

      return dataArray.filter(function(item) {
        var name, coordinates, ru;

        ru = _.first(_.values(_.pick(item, 'name_ru')));
        ru = ru ? regex.test(ru.toLowerCase()) : false;

        coordinates = item.coordinates ? item.coordinates.join().indexOf(term) > -1 : false;
        name = regex.test(item.name.toLowerCase());

        return name || coordinates || ru;
      });
    };
  });
