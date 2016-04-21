'use strict';

/**
 * @ngdoc function
 * @name projtutlpatc2016App.controller:ApplicationcontrollerCtrl
 * @description
 * # ApplicationcontrollerCtrl
 * Controller of the projtutlpatc2016App
 */
angular.module('projtutlpatc2016App')
  .controller('ApplicationcontrollerCtrl', function($scope, USERROLES, authService) {
    $scope.currentUser = {};
    $scope.userRoles = USERROLES;
    $scope.isAuthorized = authService.isAuthorized;
    $scope.currentUser.name = "Admin";
    $scope.setCurrentUser = function(user) {
      $scope.currentUser.name = user;
    };
  });
