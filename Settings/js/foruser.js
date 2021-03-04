firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var uid = user.uid;
var docRef = db.collection("user").doc(uid);
docRef.get().then(function(doc) {
document.getElementById("username").innerHTML= "Hello," +doc.data().first_name;
console.log(doc.data().first_name);
});
}
})