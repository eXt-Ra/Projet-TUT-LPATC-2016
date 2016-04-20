'use strict';

describe('Controller: FriseCtrl', function () {

  // load the controller's module
  beforeEach(module('projtutlpatc2016App'));

  var FriseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FriseCtrl = $controller('FriseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FriseCtrl.awesomeThings.length).toBe(3);
  });
});
