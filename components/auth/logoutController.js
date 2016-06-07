app.controller('LogoutController', function($rootScope, $location) {

    var vm = this;

    //rootscope for every controller to know if you are logged in or not
    $rootScope.isLoggedIn = false;
    $rootScope.token = {};

    $location.path('/');

});