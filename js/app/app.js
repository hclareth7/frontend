var aplication = angular.module("miapp", [
	'ui.router',
	'AppControllers',
	'AppServices',

]);

aplication.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        
        $stateProvider.state('main', {
			url: '/app',
			templateUrl: 'js/app/views/main.html',
			controller: 'mainController' 
			
		})
		.state('login', {
			url: '/login',
			cache: false,
			templateUrl: 'js/app/views/login.html',
			authenticate: false
        })
        
        $urlRouterProvider.otherwise('/login');

    }]);