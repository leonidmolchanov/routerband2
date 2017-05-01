/*!
 * angular-ssh v0.1
 * Project: https://github.com/R3nPi2/angular-ssh
 * Author: R3n Pi2 <r3npi2@gmail.com>
 * See LICENSE in this repository for license information
 *
 * A Angular module for cordova-plugin-ssh
 * cordova-plugin-ssh project: https://github.com/R3nPi2/cordova-plugin-ssh
 *
 */
angular.module('angular-ssh', [])
.factory('$ssh', ['$q', '$window', function ($q, $window) {

  var cordovaSshClientIsPresent = function() {
    if ($window && ($window.sshClient !== undefined)) {
      return true;
    } else {
      return false;
    }
  }

  return {

    openSession: function (hostname,username,password,cols,rows,width,height) {
      var q = $q.defer();
      if (!cordovaSshClientIsPresent()) {
        q.reject('cordova-plugin-sshclient not present');
      } else {
        $window.sshClient.sshOpenSession(function(response){
          q.resolve(response);
        },function(error){
          q.reject(error);
        },hostname,username,password,cols,rows);
      }
      return q.promise;
    },

    read: function() {
      var q = $q.defer();
      if (!cordovaSshClientIsPresent()) {
        q.reject('cordova-plugin-sshclient not present');
      } else {
        $window.sshClient.sshRead(function(response){
          q.resolve(response);
        },function(error){
          q.reject(error);
        });
      }
      return q.promise;
    },

    write: function(line){
      var q = $q.defer();
      if (!cordovaSshClientIsPresent()) {
        q.reject('cordova-plugin-sshclient not present');
      } else {
        $window.sshClient.sshWrite(function(response){
          q.resolve(response);
        },function(error){
          q.reject(error);
        },line);
      }
      return q.promise;
    },

    closeSession: function() {
      var q = $q.defer();
      if (!cordovaSshClientIsPresent()) {
        q.reject('cordova-plugin-sshclient not present');
      } else {
        $window.sshClient.sshCloseSession(function(response){
          q.resolve(response);
        },function(error){
          q.reject(error);
        });
      }
      return q.promise;
    },

    verifyHost: function(hostname,addhost){
      var q = $q.defer();
      if (!cordovaSshClientIsPresent()) {
        q.reject('cordova-plugin-sshclient not present');
      } else {
        $window.sshClient.sshVerifyHost(function(response){
          q.resolve(response);
        },function(error){
          q.reject(error);
        },hostname,addhost);
      }
      return q.promise;
    },

    resizeWindow: function(cols,rows,width,height){
      var width = width || 0;
      var height = height || 0;
      var q = $q.defer();
      if (!cordovaSshClientIsPresent()) {
        q.reject('cordova-plugin-sshclient not present');
      } else {
        $window.sshClient.sshResizeWindow(function(response){
          q.resolve(response);
        },function(error){
          q.reject(error);
        },cols,rows,width,height);
      }
      return q.promise;
    },

  };

}]);
