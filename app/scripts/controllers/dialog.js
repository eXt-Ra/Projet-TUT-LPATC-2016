'use strict';

/**
 * @ngdoc function
 * @name projtutlpatc2016App.controller:DialogCtrl
 * @description
 * # DialogCtrl
 * Controller of the projtutlpatc2016App
 */
angular.module('projtutlpatc2016App')
  .controller('DialogCtrl', function($scope, $mdDialog, $rootScope, $location, AUTHEVENTS, authService, currentUser, setUser) {

    $scope.currentUser = currentUser;
    $scope.credentials = {
      User_name: '',
      User_admin: '1'
    };

    $scope.login = function(credentials) {
      console.log(credentials);
      authService.login(credentials).then(function(username) {
        $rootScope.$broadcast(AUTHEVENTS.loginSuccess);
        setUser(username);
        $mdDialog.hide();
        $location.path("/frise");
        $(".nav-wrapper").fadeIn("slow");
      }, function() {
        $rootScope.$broadcast(AUTHEVENTS.loginFailed);
      });
    };
    $scope.close = function() {
      $mdDialog.hide();
      $(".enfants-dialog").fadeOut("fast");
    }
  });
