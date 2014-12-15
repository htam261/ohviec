angular.module('myApp.controllers.tim-viec',[]).
controller('tim-viec', ['Restangular','$rootScope', '$scope', '$http', '$state', 'DataAccess',
	function(Restangular, $rootScope, $scope, $http, $state) {
			$scope.loadViec = function() {
				$scope.timviec = [];
				$http.get('/jobs').success(function (data) {
					angular.forEach(data, function (user, index) {
						$scope.timviec.push({index: index,user: user});
					});
				});
				$scope.index = $scope.timviec[0];
				angular.forEach($scope.timviec, function (timviec, index) {
					
					$scope.timviec[index].comments = [];
					$http.get('/commentsJobs/' + $scope.timviec[index].user.IDJob).success(function (data) {
						$scope.timviec[index].comments.push(data);
					});
				});
			};			
}]);
/*
angular.module('myApp.controllers.menubar',[])
.controller('menubar', ['Restangular','$rootScope', '$scope', '$http', '$state', 'DataAccess',
	function(Restangular, $rootScope, $scope, $http, $state) {
			//console.log('load menu');		
}]);
angular.module('myApp.controllers.danh-sach-viec-lam',[])
.controller('danh-sach-viec-lam', ['Restangular','$rootScope', '$scope', '$http', '$state', 'DataAccess',
	function(Restangular, $rootScope, $scope, $http, $state) {
					
}])
;*/