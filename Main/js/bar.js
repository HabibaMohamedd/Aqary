
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
  if (user) {
       var fornotnull =
                                        '<div class="top-right">'+
                                        '<div class="language-option">'+
                                        '<span id="username" style="color:white;"></span>'+
                                        '<i class="fa fa-angle-down"></i>'+
                                        '<div class="flag-dropdown">'+
                                        '<ul>'+
                                             '<li><a href="C:/Users/ProSoft/eclipse-workspace/AqaryProject/Settings/finaluser.html">Profile</a></li>'+
                                             '<li><a onclick="logout()">Logout</a></li>'+
                                             '</ul>'+
                                                       '</div>'+
                                                                  ' </div>'+

                                                               '</div>';
                           var toadd =                 '<div class="language-option">'+
                                                       '<span id="username style="color:white;"></span>'+
                                                       '<i class="fa fa-angle-down"></i>'+
                                                       '<div class="flag-dropdown">'+
                                                           '<ul>'+
                                                               '<li><a href="C:/Users/ProSoft/eclipse-workspace/AqaryProject/Settings/finaluser.html">Profile</a></li>'+
                                                               '<li onclick="logout()"><a onclick="logout()">Logout</a></li>'+
                                                           '</ul>'+
                                                       '</div>'+
                                                       '</div>';
                                                let divv = document.createElement('div');
                                                divv.className = "language-bar";
                                                divv.innerHTML = toadd;
                                                 document.getElementById("toadd").after(divv);
                                                           let div = document.createElement('div');
                                                           div.className = "col-lg-5";
                                                           div.innerHTML = fornotnull;
                                                            document.getElementById("toappend").appendChild(div);

  } else {

 console.log("entered without uid");
                     var fornull=
                                       '<div class="top-right">'+
                                       '<a href="C:/Users/ProSoft/eclipse-workspace/AqaryProject/Log/Signin.html" class="property-sub">Login/Signup</a>'+
                                       '</div>';


                     var toaddd;          '<div class="property-btn">'+
                                     '<a href="#" class="property-sub">Login/Signup</a>'+
                                 '</div>';
                                                                               let divv = document.createElement('div');
                                                                                    divv.className = "language-bar";
                                                                                    divv.innerHTML = toaddd;
                                                                                     document.getElementById("toadd").after(divv);
                                                                                               let div = document.createElement('div');
                                                                                               div.className = "col-lg-5";
                                                                                               div.innerHTML = fornull;
                                                                                                document.getElementById("toappend").appendChild(div);

   }
});



