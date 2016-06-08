app.controller('CreatePlaceController', function($scope, $rootScope, PlacesService, $location) {
    var vm = this;
    if($rootScope.isLoggedIn === true) {

        $scope.create = function() {
            //gör iordning alla params
            var long = 59.474566;
            var lat = 17.751230;
             var place = [];
            var token = $rootScope.token;
            var params = {
                'description': $scope.create.description,
                'tags[]': $scope.create.tags,
                'latitude': lat,
                'longitude': long
            }

            PlacesService.createPlace(place, params, token)
            .success(function(data) {
            //ja ny plats lades till!
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