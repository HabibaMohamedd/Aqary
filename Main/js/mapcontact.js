 var mymap = L.map('mapidcontact').setView([30.5503, 31.0106], 13)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFiZWJhbXVoYW1tZWQiLCJhIjoiY2thZDc1aHJ1MDF3bTJ0bXR5aWMzdHRrbCJ9.22ML8H5Qyfccincjoe7TcQ'
}).addTo(mymap);
var marker = L.marker([30.5656, 31.0131]).addTo(mymap);