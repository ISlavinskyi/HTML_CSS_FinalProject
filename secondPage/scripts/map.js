function init() {
    var mapDiv = document.getElementById("mymap");
    var mapOptions = {
        center: new google.maps.LatLng(50.27, 30.31),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapDiv, mapOptions);  
    
}
window.onload = init;