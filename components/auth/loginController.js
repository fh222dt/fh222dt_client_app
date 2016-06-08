app.controller('LoginController', function($http, $rootScope, BASE_URL, $location, Flash) {

    var vm = this;

    //rootscope for every controller to know if you are logged in or not
    $rootScope.isLoggedIn = false;

    vm.login = function () {
        //input from user in the login form
        //var data = {'email': vm.email, 'password': vm.password};
        //console.log(data);

        var url = BASE_URL +'knock/auth_token';
        var config = {
            "auth": {"email": vm.email, "password": vm.password},           //TODO sanera
            //"auth": { data },
            headers: {
                "Content-Type" : "application/json"
            }
        }


        var promise = $http.post(url, config);
        //on success we logg in and store the token we get back
        promise.success(function(data, status, headers, config) {

            $rootScope.token = data.jwt;
            $rootScope.isLoggedIn = true;
            $location.path('/');
        });

        promise.error(function(data, status, headers, config) {
            Flash.create('warning', data.error);

            $rootScope.token = 'Det blev ett fel när du loggade in: ' +data.error;
            $rootScope.isLoggedIn = false;
        });

    }
});