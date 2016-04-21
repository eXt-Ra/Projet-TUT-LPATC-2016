'use strict';

/**
 * @ngdoc service
 * @name projtutlpatc2016App.USERROLES
 * @description
 * # USERROLES
 * Constant in the projtutlpatc2016App.
 */
angular.module('projtutlpatc2016App')
  .constant('USERROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
  });
