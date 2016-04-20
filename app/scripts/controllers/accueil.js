'use strict';

/**
 * @ngdoc function
 * @name projtutlpatc2016App.controller:AccueilCtrl
 * @description
 * # AccueilCtrl
 * Controller of the projtutlpatc2016App
 */
angular.module('projtutlpatc2016App')
  .controller('AccueilCtrl', function($scope, $mdDialog) {
    $scope.showDialogInscri = function(ev) {
      $(".enfants-dialog").fadeIn("slow");
      $mdDialog.show({
          controller: 'DialogCtrl',
          templateUrl: 'views/dialogInscription.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: false,
          fullscreen: false
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });

    };
    $scope.showDialogReprend = function(ev) {
      $(".enfants-dialog").fadeIn("slow");
      $mdDialog.show({
          controller: 'DialogCtrl',
          templateUrl: 'views/dialogReprendre.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: false,
          fullscreen: false
        })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });

    };
  });
