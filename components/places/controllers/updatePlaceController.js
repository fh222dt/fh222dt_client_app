app.controller('UpdatePlaceController', function($scope, $rootScope, PlacesService, $location, $routeParams) {
    var vm = this;

    if($rootScope.isLoggedIn === true) {

        $scope.update = function() {
            //gör iordning alla params
             var long = $rootScope.position.long;
             var lat = $rootScope.position.lat;
            var id = $routeParams.id;
            var token = $rootScope.token;
            var params = {
                'description': $scope.update.description,
                'tags[]': $scope.update.tags,
                 'latitude': lat,
                 'longitude': long
            }

            PlacesService.updatePlace(params, token, id)
            .success(function(data) {
            //TODO ja ny plats lades till!
            $location.path('/');
            })
            .error(function(data) {
                console.log(data);
                //blev fel
            });
        }
    }
    else {
        $location.path('/');
    }

});

