app.controller('AllPlacesController', function($scope, $rootScope, PlacesService, TagsService) {
    PlacesService.getAllPlaces()
        .success(function(data) {
        $scope.allPlaces = data.places;
        })
        .error(function(data) {
            console.log(data);
        });

    TagsService.getAllTags()
        .success(function(data) {
        $scope.allTags = data.tags;
        })
        .error(function(data) {
            console.log(data);
        });
});