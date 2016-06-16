app.controller('LoginController', function(AuthService, $location, Flash, $rootScope) {

    var vm = this;

    //rootscope for every controller to know if you are logged in or not
    $rootScope.isLoggedIn = false;

    vm.login = function () {
        var promise = AuthService.login(vm.email, vm.password);
        //on success we logg in and store the token we get back
        promise.then(function(data, status, headers, config) {

            $rootScope.token = data.jwt;
            $rootScope.isLoggedIn = true;
            $location.path('/');
        });

        promise.catch(function(data, status, headers, config) {
            Flash.create('warning', data.error);

            $rootScope.token = 'Det blev ett fel när du loggade in: ' +data.error;
            $rootScope.isLoggedIn = false;
        });
    }
});