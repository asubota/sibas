'use strict';

/**
 * @ngdoc function
 * @name sibasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sibasApp
 */
angular.module('sibasApp')
  .controller('MainCtrl', function($http, $scope) {

    $http.get('/data/data.wiki.json').success(function(data) {
      $scope.data = data;

      $scope.types =  _.uniq(_.map(data, function(item) {
        return item.type;
      })).sort();
    });

    $scope.byType = function() {
      $scope.filtered = _.filter($scope.data, function(item) {
        return item.type === $scope.type;
      });
    };
  });
