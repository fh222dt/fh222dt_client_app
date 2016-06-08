app.controller('UpdatePlaceController', function($scope, $rootScope, PlacesService, $location) {
    var vm = this;

    if($rootScope.isLoggedIn === true) {

        $scope.update = function() {
            //gör iordning alla params
            var long = 59.474566;
            var lat = 17.751230;
            var id = 3;
            var token = $rootScope.token;
            var params = {
                'description': $scope.update.description,
                'tags[]': $scope.update.tags,
                'latitude': lat,
                'longitude': long
            }

            PlacesService.updatePlace(params, token, id)
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

