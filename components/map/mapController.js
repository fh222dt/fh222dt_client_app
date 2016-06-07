app.controller('MapController', function(NgMap) {
    var vm= this;

    NgMap.getMap().then(function(map) {
        vm.map = map;
  });

  vm.infoWindow = function(event, place) {

  }
});