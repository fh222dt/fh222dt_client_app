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
            $scope.places = data.places;
            })
            .error(function(data) {
                console.log(data);
            });
        }
    }

    //search
    $scope.byQuery = function () {
        PlacesService.queryPlaces($scope.search)
        .success(function(data) {
        $scope.places = data.places;    //TODO lägg t felmeddelande om det inte blir nåt resultat
        })
        .error(function(data) {
            console.log(data);
        });
    }

    //TODO hämta alla till en användare

});