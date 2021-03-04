
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


  // Initialize html elements 
  const firstname = document.getElementById("firstName");
  const lastname = document.getElementById("lastName");
  const phone = document.getElementById("phoneNumber");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const repassword = document.getElementById("re_password")
  const togglePassword = document.getElementById("togglePassword");
  const retogglePassword = document.getElementById("retoggleRePassword");
  
  const signUpButton = document.getElementById("signUp");
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
retogglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = repassword.getAttribute('type') === 'password' ? 'text' : 'password';
    repassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
function validate(){
  var  validationField = document.getElementById('validation-txt');

  var content = password.value;
  var  errors = [];
  console.log(content);
  if (content.length < 8) {
    errors.push("Your password must be at least 8 characters");
  }
  if (content.search(/[a-z]/i) < 0) {
    errors.push("Your password must contain at least one letter.");

  }
  if (content.search(/[0-9]/i) < 0) {
    errors.push("Your password must contain at least one digit.");

  }
  if (errors.length > 0) {
    validationField.innerHTML = errors.join('<br>');

    return false;
  }
    validationField.innerHTML = errors.join('<br>');
    return true;

  }
  function match() {
  var  matchField = document.getElementById('matchpass-txt');
  var content = password.value;
  var recontent = repassword.value;
  var  errors = [];
  if(content != recontent){
  errors.push("Your passwords are not matching");
  }
   if (errors.length > 0) {
      matchField.innerHTML = errors.join('<br>');

      return false;
    }
      matchField.innerHTML = errors.join('<br>');
      return true;

  }
  function phone1(){
    var  validationField = document.getElementById('phone-txt');

    var content = phone.value;
    var  errors = [];
    console.log(content);
    if (content.length < 11) {
      errors.push("Your phone must be 11 numbers");
    }
    console.log(content.slice(0, 3));
    if (content.slice(0, 4) != "+201") {
      errors.push("Your password must contain at the beginning +2012, +2015, +2010, +2011.");

    }
    if (errors.length > 0) {
      validationField.innerHTML = errors.join('<br>');

      return false;
    }
      validationField.innerHTML = errors.join('<br>');
      return true;

    }
    window.onload= function (){
    render();
    };
    function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
    }

  // on click sign up button
function Signup() {

    // get values from inputs
    const _firstName = firstname.value;
    const _lastName = lastname.value;
    const _phone = phone.value;
    const _email = email.value;
    const _password = password.value;

    auth.signInWithPhoneNumber(_phone, window.recaptchaVerifier).then(function(confirmationResult){
              window.confirmationResult = confirmationResult;
              coderesult = confirmationResult;
              console.log("Message sent");
              }).catch(function(error){
              console.log(error.message);
              });
    // create new user
    const promise = auth.createUserWithEmailAndPassword(_email, _password);

    promise.then(()=>{
      // real time auth, check if there is user signed in or not.
      auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          // there is user signed in.
          console.log(firebaseUser.uid)
          // add user data to database
          db.collection("user").doc(firebaseUser.uid).set({
            first_name : _firstName,
            last_name : _lastName,
            phone : _phone,
            email : _email,
            password : _password,
            img : null
          })
          .then(function(docRef) {
          console.log("signed in");

          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          });

        } else {
          // there is no user signed in!.
          console.log("There is no user signed in!");
        }
      });
    });

    promise.catch(e => console.log(e.message));

  }
   function Verify() {
                var code = document.getElementById("code").value;
                coderesult.confirm(code).then(function(result){
                console.log("verified successfully");
                var user = result.user;
                console.log(user);
                              window.open('','_self').close();
                              var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Log/Signin.html';
                              var myWindow = window.open(url, "");
                }).catch(function(error){
                console.log(error.message);
                });
                }
a