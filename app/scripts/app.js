'use strict';

/**
 * @ngdoc overview
 * @name lmsApp
 * @description
 * # lmsApp
 *
 * Main module of the application.
 */
angular
  .module('lmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngStorage',
    'main',
    'commonServices'
  ])
  .config(function ($routeProvider, $locationProvider) {
    
     $locationProvider.hashPrefix('');
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
