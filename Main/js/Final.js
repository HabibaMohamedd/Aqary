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
// Initaaaialize Firebase

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
let storageRef = storage.ref();


var uploadtask;
var _Type;
var DownloadURL;
var DownloadURL1 = [];
var loc;
var latt;
var lann;
var uid ;

const Description1 = document.getElementById("Description1");
const Bedrooms = document.getElementById("Bedrooms");
const Bathrooms = document.getElementById("Bathrooms");

const Size = document.getElementById("Size");
const Price = document.getElementById("Price");
const Description = document.getElementById("Description");
const From = document.getElementById("Date");
const To = document.getElementById("Date1");



const UploadButon = document.getElementById("Upload");
firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          uid = user.uid;
  }})
var expanded = false;
var expanded2 = false;
var arr = [];
var arr1 = []

function addvalues7() {
    var checkBox = document.getElementById("eight");
    if (checkBox.checked == true) {
        arr.push(document.getElementById('eight').value);
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    } else {
        arr.pop();
    }
}

function addvalues6() {
    var checkBox = document.getElementById("seven");
    if (checkBox.checked == true) {
        arr.push(document.getElementById('seven').value);
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    } else {
        arr.pop();
    }
}

function addvalues5() {
    var checkBox = document.getElementById("six");
    if (checkBox.checked == true) {
        arr.push(document.getElementById('six').value);
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    } else {
        arr.pop();
    }
}

function addvalues4() {
    var checkBox = document.getElementById("five");
    if (checkBox.checked == true) {
        arr.push(document.getElementById('five').value);
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    } else {
        arr.pop();
    }
}

function addvalues3() {
    var checkBox = document.getElementById("four");
    if (checkBox.checked == true) {
        arr1.push(document.getElementById('four').value);
        for (i = 0; i < arr1.length; i++) {
            console.log(arr1[i]);
        }
    } else {
        arr1.pop();
    }
}




function addvalues2() {
    var checkBox = document.getElementById("three");
    if (checkBox.checked == true) {
        arr1.push(document.getElementById('three').value);
        for (i = 0; i < arr1.length; i++) {
            console.log(arr1[i]);
        }
    } else {
        arr1.pop();
    }
}

function addvalues1() {
    var checkBox = document.getElementById("two");
    if (checkBox.checked == true) {
        arr1.push(document.getElementById('two').value);
        for (i = 0; i < arr1.length; i++) {
            console.log(arr1[i]);
        }
    } else {
        arr1.pop();
    }
}

function addvalues() {
    var checkBox1 = document.getElementById("one");
    if (checkBox1.checked == true) {
        arr1.push(document.getElementById('one').value);
        for (i = 0; i < arr1.length; i++) {
            console.log(arr1[i]);
        }
    } else {
        arr1.pop();
    }
}

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
    var values = $('#checkboxes').val();
}

function showCheckboxes2() {
    var checkboxes = document.getElementById("checkboxes2");
    if (!expanded2) {
        checkboxes.style.display = "block";
        expanded2 = true;
    } else {
        checkboxes.style.display = "none";
        expanded2 = false;
    }
    var values = $('#checkboxes2').val();
}







console.log("i intializeed the elments")


var map = L.map('map').setView([30.0626297, 31.24967], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFiZWJhbXVoYW1tZWQiLCJhIjoiY2thZDc1aHJ1MDF3bTJ0bXR5aWMzdHRrbCJ9.22ML8H5Qyfccincjoe7TcQ'
}).addTo(map);
var marker = L.marker([30.0626297, 31.24967]).addTo(map);

console.log("Map is good")



function Rent() {
    _Type = "Rent"
    console.log(_Type)
}

function Sale() {
    _Type = "Buy"
    console.log(_Type)
}


console.log("Typeeeeeeeeeeeeee")



console.log("i selected")

function onMapClick(e) {
    marker
        .setLatLng(e.latlng)
        .update();
    console.log(marker.getLatLng());
    loc = marker.getLatLng();

    latt = e.latlng.lat;
    lann = e.latlng.lng;


}
map.on('click', onMapClick);
console.log("map is clicked wohooo");




//photos process main photo


const file = document.getElementById("select");
const files = document.getElementById("files");

//Listen for file selection
file.addEventListener('change', function (e) {
    //Get files
    console.log("I listen")
    $(':button[type="submit"]').prop('disabled', true);
    $(':button[type="submit"]').html('Uplading Images, Please wait....');
    for (var i = 0; i < e.target.files.length; i++) {
        var imageFile = e.target.files[i];
        console.log("I in the for")
        uploadMainImageAsPromise(imageFile);
    }
});


