'use strict';

/**
 * @ngdoc overview
 * @name testYeomanAngularApp
 * @description
 * # testYeomanAngularApp
 *
 * Main module of the application.
 */
angular
  .module('testYeomanAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test-route', {
        templateUrl: 'views/test-route.html',
        controller: 'TestRouteCtrl',
        controllerAs: 'testRoute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
