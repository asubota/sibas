'use strict';

/**
 * @ngdoc function
 * @name sibasApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the sibasApp
 */
angular.module('sibasApp')
  .controller('AdminCtrl', function ($scope, Addresses) {

    $scope.data = Addresses.query();

    $scope.remove = function(a) {
      window.alert(['No remove', '"', a.name, '"', 'NO !!!111'].join(' '));
    };

  });
