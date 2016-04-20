'use strict';

/**
 * @ngdoc function
 * @name projtutlpatc2016App.controller:DialogCtrl
 * @description
 * # DialogCtrl
 * Controller of the projtutlpatc2016App
 */
angular.module('projtutlpatc2016App')
  .controller('DialogCtrl', function ($scope, $mdDialog) {
    $scope.close = function () {
      $mdDialog.hide();
      $(".enfants-dialog").fadeOut("fast");
    }
  });
