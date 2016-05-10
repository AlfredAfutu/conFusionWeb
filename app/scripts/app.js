'use strict';

angular.module('confusionApp', ['ui.router', 'ngResource'])

       .config(function($stateProvider, $urlRouterProvider) {

          $stateProvider
             //route for home page
            .state('app', {
            	url:'/',
            	views: {
            		'header': {
                              templateUrl : 'views/header.html'
            		},
            		'content': {
                              templateUrl : 'views/home.html',
                              controller : 'IndexController'
            		},
            		'footer': {
                              templateUrl : 'views/footer.html'
            		} 

            	}

            })
            //route for aboutus page
            .state('app.aboutus', {
            	url:'aboutus',
            	views: {
            		'content@': {
                              templateUrl : 'views/aboutus.html',
                              controller : 'AboutController'
            		}
            	}

            })

            .state('app.contactus', {
            	url:'contactus',
            	views: {
            		'content@': {
                              templateUrl : 'views/contactus.html',
                              controller : 'ContactController'
            		}
            	}

            })

            .state('app.menu', {
            	url:'menu',
            	views: {
            		'content@': {
                              templateUrl : 'views/menu.html',
                              controller : 'ContactController'
            		}
            	}

            })

            .state('app.dishdetails', {
            	url:'menu/:id',
            	views: {
            		'content@': {
                              templateUrl : 'views/dishdetail.html',
                              controller : 'DishDetailController'
            		}
            	}

            });

            $urlRouterProvider.otherwise('/');
       });
    