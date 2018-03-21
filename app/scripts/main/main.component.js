 'use strict'
angular.module('main',[]);
angular.module('main')
	.component('mainComponent',{
		template:'Main Component content',
		controller:MainController
	});

	function MainController() {
		var self = this;

		this.awesomeThings = [
			'AngularJS',
			'Karma',
			//'jasmine',
			'bootstrap'
		];
	}
