app.config(//['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'components/places/views/allPlacesView.html',
                // controller: 'AllPlacesController',
            }).
            when('/login', {
                templateUrl: 'components/auth/loginView.html',
                controller: 'LoginController as login',
            }).
            when('/logout', {
                templateUrl: 'components/auth/logoutView.html',
                controller: 'LogoutController',
            }).
            when('/create', {
                templateUrl: 'components/places/views/createView.html',
                controller: 'CreatePlaceController',
            }).
            when('/update/:id', {
                templateUrl: 'components/places/views/updateView.html',
                controller: 'UpdatePlaceController',
            }).
            when('/delete/:id', {
                templateUrl: 'components/places/views/deleteView.html',
                controller: 'DeletePlaceController',
            }).
            otherwise({
                redirectTo: '/'
            });
            //$locationProvider.html5Mode(true);
        });
    //}]);