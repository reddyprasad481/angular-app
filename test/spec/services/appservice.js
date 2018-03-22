'use strict';

/*describe('Service: appService', function () {

  // load the service's module
  beforeEach(module('commonServices'));

  // instantiate service
  var appService;
  beforeEach(inject(function (_appService_) {
    appService = _appService_;
  }));

  it('should do something', function () {
    expect(!!appService).toBe(true);
  });

});*/

describe('Service: appService', function () {

    beforeEach(module('commonServices'));

    describe('appService', function () {

        var service, $httpBackend;
        var phones;
       /* beforeEach(inject(function (_appService_) {
        service = _appService_;
        }));*/
        
        beforeEach(inject(function($injector) {
            service = $injector.get('appService');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', 'http://localhost:8080/spring_rest_services/service/customers/getCustomers').respond(['Toyota', 'Honda', 'Tesla']);
            
           
            
           $httpBackend.whenPOST('http://localhost:8080/spring_rest_services/service/customers/phones').respond(function(method, url, data, headers){
                console.log('Received these data:', method, url, data, headers);
                    phones.push(angular.fromJson(data));
                return [200, {}, {}];
            });
            
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

         
        it('should do something', function () {
            expect(!!service).toBe(true);
        });
        
        it('getCustomers - should return 3 car manufacturers', function () {
             var opts ={method:'GET', 
                    endpoint: 'customers/getCustomers', 
                    data: {}
                   };
            service.make(opts).then(function(response) {
                console.log(response);
                expect(response.data.length).toEqual(3); //the response is null
                //expect(response.data.length).toEqual(3);
            });
            $httpBackend.flush();
        });
        
         it('savePhones - should save 4 phone numbers of manufacturers', function () {
              var inputData =[1234567890, 9989367612, 9583095830,7089654312];
              phones =[];
             var opts ={method:'POST', 
                    endpoint: 'customers/phones', 
                    data: inputData
                   };
            service.make(opts).then(function(response) {
                console.log(response);
                console.log(phones);
                expect(phones[0].length).toEqual(4); //the response is null
                //expect(response.data.length).toEqual(3);
                  expect(phones[0]).toEqual(inputData);
            });
            $httpBackend.flush();
        });
       
    });
    
    });