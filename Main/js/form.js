
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

  const db = firebase.firestore();

            db.collection("apartment").get().then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {
                      // doc.data() is never undefined for query doc snapshots
                      console.log(doc.id, " => ", doc.data());
                  });
              });