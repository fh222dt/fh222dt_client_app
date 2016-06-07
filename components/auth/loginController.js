app.controller('LoginController', function($http, $rootScope) {

    var vm = this;

    //rootscope for every controller to know if you are logged in or not
    $rootScope.isLoggedIn = false;

    vm.login = function () {
        //input from user in the login form
        //var data = {'email': vm.email, 'password': vm.password};
        //console.log(data);

        var url = 'https://mapap-fh222dt.c9users.io/knock/auth_token';      //TODO move to config
        var config = {
            "auth": {"email": vm.email, "password": vm.password},
            //"auth": { data },
            headers: {
                "Content-Type" : "application/json"
            }
        }


        var promise = $http.post(url, config);
        //on success we logg in and store the token we get back
        promise.success(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(config);

            $rootScope.token = data.jwt;
            $rootScope.isLoggedIn = true;
        });

        promise.error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(config);

            $rootScope.token = 'Det blev ett fel när du loggade in: ' +data.error;
            $rootScope.isLoggedIn = false;
        });

    }
});