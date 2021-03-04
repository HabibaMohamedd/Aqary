
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

  firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]


          console.log("email is : " + email);

  db.collection("user")
     .doc(uid)
     .get()
          .then (function(doc) {
             if(doc.exists) {
                 console.log(doc.data());
             document.getElementById("inputFirstName").value = doc.data().first_name;
             document.getElementById("inputLastName").value =  doc.data().last_name;
             document.getElementById("inputPhone").value = doc.data().phone;
                 } else {
                 console.log("No such a document");
                 }
             });
          }
          });


              function previewFile() {
                      var preview = document.querySelector('img');
                      var file = document.querySelector('input[type=file]').files[0];
                      var reader = new FileReader();

                      // when user select an image, `reader.readAsDataURL(file)` will be triggered
                      // reader instance will hold the result (base64) data
                      // next, event listener will be triggered and we call `reader.result` to get
                      // the base64 data and replace it with the image tag src attribute
                      reader.addEventListener("load", function() {
                        console.log('before preview');
                        preview.src = reader.result;
                        console.log('after preview');
                      }, false);

                      if (file) {
                        console.log('inside if');
                        reader.readAsDataURL(file);
                      } else {
                        console.log('inside else');
                      }
                    }

                function Save() {

                 firebase.auth().onAuthStateChanged(function(user) {
                        // [START_EXCLUDE silent]
                        //document.getElementById('quickstart-verify-email').disabled = true;
                        // [END_EXCLUDE]
                        if (user) {
                          var uid = user.uid;

                    var pic = document.getElementById("files");
                    let imageFile = pic.files[0];
                    let storageRef = firebase.storage().ref('user/'+"Images" + Math.random()+imageFile.name);
                    let task = storageRef.put(imageFile);
                    task.on('state_changed', function progress(snapshot) {
                    let percentage = snapshot.bytesTransferred/ snapshot.totalBytes*100;
                    console.log("Upload is " + percentage + "% done ");
                    switch(snapshot.state){
                    case firebase.storage.TaskState.PAUSED :
                    console.log("Upload is paused");
                    break;
                    case firebase.storage.TaskState.RUNNING :
                    console.log("Upload is running");
                    break;
                    }}, function (error) {
                    console.log(error.message);
                    }, function () {
                    task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log(downloadURL);
                    db.collection("user").doc(uid)
                      .update({
                        "first_name": document.getElementById("inputFirstName").value,
                        "last_name": document.getElementById("inputLastName").value,
                        "phone": document.getElementById("inputPhone").value,
                        "img" : downloadURL
                          }).then(function() {
                          console.log("Document successfully updated!");
                          window.open('','_self').close();
                          var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Settings/finaluser.html';
                           var myWindow = window.open(url, "");
                                                                                                  });
                             });
                             });
                    }});
                   }
function changePassword() {
var inputpassCurrent = document.getElementById("inputPasswordCurrent").value;
var inputpassNew1 = document.getElementById("inputPasswordNew").value;
var inputpassNew2 = document.getElementById("inputPasswordNew2").value;
console.log("before auth");
 firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var uid = user.uid;
          var email = user.email;
console.log(email);
 db.collection("user")
                             .doc(uid)
                             .get()
                             .then(function(doc) {
                             if(doc.exists) {
                                 console.log(doc.data());
if(inputpassNew1 == inputpassNew2 && doc.data().password == inputpassCurrent)  {
console.log("after if passwords");

user.updatePassword(inputpassNew1).then(function() {
  // Update successful.
  console.log("done");
  console.log("Password updated");
                                                    db.collection("user").doc(uid)
                                                                                               .update(
                                                                                                   {
                                                                                                       "password": inputpassNew1,

                                                                                                   }).then(function() {
                                                                                                          console.log("Document successfully updated!");
                                                                                                      });
      }).then(function() {
      console.log("Document successfully updated!");
       window.open('','_self').close();
               var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Settings/finaluser.html';
               var myWindow = window.open(url, "");
       }).catch(function(error) {
  // An error happened.
  console.log("wrong");
  console.log("Something wrong");
});
}
                                 }
                                 });
}

});
}


function deleteAccount() {
firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
        var uid = user.uid;
  db.collection("user").doc(uid).delete().then(function() {
      console.log("Document successfully deleted!");
      }).then(function() {
   user.delete().then(function() {
     // User deleted.
     console.log("Account is deleted");

          window.open('','_self').close();
                        var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Log/Signin.html';
                        var myWindow = window.open(url, "");
     }).catch(function(error) {
     // An error happened.
   }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
      }); }});
}