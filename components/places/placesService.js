app.factory('PlacesService', function(ResourcesService) {
    var factory = {};

    factory.getAllPlaces = function () {
        return ResourcesService.getResource('places');
    };

    factory.getPlacesNearby = function (lat, long) {
        return ResourcesService.getResource('places/', {lat: lat, long: long}); //undrar om detta blir get params???
    };

    factory.getPlacesByTag = function (tag) {
        return ResourcesService.getResource('tags/' +tag.id);
    };

    factory.updatePlace = function (place, token, id) {
        return ResourcesService.updateResource('places/', + id, {'Authorization' : token}, place);
    };

    factory.createPlace = function (place, token) {
        return ResourcesService.postResource('places/', place, {}, undefined, {'Authorization' : token});   //kolla alla params!
    };

    factory.deletePlace = function (id, token) {
        return ResourcesService.deleteResource('places/' + id, {'Authorization' : token});
    };

    return factory;

});