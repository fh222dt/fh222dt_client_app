app.controller('AllPlacesController', function($scope, $rootScope, PlacesService, TagsService) {

    function getAll() {
        PlacesService.getAllPlaces()
            .success(function(data) {
            $scope.places = data.places;
            })
            .error(function(data) {
                console.log(data);
            });
    }

    //get all places
    getAll();

    //get all tags
    TagsService.getAllTags()
        .success(function(data) {
        $scope.allTags = data.tags;
        })
        .error(function(data) {
            console.log(data);
        });

    //get places by tag
    $scope.byTag = function (id) {
        if(id === 'all') {
            getAll();
        }
        else {
            PlacesService.getPlacesByTag(id)
            .success(function(data) {
                console.log(data);
            $scope.places = data.places;
            })
            .error(function(data) {
                console.log(data);
            });
        }
    }

});