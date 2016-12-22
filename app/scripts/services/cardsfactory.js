'use strict';

/**
 * @ngdoc service
 * @name cardsApp.CardsFactory
 * @description
 * # CardsFactory
 * Factory in the cardsApp.
 */
angular.module('cardsApp')
  .factory('CardsFactory', function ($http, $q) {
    
    var cards = [];

    var getCards = function(){

        var deferred = $q.defer();


        //this piece of code is here because the lack of persistency
        if (cards.length > 0) {
          deferred.resolve(cards);
        } else {
          $http.get('http://localhost:9000/resources/cards.json').then(function(response){
            cards = response.data;
            deferred.resolve(response.data);
          }, function(){
            deferred.reject();
          });
        }

        return deferred.promise;
    };

    var getCardWithId = function(id) {

        var deferred = $q.defer();

        if (id && id !== null) {
          $http.get('http://localhost:9000/resources/cards.json').then(function(response){
            
            for (var i = 0 ; i < response.data.length ; i++) {
              if (response.data[i].id === id) {
                  deferred.resolve(response.data[i]);
                  break;
              } 
            }
            deferred.reject();
          });
        } else {
          deferred.reject();
        }
        
        return deferred.promise;
    };

    var deleteCardWithId = function(id) {


        var deferred = $q.defer();

        var index = -1;

        for (var i = 0; i < cards.length; i++) {
          if (cards[i].id === id) {
            index = i;
            break;
          }
        }

        cards.splice(index, 1);

        deferred.resolve(cards);

        return deferred.promise;
    };

    return {
      getCards: getCards,
      getCardWithId: getCardWithId,
      deleteCardWithId: deleteCardWithId
    };
  });
