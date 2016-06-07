app.controller('MapController', function($scope, NgMap) {

    NgMap.getMap().then(function(map) {
        $scope.map = map;
  });

  $scope.infoWindow = function(event, place) {

  };
});