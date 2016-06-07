app.controller('AllPlacesController', function($scope, $rootScope, PlacesService) {
    PlacesService.getAllPlaces()
        .success(function(data) {
        $scope.allPlaces = data.places;
        })
        .error(function(data) {
            console.log(data);
        });
});