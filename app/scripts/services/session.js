'use strict';

/**
 * @ngdoc service
 * @name projtutlpatc2016App.Session
 * @description
 * # Session
 * Service in the projtutlpatc2016App.
 */
angular.module('projtutlpatc2016App')
  .service('Session', function() {
    this.create = function(sessionId, userId, userRole) {
      this.id = sessionId;
      this.userId = userId;
      this.userRole = userRole;
    };
    this.destroy = function() {
      this.id = null;
      this.userId = null;
      this.userRole = null;
    };
  });
