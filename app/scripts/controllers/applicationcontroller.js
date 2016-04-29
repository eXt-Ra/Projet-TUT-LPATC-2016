'use strict';

/**
 * @ngdoc function
 * @name projtutlpatc2016App.controller:ApplicationcontrollerCtrl
 * @description
 * # ApplicationcontrollerCtrl
 * Controller of the projtutlpatc2016App
 */
angular.module('projtutlpatc2016App')
  .controller('ApplicationcontrollerCtrl', function($scope,$mdToast, USERROLES, authService, $location, websocket) {
    $scope.currentUser = {};
    $scope.userRoles = USERROLES;
    $scope.isAuthorized = authService.isAuthorized;
    $scope.currentUser.name = "Admin";

    //class
    $scope.navbarClass;
    $scope.setCurrentUser = function(user) {
      $scope.currentUser.name = user;
      websocket.emit('newcon', user);
    };

    websocket.on('newconS', function(user) {
      console.log(user);
      $scope.showSimpleToast(user);
    });


    $scope.$on('$locationChangeSuccess', function(event) {
      switch ($location.path()) {
        case "/":
          $scope.navbarClass = "disabled-nav";
          break;
        case "/tempsmoderne":
          $scope.mainTitle = "Les temps modernes";
          break;
        case "/ruedesinventeurs":
          $scope.mainTitle = "La rue des inventeurs";
          break;
        default:
          $scope.navbarClass = "";
          $scope.mainTitle = "La frise du temps";
      }
    });

    $scope.showSimpleToast = function(user) {
      $mdToast.show(
        $mdToast.simple()
        .textContent(user+' connecté')
        .position("top right")
        .hideDelay(2000)
      );
    };
  });
