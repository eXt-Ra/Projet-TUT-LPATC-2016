'use strict';

/**
 * @ngdoc function
 * @name projtutlpatc2016App.controller:RuedesinventeursCtrl
 * @description
 * # RuedesinventeursCtrl
 * Controller of the projtutlpatc2016App
 */
angular.module('projtutlpatc2016App')
  .controller('RuedesinventeursCtrl', function ($scope, $location) {
    $scope.openUsine = function () {
      $location.url("/usinevapeur");
    }
    $scope.openImprim = function () {
      $location.url("/imprimerie");
    }
    $scope.openBiblio = function () {
      $location.url("/bibliotheque");
    }
  });
