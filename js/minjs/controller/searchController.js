app.controller('searchController', function($scope, $rootScope, $http, $location, $interval, $timeout,planet_details, $sce , $stateParams,$compile, localStorageService,Data) {
   
	 let username=localStorage.getItem("username");
	 if(username==null || username==undefined){
	 	$location.path('home')
	 }
// Any function returning a promise object can be used to load values asynchronously
	$scope.getLocation = function(val) {
		if(val!=undefined){
			return $http.get(Data.baseURL+'planets/?search='+val, {
			     }).then(function(response){
			      $scope.firstsetplanets=response.data.results
			      return response.data.results.map(function(item){
			      	return item.name;
			      });
			    });
		}
  };

  $scope.loadplanets=function(paginate){
  	$scope.planetDetails=planet_details.getPlanet_Details(paginate).success(function(response)
                {
                  	console.log(response);
                    $scope.firstsetplanets=response.results;
                    $scope.totalItems = response.count;
                  
                }).error(function(xhr){
                  console.log(xhr)
                });
    }
  $scope.loadplanets('1')

   
  $scope.currentPage = 1;
  $scope.pageChanged = function() {
    $scope.loadplanets($scope.currentPage)
  };

  $scope.logout=function(){
  	localStorage.clear();
    $location.path('home');
  }
   
});
