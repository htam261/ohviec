angular.module('myApp',[
    'myApp.services'
  , 'restangular'
  , 'ui.router'
  , 'ngCookies'
  , 'myApp.controllers.dang-nhap'
  , 'myApp.controllers.dang-ky'
  , 'myApp.controllers.comment'
  , 'myApp.controllers.dang-viec'
  , 'myApp.controllers.tim-viec'
  //, 'myApp.controllers.menubar'
  //, 'myApp.controllers.danh-sach-viec-lam'
])
.config(['$stateProvider', '$urlRouterProvider',function( $stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  //$urlRouterProvider.otherwise("/TrangChu");
  //
  // Now set up the states
  
  /////////////////////
  // Trang chu here //
  ///////////////////
  $stateProvider
    .state('TrangChu',{
    abstract: true
    , templateUrl:"trang-chu.html"
    , controller: function ($scope, $state) {
      $scope.sigup = true;
      $scope.login = true;
    } 
    //, authenticate: false
    })
  //.state('trangChu.root',{
  //  controller:function ($scope,$state) {
  //    $state.go('trangChu.viecLam.danhSach');
  //  }
  //  , authenticate: false
  //})
  //.state('trangChu.viecLam.danhSach',{
  //  url:"/"
  //  , templateUrl:"/partials/public/danh-sach-viec-lam.html" 
  //  , authenticate: false
  //  , controller:"danh-sach-viec-lam"
  //})
  //;
  .state('TrangChu.header', {
    url: "",
    templateUrl: "partials/home/header.html",
    controller: function ($scope, $state) {
      $scope.signup = true;
    }, 
    url: '',
    views: {

            // So this one is targeting the unnamed view within the parent state's template.
            '': {
             templateUrl: 'partials/home/header.html',
             controller: ['$scope', '$stateParams',
                function (  $scope,   $stateParams) {
                  
                }]
            },
            'bodyContent': {
              templateUrl: 'partials/home/bodyContent.html',
              controller: ['$scope', '$stateParams',
               function (  $scope,   $stateParams) {
                  
                }]
            }
    }
  })

  /////////////////////
  // Thong tin here //
  ///////////////////
  .state('thongtin', {
    url: "",
    templateUrl: "trang-chu.html",
    controller: function ($scope, $state) {
      $scope.signup = true;
      $scope.login = false;
      $state.go('trangChu.thongtin');
    }
  })
  .state('trangChu.thongtin', {
    url: '/about',
    views: {

            // So this one is targeting the unnamed view within the parent state's template.
            '': {
              templateUrl: 'partials/home/thongtin.html',
              controller: ['$scope', '$stateParams',
                function (  $scope,   $stateParams) {
                  
                }]
            }
    }
  })

  /////////////////////
  // Dang nhap here //
  ///////////////////
  .state('dang-nhap', {
      url: '',
      views: {

            // So this one is targeting the unnamed view within the parent state's template.
            '': {
              templateUrl: 'partials/dang-nhap/dang-nhap.html',
              controller: 'dang-nhap'
            }
    }
  })

  ///////////////////
  // Dang ky here //
  /////////////////
  .state('dang-ky', {
      url: '',
      templateUrl: "partials/dang-ky/dang-ky.html",
      controller: "dang-ky"
  })

  /////////////////////
  // Dang viec here //
  ///////////////////
  .state('dangviec', {
    url: "",
    templateUrl: "trang-chu.html",
    controller: function ($scope, $state) {
      $scope.signup = true;
      //$scope.login = false;
      $state.go('.dangviec');
    }
  })
  .state('dangviec.dangviec', {
    url: '',
    views: {

            // So this one is targeting the unnamed view within the parent state's template.
            '': {
              templateUrl: 'partials/dang-viec/dang-viec.html',
              controller: 'dang-viec'
            }
    }
  })

  //////////////////////
  //// COMMENT HERE ///
  ////////////////////
  .state('comment', {
    url: "",
    templateUrl: "trang-chu.html",
    controller: function ($scope, $state) {
      $scope.signup = true;
      //$scope.login = false;
      $state.go('.comment');
    }
  })
  .state('comment.comment', {
    url: '',
    views: {

            // So this one is targeting the unnamed view within the parent state's template.
            '': {
              templateUrl: 'partials/comment/comment.html',
              controller: 'comment'
            }
    }
  })

  //////////////////////
  //// TIMVIEC HERE ///
  ////////////////////
  .state('tim-viec', {
    url: "",
    templateUrl: "trang-chu.html",
    controller: function ($scope, $state) {
      $scope.signup = true;
      //$scope.login = false;
      $state.go('.tim-viec');
    }
  })
  .state('tim-viec.tim-viec', {
    url: '',
    views: {
            '': {
              templateUrl: 'partials/tim-viec/tim-viec.html',
              controller: 'tim-viec'
            }
    }
  })
  ;
}])
.run(function ($rootScope, $state, $cookieStore) {
  $rootScope.currentUser={};
  /*if ($rootScope.currentUser == null) {*/
    $rootScope.signup = true;
    $rootScope.login  = true;
    $rootScope.showUser = false;
  /*} else { 
    $rootScope.signup = false;
    $rootScope.login  = false;
    $rootScope.showUser = true;*/
 // }
})
;

/*.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);*/
