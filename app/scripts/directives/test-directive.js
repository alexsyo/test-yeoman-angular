'use strict';

/**
 * @ngdoc directive
 * @name testYeomanAngularApp.directive:testDirective
 * @description
 * # testDirective
 */
angular.module('testYeomanAngularApp')
  .directive('testDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the testDirective directive');
      }
    };
  });
