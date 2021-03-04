

  const mainName = document.getElementById("mainName");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phoneNumber");
  const image = document.getElementById("imgg");

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
             document.getElementById("mainName").innerHTML = doc.data().first_name + " " + doc.data().last_name;
             document.getElementById("name").innerHTML = doc.data().first_name + " " + doc.data().last_name;
             document.getElementById("email").innerHTML = doc.data().email;
             document.getElementById("phoneNumber").innerHTML = doc.data().phone;
             if(doc.data().img == null){
             document.getElementById("imgg").src = "https://firebasestorage.googleapis.com/v0/b/aqary-project.appspot.com/o/user%2Fcontact-placeholder.jpg?alt=media&token=e4b5a946-b4ab-4315-aced-c9073042d90a"
             }else {
             document.getElementById("imgg").src = doc.data().img;}
             } else {
             console.log("No such a document");
             }
         });
     }});


