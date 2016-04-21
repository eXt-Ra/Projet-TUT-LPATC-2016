'use strict';

/**
 * @ngdoc function
 * @name projtutlpatc2016App.controller:AccueilCtrl
 * @description
 * # AccueilCtrl
 * Controller of the projtutlpatc2016App
 */
angular.module('projtutlpatc2016App')
  .controller('AccueilCtrl', function($scope, $mdDialog, $rootScope, $location, AUTHEVENTS, authService) {
    $scope.showDialogInscri = function(ev) {
      $(".enfants-dialog").fadeIn("slow");
      $mdDialog.show({
        controller: 'DialogCtrl',
        templateUrl: 'views/dialogInscription.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
        fullscreen: false,
        locals: {
          currentUser: $scope.currentUser,
          setUser:   $scope.setCurrentUser,
        }
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
      });
    };
  });
