'use strict';

describe('Controller: TestControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('testYeomanAngularApp'));

  var TestControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestControllerCtrl = $controller('TestControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestControllerCtrl.awesomeThings.length).toBe(3);
  });
});
