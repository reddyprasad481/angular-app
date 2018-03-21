'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('main'));

  var $componentController;

  // Initialize the controller and a mock scope
  /*beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCont = $controller('MainController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));*/
    
     beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCont.awesomeThings.length).toBe(6);
  });*/
    
      it('should attach a list of awesomeThings to the scope', function() {
    //var onDeleteSpy = jasmine.createSpy('onDelete');
   // var bindings = {hero: {}, onDelete: onDeleteSpy};
    var ctrl = $componentController('mainComponent', null);

    //ctrl.delete();
    //expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
          expect(ctrl.awesomeThings.length).toBe(3);
  });
});
