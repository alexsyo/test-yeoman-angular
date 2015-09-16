'use strict';

/**
 * @ngdoc filter
 * @name testYeomanAngularApp.filter:testFilter
 * @function
 * @description
 * # testFilter
 * Filter in the testYeomanAngularApp.
 */
angular.module('testYeomanAngularApp')
  .filter('testFilter', function () {
    return function (input) {
      return 'testFilter filter: ' + input;
    };
  });
