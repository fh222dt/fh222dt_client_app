app.controller('LogoutController', function($rootScope, $location, Flash) {

    var vm = this;

    //rootscope for every controller to know if you are logged in or not
    $rootScope.isLoggedIn = false;
    $rootScope.token = {};

    $location.path('/');
    Flash.create('info', 'Du har loggats ut');

});