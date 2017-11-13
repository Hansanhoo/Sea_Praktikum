(function () {
    'use strict';

    angular
        .module('app')
        .controller('myCtrl', myCtrl);

    //AvengersCtrl.$inject = ['dataservice'];

    function myCtrl() {
        /* jshint validthis: true */
        var vm = this;
        vm.callMe = function() {
           console.log("working");

        }	  
    }
})();