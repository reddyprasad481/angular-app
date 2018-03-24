'use strict';

/**
 * @ngdoc function
 * @name lmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lmsApp
 */
angular.module('lmsApp')
  .controller('MainCtrl', function ($sessionStorage) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
        'bootstrap'
    ];
	 console.log($sessionStorage);
	$sessionStorage.Uname = 'Reddy';
  });
