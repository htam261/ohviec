angular.module('myApp.controllers.comment',[]).
controller('comment', ['Restangular','$rootScope', '$scope', '$http', '$state', 'DataAccess',
	function(Restangular, $rootScope, $scope, $http, $state) {
			$scope.addComment = function() {
				$http.post('/comments', 
					{ 
						IDComment: "CM03",
						IDJob: "abc",
						email: "abc@mail.com",
						fullname: "abc",
    					contain: $scope.contain
					}).success(function (data) {
									
				});
				$state.go('TrangChu');
			};
			$scope.huybo = function () {
				$state.go('TrangChu');
			};
}]);