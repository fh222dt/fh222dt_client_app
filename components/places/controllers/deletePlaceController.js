app.controller('DeletePlaceController', function($scope, $rootScope, PlacesService, $location, $routeParams, Flash) {
    if($rootScope.isLoggedIn === true) {

        $scope.delete = function() {
            //gör iordning alla params
            var id = $routeParams.id;
            var token = $rootScope.token;

            PlacesService.deletePlace(id, token)
            .success(function(data) {
                Flash.create('success', 'Platsen togs bort!');
                $location.path('/');
            })
            .error(function(data) {
                Flash.create('warning', data.error);
            });
        }

        $scope.noThanks = function() {
            $location.path('/');
        }
    }
    else {
        $location.path('/');
    }

});