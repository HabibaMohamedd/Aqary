$('#favorites').on('click', function (e) {
  firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var uid = user.uid;
          // [START_EXCLUDE]
     db.collection("user")
         .doc(uid)
         .get()
         .then (function(doc) {
         if(doc.exists) {
         var array =doc.data().favorite_List;
         console.log(array);
         if(array!=null) {
         for(i=0 ; i < array.length ; i++){
         var docRef = db.collection("apartment").doc(array[i]);
            docRef.get().then(function(doc) {
        var apr=
                    '<div class="property-list" id="property">'+
                        '<div class="single-property-item" style="padding-top:25px";>'+
                            '<div class="row">'+
                                '<div class="col-md-4">'+
                                    '<div class="property">'+
                                        '<a href="C:/Users/ProSoft/eclipse-workspace/AqaryProject/Main/Propertydetails.html" class="property-pic"><img alt="" id="main_image" style="width:300px ; height:200px" onclick="showDetails(this)"></a>'+
                                   '</div>'+
                                '</div>'+
                                '<div class="col-md-8">'+
                                    '<div class="property-text">'+
                                        '<div class="s-text" id="type"></div>'+
                                        '<div class="room-price" style="padding-top:40px";>'+
                                            '<span>Start From:</span>'+
                                            '<h5 id="price"></h5>'+
                                        '</div>'+
                                        '<ul class="room-features" style="padding-top:40px";>'+
                                            '<li>'+
                                                '<i class="fa fa-arrows"></i>'+
                                                '<p id="size"></p>'+
                                            '</li>'+
                                            '<li>'+
                                                '<i class="fa fa-bed"></i>'+
                                                '<p id="bedrooms"></p>'+
                                            '</li>'+
                                            '<li>'+
                                                '<i class="fa fa-bath"></i>'+
                                                '<p id="bathrooms"></p>'+
                                            '</li>'+
                                        '</ul>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
                  let divv = document.createElement('div');
                  divv.className = "col-lg-9";
                  divv.innerHTML = apr;
                  document.getElementById("property").after(divv);
                                          document.getElementById("main_image").src= doc.data().main_image;
                                            console.log(doc.data().main_image);
                                            document.getElementById("type").innerHTML  = "For" +" "+ doc.data().type;
                                            console.log("For" +" "+ doc.data().type);
                                            document.getElementById("price").innerHTML  = doc.data().price +" "+ "EGP";
                                            console.log(doc.data().price +" "+ "EGP");
                                            document.getElementById("size").innerHTML  = doc.data().size +" " +"\u33A1";
                                            console.log(doc.data().size +" " +"SQRT");
                                            document.getElementById("bedrooms").innerHTML  = doc.data().rooms + " "+ "Bedrooms";
                                            console.log(doc.data().rooms + " "+ "Bedrooms");
                                            document.getElementById("bathrooms").innerHTML  = doc.data().bathrooms + " " + "Bathrooms";
                                            console.log(doc.data().bathrooms + " " + "Bathrooms");
                   var elems = document.querySelector(".property-pic:last-child");
                      var len = elems.length;
                      console.log("length is" + len);
                      elems.id = doc.id;
 });
         }
         }else {
                let divv = document.createElement('h4');
                divv.className="profile-details";
                          divv.style = "text-align:center;padding-top:200px;padding-bottom:200px";
                          divv.innerHTML="No favorites";
                          document.getElementById("property").after(divv);
         }
         }
         });
         }
         })
         })