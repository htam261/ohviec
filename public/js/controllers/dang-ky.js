angular.module('myApp.controllers.dang-ky',[]).
controller('dang-ky', ['Restangular','$rootScope', '$scope', '$http', '$state', 'DataAccess',
	function(Restangular, $rootScope, $scope, $http, $state) {
			$scope.dangky = function() {
					$http.post('/users', 
						{ 
							password: $scope.matkhau,
    						fullname: "tam huynh",
    						email: $scope.Email,
	    					avatar: "abc.png",
	    					phone: "1111",
	    					companyname: "abc",
	    					role: "user",
	    					authentype: "user"
						}).success(function (data) {
									
					});
					$state.go('TrangChu');
				

			
				//$state.go('TrangChu');
			};
			$scope.huybo = function () {
				$scope.Email = "";
				$scope.matkhau = "";
				$scope.NhapLaiMatKhau = "";
				$state.go('TrangChu');
			};
}]);
