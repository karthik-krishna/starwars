app.controller('homeController', function($scope, $rootScope, $http, $location, $interval, $timeout, $sce, localStorageService ,$log,Data) {
   // alert('course');
    $scope.gotoSearch=function(username,password){
      localStorage.setItem("username", username);
      $location.path('search')
    }
    if(localStorage.getItem("username")!=null || localStorage.getItem("username")!=undefined ){
      $location.path('search')
    }
    
});
