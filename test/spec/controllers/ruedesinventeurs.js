'use strict';

describe('Controller: RuedesinventeursCtrl', function () {

  // load the controller's module
  beforeEach(module('projtutlpatc2016App'));

  var RuedesinventeursCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RuedesinventeursCtrl = $controller('RuedesinventeursCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RuedesinventeursCtrl.awesomeThings.length).toBe(3);
  });
});
