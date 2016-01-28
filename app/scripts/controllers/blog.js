'use strict';

/**
 * @ngdoc function
 * @name corlateApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the corlateApp
 */
angular.module('corlateApp')
  .controller('BlogCtrl', function ($scope) {
  	
    $scope.buscar = function(){
    	/*alert($scope.mivar);*/

    	if ($scope.mivar == undefined || $scope.mivar =='' ){
    		alert('La caja está vacia');
    	}
    	else {
    		alert($scope.mivar);
    	}

    	
    		
 }
  });
