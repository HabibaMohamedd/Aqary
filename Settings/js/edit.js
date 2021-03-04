
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
var name=localStorage.getItem("docforedit");
    console.log(name);

var _Type;
var uid ;
const Price = document.getElementById("Price");
const From = document.getElementById("Date");
const To = document.getElementById("Date1");



const edit = document.getElementById("Upload");

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

function Rent() {
    _Type = "Rent"
    console.log(_Type)
}

function Sale() {
    _Type = "Buy"
    console.log(_Type)
}
var _To ; var _Price ; var _From;
function editApr(){

     _To = To.value;
    console.log(new Date(_To));
    console.log(arr);

    console.log(arr1);
    console.log(_Type);

    _Price = Price.value;
    console.log(_Price);
    _From = From.value;
    console.log(new Date(_From));
var aprt = db.collection("apartment").doc(name);

aprt.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        if(new Date(_To) == null || new Date(_To) == "undefined" || new Date(_To) == "Invalid Date") {
        console.log("to");
        _To = doc.data().end_date;
        }else{
        _To = new Date(_To);
        }
        if(_Type == null || _Type == "undefined") {
        console.log("type");
                _Type = doc.data().type;
                }
        if(_Price == null || _Price == "undefined") {
        console.log("price");
                _Price = doc.data().price;
                }else{
                _Price = Number(_Price);
                }
                if(new Date(_From) == null || new Date(_From) == "undefined" || new Date(_From) == "Invalid Date") {
                console.log("from");
                        _From = doc.data().start_date;
                        }else{
                        _From = new Date(_From);
                        }
                        if(arr[0] == null || arr[0] == "undefined") {
                        console.log("feat");
                                arr = doc.data().features;
                                }
                                if(arr1[0] == null || arr1[0] == "undefined") {
                                console.log("near by");
                                        arr1 = doc.data().near_by_places;
                                        }
                                        console.log("end date" + _To + "  Price" + _Price + " start date" + _From + "  type" + _Type);
                                        console.log("features" + arr);
                                        console.log("near by places" + arr1);
                                        // Set the "capital" field of the city 'DC'
                                        aprt.update({
                                                    end_date: _To,
                                                    features: arr,
                                                    near_by_places: arr1,
                                                    price: _Price,
                                                    start_date: _From,
                                                    type: _Type
                                        })
                                        .then(function() {
                                            console.log("Document successfully updated!");
                                        })
                                        .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                        });
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}