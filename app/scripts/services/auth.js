'use strict';

/**
 * @ngdoc service
 * @name projtutlpatc2016App.authService
 * @description
 * # authService
 * Factory in the projtutlpatc2016App.
 */
angular.module('projtutlpatc2016App')
  .factory('authService', function($http, Session) {
    var authService = {};

    authService.login = function(credentials) {
      return $http.post('http://51.254.101.196/projtut/api/api.php/user', credentials)
        .then(function(res) {
          var role = "admin";
          Session.create(res.data, res.data, role);
          console.log(credentials.User_name);
          return credentials.User_name;
        });
    };

    authService.isAuthenticated = function() {
      return !!Session.userId;
    };

    authService.isAuthorized = function(authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
  });
