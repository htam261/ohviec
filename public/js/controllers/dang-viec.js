angular.module('myApp.controllers.dang-viec',[]).
controller('dang-viec', ['Restangular','$rootScope', '$scope', '$http', '$state', 'DataAccess',
	function(Restangular, $rootScope, $scope, $http, $state) {


			$scope.dangviec = function() {
					$http.post('/jobs', 
						{ 
							IDJob: "Job10",
    						title: $scope.title,
    						jobDescription: $scope.jobDescription,
    						timeDescription: $scope.timeDescription,
   							address: $scope.address,
    						salary: $scope.salary,
    						expiryTime: new Date($scope.expiryTime),
    						viewkey:  0,
    						province: $scope.province,
    						profession: $scope.profession
						}).success(function (data) {
									
					});
					$state.go('TrangChu');
			};
			$scope.huybo = function () {
				$scope.Email = "";
				$scope.matkhau = "";
				$scope.NhapLaiMatKhau = "";
				$state.go('TrangChu');
			};
}]);
