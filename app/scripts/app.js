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
    'ngMaterial'
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
      .otherwise({
        redirectTo: '/'
      });
  });
