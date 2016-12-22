'use strict';

/**
 * @ngdoc function
 * @name cardsApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('ListCtrl', function (CardsFactory) {
  
    this.cards = [];
    this.error = false;
    var self = this;

    CardsFactory.getCards().then(function(response){
    	self.error = false;
    	self.cards = response;
    }, function(){
    	self.error = true;
    });

    this.delete = function(card) {
        CardsFactory.deleteCardWithId(card.id).then(function(data){
        	self.cards = data;
        });
    };
});
