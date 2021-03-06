'use strict';

/**
 * @ngdoc overview
 * @name projtutlpatc2016App
 * @description
 * # projtutlpatc2016App
 *
 * Main module of the application.
 */
angular
  .module('projtutlpatc2016App', [
    'ngAnimate',
    'ngRoute',
    'ngMaterial',
    'btford.socket-io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/accueil.html',
        controller: 'AccueilCtrl',
      })
      .when('/frise', {
        templateUrl: 'views/frise.html',
        controller: 'FriseCtrl',
      })
      .when('/tempsmoderne', {
        templateUrl: 'views/temps-modernes.html'
      })
      .when('/ruedesinventeurs', {
        templateUrl: 'views/ruedesinventeurs.html',
          controller: 'RuedesinventeursCtrl',
      })
      .when('/usinevapeur', {
        templateUrl: 'views/usinevapeur.html'
      })
      .when('/imprimerie', {
        templateUrl: 'views/imprimerie.html'
      })
      .when('/bibliotheque', {
        templateUrl: 'views/bibliotheque.html'
      })
      .when('/ruedesinventeurs/quizz', {
        templateUrl: 'views/quizz.html',
        controller : 'QuizzCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
