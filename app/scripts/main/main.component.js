 'use strict'
angular.module('main',['ngStorage']);
angular.module('main')
	.component('mainComponent',{
		template:'<div>Hi {{$ctrl.userName}} </div> <div>{{$ctrl.pdfData}}</div>',
		controller:MainController
	});

	function MainController(appService,$sessionStorage) {
		var self = this;

		this.awesomeThings = [
			'AngularJS',
			'Karma',
			'jasmine',
            'HTML5',
            'CSS3',
			'bootstrap'
		];
        
        console.log($sessionStorage);
        this.userName = $sessionStorage.Uname ;
		self.customers = null;
        this.sum = function(input1,input2){
            
            var result = input1+input2;
            console.log("===========result: "+result+" =========");
              console.log($sessionStorage);
            console.log("===========result: "+this.userName+" =========");
            return result;
            
        };
        
		this.getCustomers = function(){
			
			 appService.make({endpoint:'customers/getCustomers',method:'GET', data:{}})
			.then(function(response){
				console.log("=========response From Service======");
				console.log(response);
				self.customers = response.data;
             //self.pdfData =  response; 
            //console.log(self.pdfData);
          //  var pdfUrl = URL.createObjectURL(response);
          //  var printwWindow = $window.open(pdfUrl);
           // printwWindow.print();
            
			},function(error){
				console.log(error);
			});
		};
          
	}
//MainController.$inject = ['appService','$sessionStorage'];
//MainController.$inject = ['$sessionStorage'];