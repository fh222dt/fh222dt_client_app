app.controller('MapController', function($scope, $rootScope, NgMap) {
    var vm = this;
  NgMap.getMap().then(function(map) {
    //console.log('map', map);
    vm.map = map;
  });

  // vm.clicked = function() {
  //   alert('Clicked a link inside infoWindow');
  // };

  // vm.shops = [
  //   {id:'foo', name: 'FOO SHOP', position:[41,-87]},
  //   {id:'bar', name: 'BAR SHOP', position:[42,-86]}
  // ];
  // vm.shop = vm.shops[0];
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