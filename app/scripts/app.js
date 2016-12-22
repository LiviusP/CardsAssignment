'use strict';

/**
 * @ngdoc overview
 * @name cardsApp
 * @description
 * # cardsApp
 *
 * Main module of the application.
 */
angular
  .module('cardsApp', ['ui.router', 'pascalprecht.translate'])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/cards');
    
    $stateProvider
        .state('cards', {
            abstract: true,
            url: '/cards',
            template: '<ui-view/>'
        })
        .state('cards.list', {
            url: '',
            templateUrl: 'views/list.html',
            controller: 'ListCtrl',
            controllerAs : 'listCtrl'  
        })
        .state('cards.detail', {
            url: '/detail/:id',
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl',
            controllerAs : 'detailCtrl'  
        });
})
.config(function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
})
.config(function ($translateProvider) {

  $translateProvider.useStaticFilesLoader({
    prefix: 'resources/locale/lang-',
    suffix: '.json'
  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');

});