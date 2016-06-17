app.controller('AllPlacesController', function($scope, $rootScope, PlacesService, TagsService, Flash) {

    function getAll() {
        PlacesService.getAllPlaces()
            .success(function(data) {
            $scope.places = data.places;
            })
            .error(function(data) {
                Flash.create('warning', data.error);
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
            Flash.create('warning', data.error);
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
                Flash.create('warning', data.error);
            });
        }
    }

    //search
    $scope.byQuery = function () {
        PlacesService.queryPlaces($scope.search)
        .success(function(data) {
            $scope.places = data.places;
            console.log(data);
            if($scope.places.length == 0) {
                Flash.create('info', 'Sökningen gav inget resultat');
            }
        })
        .error(function(data) {
            Flash.create('warning', data.error);
        });
    }

    //TODO hämta alla till en användare

});