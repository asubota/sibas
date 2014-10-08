'use strict';

/**
 * @ngdoc function
 * @name sibasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sibasApp
 */
angular.module('sibasApp')
  .controller('MainCtrl', function($scope, Data, bsui, $location, $rootScope) {
    $scope.reverse = true;
    $scope.sortField = 'name';


    $rootScope.$on('$locationChangeSuccess', function(){
      var search = $location.search().search;
      if (search) {
        $scope.customText = search;
      }
    });

    $scope.$watch('customText', function(n, o) {
      if (n !== o) {
        $location.search('search', n);
      }
    });

    Data.then(function(data) {
      $scope.data = data;
      $scope.filtered = data;

      $scope.types =  _.uniq(_.map(data, function(item) {
        return item.type;
      })).sort();

      bsui.updatePicker();
    });

    $scope.byType = function() {
      $scope.filtered = !$scope.type ? $scope.data : _.filter($scope.data, function(item) {
        return item.type === $scope.type;
      });
    };
  });
