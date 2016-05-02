'use strict';

describe('Controller: QuizzCtrl', function () {

  // load the controller's module
  beforeEach(module('projtutlpatc2016App'));

  var QuizzCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuizzCtrl = $controller('QuizzCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuizzCtrl.awesomeThings.length).toBe(3);
  });
});
