app.directive('planet', function() {
            let directive = {};
            directive.restrict = 'E';
            directive.template = '<div class="col-sm-4" >'+
							      '<div class="planetBorder col-sm-12">'+
							        '<div class="col-sm-6">Name : {{planet.name}}</div>'+
							        '<div class="col-sm-6">Diameter : {{planet.diameter}}</div>'+
							        '<div class="col-sm-6">No of residents : {{planet.residents.length}}</div>'+
							        '<div class="col-sm-12">Rotation period : {{planet.rotation_period}}</div>'+
							        '<div class="col-sm-12">Climate : {{planet.climate}}</div>'+
							        '<div class="col-sm-12">Terrain : {{planet.terrain}}</div>'+
							        '<div class="col-sm-12">Population : {{planet.population}}</div>'+
							      '</div>'+
							    '</div>';
            
            directive.scope = {
               planet : "=name"
            }

            directive.compile = function(element, attributes) {
               //element.css("border", "1px solid #cccccc");
               
               let linkFunction = function($scope, element, attributes) {

               	if(Number($scope.planet.population)){
								element.html('<div class="col-sm-4" >'+
							      '<div class="planetBorder col-sm-12">'+
							        '<div class="col-sm-6">Name : '+$scope.planet.name+'</div>'+
							        '<div class="col-sm-6">Diameter :'+$scope.planet.diameter+'</div>'+
							        '<div class="col-sm-6">No of residents : '+$scope.planet.residents.length+'</div>'+
							        '<div class="col-sm-12">Rotation period : '+$scope.planet.rotation_period+'</div>'+
							        '<div class="col-sm-12">Climate : '+$scope.planet.climate+'</div>'+
							        '<div class="col-sm-12">Terrain : '+$scope.planet.terrain+'</div>'+
							        '<div class="col-sm-12"><strong >Population : '+$scope.planet.population+'</strong></div>'+
							      '</div>'+
							    '</div>');
               	}

               }
               return linkFunction;
            }
            
            return directive;
         });