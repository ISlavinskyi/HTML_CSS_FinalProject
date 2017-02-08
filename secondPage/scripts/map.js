function init() {
    var mapDiv = document.getElementById("mymap");
    var myLatLng = {lat: 50.4685586, lng: 30.5167358};
    var mapOptions = {
        center: new google.maps.LatLng(myLatLng),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapDiv, mapOptions);
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Some text'
  });  
    
}
window.onload = init;