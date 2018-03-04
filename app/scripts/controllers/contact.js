'use strict';

/**
 * @ngdoc function
 * @name lmsApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the lmsApp
 */
angular.module('lmsApp')
  .controller('ContactCtrl', function (contactsService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    this.contacts =contactsService.getContacts();
    console.log(this.contacts);
  });
