app.controller('AllPlacesController', function($rootScope, PlacesService) {
    var vm = this;
    PlacesService.getAllPlaces()
        .success(function(data) {
        console.log(data);
        vm.allPlaces = data.places;
        })
        .error(function(data) {
            console.log(data);
        });
});