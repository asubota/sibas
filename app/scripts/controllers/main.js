'use strict';

/**
 * @ngdoc function
 * @name sibasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sibasApp
 */
angular.module('sibasApp')
  .controller('MainCtrl', function($scope, Addresses, bsui, $location, $rootScope) {

    $scope.reverse = true;
    $scope.sortField = 'name';
    $scope.filtered = [];

    $scope.$watch('customText', function(n, o) {
      if (n !== o) {
        // temp disable, leads to page refresh
        // $location.search('search', n);
      }
    });

    $scope.$watch('type', function(n, o) {
      if (n !== o) {
        // temp disable, leads to page refresh
        // $location.search('type', n);
      }
    });

    $scope.data = Addresses.query();

    $scope.data.$promise.then(function(data) {
      $scope.filtered = data;

      $scope.types =  _.uniq(_.map(data, function(item) {
        return item.type;
      })).sort();

      bsui.updatePicker();
      $scope.byType();
    });

    $scope.byType = function() {
      $scope.filtered = !$scope.type ? $scope.data : _.filter($scope.data, function(item) {
        return item.type === $scope.type;
      });
    };

    $rootScope.$on('$locationChangeSuccess', function(){
      var search = $location.search().search,
        type = $location.search().type;

      if (search) {
        $scope.customText = search;
      }
      if (type) {
        $scope.type = type;
      }
    });

  });
