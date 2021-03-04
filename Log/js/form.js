

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

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  var validation = document.getElementById("error-txt");

function Signin() {
         const email_ = email.value;
         const password_ = password.value;

         auth.signInWithEmailAndPassword(email_, password_).then
         (function(docRef) {
         console.log("Document written with ID: ", docRef.id);
         window.open('','_self').close();
         var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Main/indeex.html';
         var myWindow = window.open(url, "");
         }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
                validation.innerHTML = "Invalid email or password";
                validation.style.color="red";
          } else {
            validation.innerHTML = errorMessage;
            validation.style.color="red";
          }
          console.log(error);
        });
}

function Continue() {
 window.open('','_self').close();
         var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Main/indeex.html';
         var myWindow = window.open(url, "");
}


function Create() {
window.open('','_self').close();
              var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/login/index.html';
              var myWindow = window.open(url, "");


}
function ForgetPassword() {
window.open('','_self').close();
         var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Log/ForgetPass.html';
         var myWindow = window.open(url, "");

}
