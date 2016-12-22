'use strict';

/**
 * @ngdoc function
 * @name cardsApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('DetailCtrl', function ($stateParams, $state, CardsFactory) {

  	this.cardInfo = {};
  	var self = this;

    CardsFactory.getCardWithId($stateParams.id).then(function(data){

    		self.cardInfo = data;
    	}, function (){
    		$state.go('cards.list');
   	});


    this.delete = function(card) {
    	CardsFactory.deleteCardWithId(card.id).then(function(){
    		$state.go('cards.list');
    	});
    };

  });
