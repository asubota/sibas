'use strict';

/**
 * @ngdoc service
 * @name sibasApp.bsui
 * @description
 * # bsui
 * Service in the sibasApp.
 */
angular.module('sibasApp')
  .service('bsui', function bsui($timeout, $rootElement) {
    var picker = $rootElement.find('.bs-select');

    this.updatePicker = function() {
      $timeout(function() {
        picker.selectpicker('refresh');
      });
    };
  });
