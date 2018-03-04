'use strict';

/**
 * @ngdoc service
 * @name lmsApp.contactsService
 * @description
 * # contactsService
 * Service in the lmsApp.
 */
angular.module('lmsApp')
  .service('contactsService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    this.getContacts=function(){
        
        var contacts=[
            {name:'Reddy' ,des:'owner'},
              {name:'Prasad', des:'AVP'},
              {name:'Sathya', des:'CEO'}
        ];
        return contacts;
    };
    
  });
