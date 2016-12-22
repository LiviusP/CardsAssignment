'use strict';

/**
 * @ngdoc function
 * @name cardsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('MainCtrl', function ($translate) {

  	console.log('MAIN');

    this.changeLanguage = function(key){
    	console.log(key);
    	$translate.use(key);
    };
  });
