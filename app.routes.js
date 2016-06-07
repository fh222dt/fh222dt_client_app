app.config(//['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            // when('/', {
            //     templateUrl: ''
            // }).
            when('/login', {
                templateUrl: 'components/auth/loginView.html',
                controller: 'LoginController as login',
            }).
            when('/logout', {
                templateUrl: 'components/auth/logoutView.html',
                controller: 'LogoutController as logout',
            }).
            otherwise({
                redirectTo: '/'
            });
            //$locationProvider.html5Mode(true);
        });
    //}]);