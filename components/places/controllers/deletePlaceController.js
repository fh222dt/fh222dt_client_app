app.controller('DeletePlaceController', function($scope, $rootScope, PlacesService, $location, $routeParams) {
    if($rootScope.isLoggedIn === true) {

        $scope.delete = function() {
            //gör iordning alla params
            var id = $routeParams.id;
            var token = $rootScope.token;

            PlacesService.deletePlace(id, token)
            .success(function(data) {
                console.log(data);
            //TODO ja den togs bort!
            $location.path('/');
            })
            .error(function(data) {
                console.log(data);
                //blev fel
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