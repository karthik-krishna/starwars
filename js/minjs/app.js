'use strict';

var app = angular.module('app', ['ui.router','ngResource','ngAnimate','LocalStorageModule','ui.bootstrap']);

app.factory('Data', function(){
     return {
        baseURL:"https://swapi.co/api/"
    }
});



app.run(function($rootScope, $timeout, $document,$location,$http,localStorageService,Data,$window) {    
	
	
});

app.config(function facebookConfig($stateProvider, $urlRouterProvider,$locationProvider) {

      

    $urlRouterProvider.otherwise('/');
    

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'html/home.html',
			controller:'homeController',
        }); 

    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: 'html/search.html',
            controller:'searchController',
        }); 
//$locationProvider.html5Mode(true).hashPrefix('!');

});


