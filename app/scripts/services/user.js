'use strict';

/**
 * @ngdoc service
 * @name projtutlpatc2016App.userService
 * @description
 * # userService
 * Factory in the projtutlpatc2016App.
 */
angular.module('projtutlpatc2016App')
  .factory('userService', function($http) {

    var urlapi = "http://51.254.101.196/projtut/api/api.php/";
    var userService = {};

    userService.GetAll = GetAll;
    userService.GetById = GetById;
    userService.GetByUsername = GetByUsername;
    userService.Create = Create;
    userService.Update = Update;
    userService.Delete = Delete;

    return userService;

    function GetAll() {
      return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
    }

    function GetById(id) {
      return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
    }

    function GetByUsername(username) {
      return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
    }

    function Create(user) {
      return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
    }

    function Update(user) {
      return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
    }

    function Delete(id) {
      return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
    }

    // private functions

    function handleSuccess(res) {
      return res.data;
    }

    function handleError(error) {
      return function() {
        return {
          success: false,
          message: error
        };
      };
    }

    // Public API here
    return $resource('/user');
  });
