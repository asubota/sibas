'use strict';

/**
 * @ngdoc function
 * @name sibasApp.controller:AdmineditCtrl
 * @description
 * # AdmineditCtrl
 * Controller of the sibasApp
 */
angular.module('sibasApp')
  .controller('AdminEditCtrl', function ($scope, $location, Addresses, $routeParams) {

    $scope.item = Addresses.get({id: $routeParams.id});

    $scope.save = function() {
      var success, fail;

      success = function() {
        $location.path('/atata/');
      };

      fail = function() {

      };

      Addresses.update({id: $scope.item.id}, $scope.item, success, fail);
    };

  });
