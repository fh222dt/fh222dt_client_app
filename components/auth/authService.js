app.factory('AuthService', function($http, BASE_URL){
    var factory = {};

    factory.login = function(email, password) {
      var url = BASE_URL +'knock/auth_token';

      var request = {
          method: "POST",
          url: url,
          headers: {
            "Content-Type" : "application/json"
          },
          data: {
              "auth": {
                  "email": email,
                  "password": password
              }
          }

      };
      return $http(request);

    }

    return factory;

});