app.controller('MapController', function($scope, $rootScope, NgMap) {
    var vm = this;
  NgMap.getMap().then(function(map) {
    vm.map = map;
  });

  vm.position = function(event) {
      console.log(event);
    var position = {
        lat: event.latLng.lat(),
        long: event.latLng.lng()
    };
    $rootScope.position = position;
    console.log($rootScope.position);
  };

  vm.showDetail = function(e, place) {
    vm.place = place;
    vm.map.showInfoWindow('foo-iw', this);
  };

  vm.hideDetail = function() {
    vm.map.hideInfoWindow('foo-iw');
  };
});