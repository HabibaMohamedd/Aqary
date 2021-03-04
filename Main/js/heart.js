    var name=localStorage.getItem("thisdocid");
    console.log(name);
var uidd;
  firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var uid = user.uid;
          uidd =user.uid;
          // [START_EXCLUDE]
                    console.log("user is 1" + uidd);
                              var docRef = db.collection("user").doc(uidd);
                              docRef.get().then(function(doc) {
                              console.log(doc.data().favorite_List);
                              var arrayy = doc.data().favorite_List;
                              if(arrayy==null || arrayy == "undefined"){
                              console.log("null");
                              } else {
                              for(i =0 ; i< arrayy.length ; i++) {
                              if(arrayy[i] == name) {
                              console.log("matched");
                              document.getElementById("heartt").classList.toggle('heart-blast');
                              } else {
                              console.log("can't find matching");
                              }
                              }
                              }
                              });
}
});
function myfunc() {
          console.log("user is 2" + uidd);
  var classname =document.getElementById("heartt").getAttribute("class");
console.log(classname);
  if(classname== "heart") {
    document.getElementById("heartt").classList.toggle('heart-blast');
    db.collection("user")
    .doc(uidd)
    .update({
         favorite_List: firebase.firestore.FieldValue.arrayUnion(name)
     });
  }
  else{
    document.getElementById("heartt").classList.toggle('heart-blast');
    db.collection("user")
        .doc(uidd)
        .update({
             favorite_List: firebase.firestore.FieldValue.arrayRemove(name)
         });
  }
}


