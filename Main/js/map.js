    var mymap = L.map('mapid').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFiZWJhbXVoYW1tZWQiLCJhIjoiY2thZDc1aHJ1MDF3bTJ0bXR5aWMzdHRrbCJ9.22ML8H5Qyfccincjoe7TcQ'
}).addTo(mymap);
    mymap.locate({setView: true, watch: true});
//var marker = L.marker([51.5, -0.09]).addTo(mymap);
//var popup = L.popup()
//    .setLatLng([51.5, -0.09])
//    .setContent("I am a standalone popup.")
//    .openOn(mymap);


//    var popup = L.popup();
//
//    function onMapClick(e) {
//        popup
//            .setLatLng(e.latlng)
//            .setContent("You clicked the map at " + e.latlng.toString())
//            .openOn(mymap);
//    }
//
//    mymap.on('click', onMapClick);

var marker;
mymap.on('locationfound', function(ev){
    if (!marker) {
        marker = L.marker(ev.latlng);
    } else {
        marker.setLatLng(ev.latlng);
    }
    marker.addTo(mymap);
})