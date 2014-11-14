'use strict';

describe('Controller: AdmineditCtrl', function () {

  // load the controller's module
  beforeEach(module('apiApp'));

  var AdmineditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdmineditCtrl = $controller('AdmineditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
