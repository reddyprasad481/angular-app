 'use strict'
angular.module('main',[]);
angular.module('main')
	.component('mainComponent',{
		template:'<div>Main Component content </div> <div>{{$ctrl.pdfData}}</div>',
		controller:MainController
	});

	function MainController(appService) {
		var self = this;

		this.awesomeThings = [
			'AngularJS',
			'Karma',
			'jasmine',
            'HTML5',
            'CSS3',
			'bootstrap'
		];
        
        
        this.sum = function(input1,input2){
            
            var result = input1+input2;
            console.log("===========result: "+result+" =========");
            return result;
            
        };
        
           appService.make({endpoint:'customers/getCustomers',method:'GET', data:{}})
			.then(function(response){
				console.log(response);
             self.pdfData =  response; 
            console.log(self.pdfData);
          //  var pdfUrl = URL.createObjectURL(response);
          //  var printwWindow = $window.open(pdfUrl);
           // printwWindow.print();
            
			},function(error){
				console.log(error);
			});
	}
MainController.$inject = ['appService'];