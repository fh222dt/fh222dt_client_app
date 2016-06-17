app.controller('UpdatePlaceController', function($scope, $rootScope, PlacesService, $location, $routeParams, Flash) {
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
                Flash.create('success', 'Platsen uppdaterades!');
                $location.path('/');
                $scope.$emit('reloadPlaces');
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

