app.controller('CreatePlaceController', function($scope, $rootScope, PlacesService, $location, Flash) {
    var vm = this;
    if($rootScope.isLoggedIn === true) {

        $scope.create = function() {
            //gör iordning alla params
            var long = $rootScope.position.long;
            var lat = $rootScope.position.lat;
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
            Flash.create('success', 'Platsen lades till!');
            $location.path('/');
            })
            .error(function(data) {
                Flash.create('warning', data.error);
            });
        }
    }
    else {
        $location.path('/');
    }

});