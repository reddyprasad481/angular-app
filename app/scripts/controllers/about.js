'use strict';

/**
 * @ngdoc function
 * @name lmsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lmsApp
 */
angular.module('lmsApp')
  .controller('AboutCtrl', function ($sessionStorage) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	this.name = $sessionStorage.Uname ;
  });
