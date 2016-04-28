'use strict';

/**
 * @ngdoc function
 * @name projtutlpatc2016App.controller:ApplicationcontrollerCtrl
 * @description
 * # ApplicationcontrollerCtrl
 * Controller of the projtutlpatc2016App
 */
angular.module('projtutlpatc2016App')
  .controller('ApplicationcontrollerCtrl', function($scope, USERROLES, authService, $location,websocket) {
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

    websocket.forward('newconS', $scope);
     console.log("An other person is connected");
     $scope.$on('websocket:newconS', function () {
       console.log("An other person is connected");
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
  });
