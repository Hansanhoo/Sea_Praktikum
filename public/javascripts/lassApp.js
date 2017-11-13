  (function () {
        'use strict';

        angular
            .module('app', ['ngRoute'])
            .config(routeConfig);
        
        routeConfig.$inject = ['$routeProvider'];

        function routeConfig($routeProvider) {
            $routeProvider
                .when('/home',{ templateUrl: '/../views/index.html'})                
                .otherwise({ redirectTo: '/' });
        }
    })();