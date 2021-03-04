

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
  const email = document.getElementById("email1");
  var pass1 = document.getElementById("password1");
  var pass2 = document.getElementById("repassword1");
function Reset() {
const email_ = email.value;
const pass1_ = pass1.value;
const pass2_ = pass2.value;
console.log(email_);
if(pass1_==pass2_){
db.collection('user').get().then(function(querySnapshot){
   console.log("before items");
    querySnapshot.forEach(function(doc) {
    if(doc.data().email==email_){
    var id =doc.id;
     db.collection("user").doc(id).update(
      {
        "password": pass2_,
       }).then(function() {
        console.log("Document successfully updated!");
       });
    }
    });
    });
    }
auth.sendPasswordResetEmail(email_).then(function() {

  console.log("done");
}).catch(function(error) {
  // An error happened.
});
}