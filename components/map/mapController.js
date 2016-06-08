app.controller('MapController', function(NgMap) {
    var vm = this;

    NgMap.getMap().then(function(map) {
        vm.map = map;
    });

    vm.showDetail = function (e, place) {
          vm.place = place;
          //vm.map.showInfoWindow('foo-iw', p.locationId);
          vm.map.showInfoWindow('foo-iw', this);
        };

        vm.hideDetail = function () {
           vm.map.hideInfoWindow('foo-iw');
        };



  // vm.showDetail = function(event, place) {
  //     var infoWindow = new google.maps.infoWindow();
  //     var center = new google.maps.LatLng(place.latitude, place.longitude);
  //
  //     infoWindow.setContent(
  //         '<h3>Hej</h3>');
  //
  //   infoWindow.setPosition(center);
  //   infoWindow.open(vm.objMapa);
  //
  //
  //   //   vm.place = place;
  //   //   vm.map.showInfoWindow('foo-iw', this);
  // };
});