app.factory('ResourcesService', function($http, BASE_URL, API_KEY){
    var factory = {};

    factory.getResource = function(resource, resourceParams, baseUrl ) {
        var params = Object.assign({ api_key: API_KEY }, resourceParams);
        var url = baseUrl == undefined ? BASE_URL : baseUrl;

        return $http.get(url + resource, {
            params: params
        });
    }

    factory.postResource = function(resource, object, resourceParams, baseUrl, headers) {
        var params = Object.assign({ api_key: API_KEY }, resourceParams);
        var url = baseUrl == undefined ? BASE_URL : baseUrl;

        return $http.post(url + resource, object, {
          headers: headers,
          params: params
        });
    }

    factory.deleteResource = function(resource, headers, baseUrl, resourceParams) {
        var params = Object.assign({ api_key: API_KEY }, resourceParams);
        var url = baseUrl == undefined ? BASE_URL : baseUrl;

        return $http.delete(url + resource, {
            headers: headers,
            params: params
        });
    }

    factory.updateResource = function(resource, headers, object, baseUrl, resourceParams) {
        var params = Object.assign({ api_key: API_KEY }, resourceParams);
        var url = baseUrl == undefined ? BASE_URL : baseUrl;


        return $http.put(url + resource, object, {
          headers: headers,
          params: params
        });
    }

    return factory;
});