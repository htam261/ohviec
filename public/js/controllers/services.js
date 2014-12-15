'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', '0.1')
.factory('AuthService', ['$http',function ($http) {

}]).service('DataAccess', ['$http', function ($http) {
	this.getUsers = function (callback) {
		$http.get('/users').success(function (data) {
			return callback(data);
		}).error(function (data) {
			return callback(null);
		});
	}
	this.postUsers = function (uset, callback) {
		$http.post('/users', user).success(function (data) {
			return callback(data);
		}).error(function (data) {
			return callback(null);
		});
	}
}]);