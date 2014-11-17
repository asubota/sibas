'use strict';

/**
 * @ngdoc function
 * @name sibasApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the sibasApp
 */
angular.module('sibasApp')
  .controller('GameCtrl', function ($scope, Game, District, bsui) {

    $scope.districts = District.query();

    $scope.districts.$promise.then(function() {
      bsui.updatePicker();
    });

    $scope.get = function() {
      $scope.data = Game.query({
        district: $scope.district,
        count: 10
      });
    };

  });
