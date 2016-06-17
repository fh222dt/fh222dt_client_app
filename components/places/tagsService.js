app.factory('TagsService', function(ResourcesService) {
    var factory = {};

    factory.getAllTags = function() {
        return ResourcesService.getResource('tags/');
    }

    return factory;
});