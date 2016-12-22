'use strict';

/**
 * @ngdoc directive
 * @name cardsApp.directive:customCard
 * @description
 * # customCard
 */
angular.module('cardsApp')
  .directive('customCard', function () {
    return {
      templateUrl: 'templates/card.html',
      restrict: 'E',
      transclude: true,
      scope: {
      	cardInfo: '=info',
      	delete: '&onDelete' 
      }
    };
  });
