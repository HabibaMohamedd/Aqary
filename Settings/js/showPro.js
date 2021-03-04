$('#rentals').on('click', function (e) {
 firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var uid = user.uid;
          console.log("in pro"+uid);
db.collection("apartment").get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                    if(doc.data().owner!= null || doc.data().owner!= "undefined"){
                    if(doc.data().owner.id==uid){
                     console.log(doc.data());
                           var apr=
                                            '<div class="property-list" id="property">'+
                                                '<div class="single-property-item" style="padding-top:25px";>'+
                                                    '<div class="row">'+
                                                        '<div class="col-md-4">'+
                                                            '<div class="property">'+
                                                                '<a href="C:/Users/ProSoft/eclipse-workspace/AqaryProject/Main/Propertydetails.html" class="property-pic"><img alt="" id="main_image" style="width:300px ; height:270px" onclick="showDetails(this)"></a>'+
                                                           '</div>'+
                                                        '</div>'+
                                                        '<div class="col-md-8">'+
														'<a href="C:/Users/ProSoft/eclipse-workspace/AqaryProject/Settings/editAprt.html" class="forid"><i class="fa fa-edit" onclick ="editAprt(this)" style="font-size:36px;color:#2cbdb8;padding-left:500px"></i></a>'+
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
                                                                     '<a class="foriddelete"><i class="material-icons" onclick="deleteApt(this)" style="font-size:30px;color:red;padding-left:500px">delete_forever</i></a>'+
                                                                      '</div>'+
                                                                       '</div>'+
                                                '</div>';
                                          let divvv = document.createElement('div');
                                          divvv.className = "col-lg-9";
                                          divvv.innerHTML = apr;
                                          document.getElementById("property1").after(divvv);
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
                                                                    var elem = document.querySelector(".forid");
                                                                    console.log("the id is : " + doc.id);
                                                                    elem.id = doc.id;
                                                                    var elemt = document.querySelector(".foriddelete");
                                                                    console.log("the id is : " + doc.id);
                                                                    elemt.id = doc.id;
                                           var elems = document.querySelector(".property-pic:last-child");
                                              var len = elems.length;
                                              console.log("length is" + len);
                                              elems.id = doc.id;
                                              console.log("the id is" + doc.id);
                                              } else {
                                              return;
                                              }
                                              } else {
                                                              let divvv = document.createElement('h4');
                                                              divvv.className="profile-details";
                                                                        divvv.style = "text-align:center;padding-top:200px;padding-bottom:200px";
                                                                        divvv.innerHTML="No Apartments added";
                                                                        document.getElementById("property1").appendChild(divvv);
                                              }
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });

    }
    })
            })
        function onClick(e) {
        var customId = this.options.customId;
        var docid =  customId;
        localStorage.setItem("thisdocid" , docid);
                 window.open('','_self').close();
                 var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Main/Propertydetails.html';
                 var myWindow = window.open(url, "");
        }
