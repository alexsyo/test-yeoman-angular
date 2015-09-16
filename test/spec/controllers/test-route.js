'use strict';

describe('Controller: TestRouteCtrl', function () {

  // load the controller's module
  beforeEach(module('testYeomanAngularApp'));

  var TestRouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestRouteCtrl = $controller('TestRouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestRouteCtrl.awesomeThings.length).toBe(3);
  });
});
