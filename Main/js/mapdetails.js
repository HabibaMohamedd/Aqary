
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyANCVtnfhl7cL1XbY7-7qjNfYJ_7ZPH-L4",
    authDomain: "aqary-project.firebaseapp.com",
    databaseURL: "https://aqary-project.firebaseio.com",
    projectId: "aqary-project",
    storageBucket: "aqary-project.appspot.com",
    messagingSenderId: "884495768845",
    appId: "1:884495768845:web:c12e33c0ea1c456086a444"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
  const storageRef = storage.ref();
  var name=localStorage.getItem("thisdocid");
    console.log(name);

var docRef = db.collection("apartment").doc(name);
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        var lat = doc.data().location.F;
        var long = doc.data().location.V;
        console.log(lat + " " + long);
          var mymap = L.map('mapp').setView([lat,long], 13);

         L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
             attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
             maxZoom: 18,
             id: 'mapbox/streets-v11',
             tileSize: 512,
             zoomOffset: -1,
             accessToken: 'pk.eyJ1IjoiaGFiZWJhbXVoYW1tZWQiLCJhIjoiY2thZDc1aHJ1MDF3bTJ0bXR5aWMzdHRrbCJ9.22ML8H5Qyfccincjoe7TcQ'
         }).addTo(mymap);
         var marker = L.marker([lat,long]).addTo(mymap);
$.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ lat +'&lon='+ long +'', function(data){
    console.log(data.address);
    console.log(data.address.state);
    console.log(data.address.neighbourhood);
    var state = data.address.state;
    var neighbourhood = data.address.neighbourhood;
    var postcode = data.address.postcode;
    if(neighbourhood == null) {
    neighbourhood = data.address.suburb;
    }
            if(state==null) {
            state= data.address.suburb;
            }
    document.getElementById("city").innerHTML = state;
    document.getElementById("cityy").innerHTML = state;
    document.getElementById("address").innerHTML = data.address.postcode + " " + data.address.neighbourhood ;
});

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
