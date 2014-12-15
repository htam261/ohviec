angular.module('myApp.controllers.dang-nhap',[]).
controller('dang-nhap', ['Restangular','$rootScope', '$scope', '$http', '$state', 'DataAccess','$cookieStore',
		function(Restangular, $rootScope, $scope, $http, $state, $cookieStore) {
			$scope.dangnhap = function() {
				$http.get('/users').success(function (data) {
					//alert($scope.signup + $scope.login);
					angular.forEach(data, function(user) {
						if (user.email == $scope.email) {
							if (user.password == $scope.password) 
							{
								console.log(user);
								angular.copy(user, $rootScope.currentUser);
								//alert($scope.username.email);
								$scope.signup = false;
								$rootScope.signup = false;
								$rootScope.login = true;
								$rootScope.showUser = true;
								//$scope.login = true;
								//console.log(user.fullname);
								console.log($rootScope.currentUser.fullname);
								 //$cookieStore.put('currentUser',user.email);
								$state.go('TrangChu.header');
							} else {
								$scope.result = "error";
							}
						} else {
							//alert('Khong tim thay email');

							//break;
						}
					});
				});
				
			};
				
			$scope.huybo = function () {
				$state.go('TrangChu');
			};
}]);