//Handle waiting to upload each file using promise
function uploadMainImageAsPromise(imageFile) {
    return new Promise(function (resolve, reject) {
        var storageRef = firebase.storage().ref('apartment' + "/" + Math.random()+imageFile.name);

        //Upload file
        console.log("Firstupload");
        var task = storageRef.put(imageFile);

        //Update progress bar
        task.on('state_changed',
            function progress(snapshot) {
                var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log("Upload is " + percentage + "% done ");
            },
            function error(err) {
                $(':button[type="submit"]').prop('disabled', false);
                $(':button[type="submit"]').html('Submit');
            },
            function complete() {
                task.then(snapshot => snapshot.ref.getDownloadURL())
                    .then((url) => {
                        // Get URL of this image and assign it to DownloadURL var
                        DownloadURL = url;
                        $(':button[type="submit"]').prop('disabled', false);
                        $(':button[type="submit"]').html('Submit');
                        // For check
                        console.log('main---' + DownloadURL);
                    });
            }
        );
    });
}




//pohotos process other photos
let finalResult = 0;
let currentResult = 0;

files.addEventListener('change', function (e) {
    //Get files
    // console.log("I listen")
    finalResult = e.target.files.length;

    $(':button[type="submit"]').prop('disabled', true);
    $(':button[type="submit"]').html('Uplading Images, Please wait....');

    for (var i = 0; i < e.target.files.length; i++) {
        var imageFile = e.target.files[i];
        console.log("I in the for");
        uploadOtherImageAsPromise(imageFile);
    }
});


//Handle waiting to upload each file using promise
function uploadOtherImageAsPromise(imageFile) {
    return new Promise(function (resolve, reject) {
        var storageRef = firebase.storage().ref('apartment' + "/" + Math.random()+imageFile.name);

        //Upload file
        console.log("Firstupload");
        var task = storageRef.put(imageFile);

        //Update progress bar
        task.on('state_changed',
            function progress(snapshot) {
                var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log("Upload is " + percentage + "% done ");
            },
            function error(err) {
                $(':button[type="submit"]').prop('disabled', false);
                $(':button[type="submit"]').html('Submit');
            },
            function complete() {
                task.then(snapshot => snapshot.ref.getDownloadURL())
                    .then((url) => {
                        // get URL of this image and push it to DownloadURL1 Array
                        DownloadURL1.push(url);
                        currentResult = currentResult + 1;
                        if (currentResult == finalResult) {
                            $(':button[type="submit"]').prop('disabled', false);
                            $(':button[type="submit"]').html('Submit');
                        }
                        /**
                         * After each image upload the URL of that image will be added to DownloadURL1 Array.
                         * After all images were uploaded, DownloadURL1 contain all URLs.
                         * Now you can assign this array to that property in DB.
                         */
                        DownloadURL1.map(url => {
                            console.log('other---' + url)
                        })
                    });
            }
        );
    });
}






// get values from inputs

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion



function uploadfile() {


    const _Description1 = Description1.value;
    console.log(_Description1);
    const _Bathrooms = Bathrooms.value;
    console.log(_Bathrooms);
    const _Description = Description.value;
    console.log(_Description);
    const _To = To.value;
    console.log(new Date(_To));

    console.log(arr);

    console.log(arr1);

    console.log(_Type);

    console.log(DownloadURL);

    console.log(DownloadURL1);

    const _Price = Price.value;
    console.log(_Price);
    const _Bedrooms = Bedrooms.value;
    console.log(_Bedrooms);
    const _Size = Size.value;
    console.log(_Size);
    const _From = From.value;
    console.log(new Date(_From));


    console.log(marker.getLatLng());

    db.collection("apartment").add({
        apartment_name: _Description1,
        bathrooms: Number(_Bathrooms),
        description: _Description,
        end_date: new Date(_To),
        features: arr,
        owner : firebase.firestore().doc(`/user/${uid}`),

        location: new firebase.firestore.GeoPoint(latt, lann),
        main_image: DownloadURL,
        near_by_places: arr1,
        other_images: DownloadURL1,

        price: Number(_Price),
        rooms: Number(_Bedrooms),
        size: Number(_Size),
        start_date: new Date(_From),
        type: _Type
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });




}