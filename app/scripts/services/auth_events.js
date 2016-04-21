'use strict';

/**
 * @ngdoc service
 * @name projtutlpatc2016App.AUTHEVENTS
 * @description
 * # AUTHEVENTS
 * Constant in the projtutlpatc2016App.
 */
angular.module('projtutlpatc2016App')
  .constant('AUTHEVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  });
