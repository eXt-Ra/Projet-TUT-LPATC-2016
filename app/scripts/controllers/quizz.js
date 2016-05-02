'use strict';

/**
 * @ngdoc function
 * @name projtutlpatc2016App.controller:QuizzCtrl
 * @description
 * # QuizzCtrl
 * Controller of the projtutlpatc2016App
 */
angular.module('projtutlpatc2016App')
  .controller('QuizzCtrl', function($scope) {
    $scope.isActive = false;
    $scope.isFalse = false;
    $scope.isFalseB = false;
    $scope.activeButton = function() {
      $scope.isActive = true;
      $scope.msgProf = "Bravo passe à la question suivante"
    }

    $scope.FalseButton = function() {
      $scope.isFalse = true;
      $scope.msgProf = "Dommage, essaye encore !"
    }
    $scope.FalseButtonB = function() {
      $scope.isFalseB = true;
      $scope.msgProf = "Dommage, essaye encore !"
    }

  });
