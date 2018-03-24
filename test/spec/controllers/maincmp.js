'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('main'));

  var $componentController,$sessionStorage,$httpBackend;
    var appService;

  // Initialize the controller and a mock scope
  /*beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCont = $controller('MainController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));*/
   beforeEach(module('commonServices'));

  // instantiate service
  var appService;
  beforeEach(inject(function (_appService_,_$sessionStorage_) {
    appService = _appService_;
	$sessionStorage = _$sessionStorage_;
  }));

    
     beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;

  }));

   beforeEach(inject(function($injector) {
          //  service = $injector.get('appService');
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
  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCont.awesomeThings.length).toBe(6);
  });*/
    
      it('should attach a list of awesomeThings to the scope', function() {
    //var onDeleteSpy = jasmine.createSpy('onDelete');
   // var bindings = {hero: {}, onDelete: onDeleteSpy};
   	$sessionStorage.Uname ="Prasad";
    var ctrl = $componentController('mainComponent', {appService:appService,$sessionStorage:$sessionStorage},null);

    //ctrl.delete();
    //expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});

          expect(ctrl.awesomeThings.length).toBe(6);
          
          expect(ctrl.sum(5,6)).toBe(11); 
          
  });
    
    it('should calculate sum of two digits', function() {
    //var onDeleteSpy = jasmine.createSpy('onDelete');
   // var bindings = {hero: {}, onDelete: onDeleteSpy};
    var ctrl = $componentController('mainComponent', null,appService);

    //ctrl.delete();
    //expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
         // expect(ctrl.awesomeThings.length).toBe(6);
          
          expect(ctrl.sum(5,8)).toBe(13); 
          
  });
  
      it('test session storage data', function() {
    //var onDeleteSpy = jasmine.createSpy('onDelete');
   // var bindings = {hero: {}, onDelete: onDeleteSpy};
   	$sessionStorage.Uname ="Reddy Prasad";
    var ctrl = $componentController('mainComponent', {appService:appService,$sessionStorage:$sessionStorage},null);

    //ctrl.delete();
    //expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
         // expect(ctrl.awesomeThings.length).toBe(6);
          
          expect(ctrl.userName).toBe("Reddy Prasad"); 
          
  });
  
      it('getCustomers - should return 3 car manufacturers', function () {
          
		  $sessionStorage.Uname ="Reddy"
		   var ctrl = $componentController('mainComponent', {appService:appService,$sessionStorage:$sessionStorage},null);
		    expect(ctrl.userName).toBe("Reddy"); 
		   expect(ctrl.customers).toEqual(null); 
		   ctrl.getCustomers();
            $httpBackend.flush();
			expect(ctrl.customers.length).toEqual(3); 
			expect(ctrl.customers).toEqual(['Toyota', 'Honda', 'Tesla']); 
        });
		
});
