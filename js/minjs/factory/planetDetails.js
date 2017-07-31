app.factory('planet_details',function($http,$rootScope,Data,localStorageService)
{
	
	var factory;
	 return {
    getPlanet_Details: function(paginate) {
							return 	 $http({
					                    method: 'GET',
					                    url: Data.baseURL+'planets/?page='+paginate+'&format=json',
					                   }).success(function (response) {
							 			var planet_details_resp= response;
										factory= planet_details_resp;
										return factory;

								}).error(function(xhr){
									console.log(xhr)
								});

								
    	}  
	 }
 
	
});