console.log("entered chooseFav file");
var today = new Date();
            var count;
            var arrayIds;
  firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        //document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var uid = user.uid;
          // [START_EXCLUDE]
          console.log(uid);
     db.collection("user")
         .doc(uid)
         .get()
         .then (function(doc) {
         if(doc.exists) {
            count = 1;
         var array =doc.data().favorite_List;
            size = array.length;// will return the collection size
            console.log(size);
         console.log(array);
         if(array!=null) {
         for(i=0 ; i < array.length ; i++){
         var docRef = db.collection("apartment").doc(array[i]);
            docRef.get().then(function(doc) {
              var date = doc.data().start_date.toDate();
                let year = date.getFullYear();
                console.log("The year" + year);
                var monthstart = date.getMonth()+1;
                console.log("Month start" + monthstart);
                console.log(doc.data().end_date);
                var date1 = doc.data().end_date.toDate();
                var monthend = date1.getMonth()+1;
                console.log("Month end" +monthend);
                if(monthend >= today.getMonth()+1 && monthstart<today.getMonth()+1) {
                    count++;
                console.log(doc.id + "is ignored");
                return;
                }else {
                    var lat = doc.data().location.F;
                    var long = doc.data().location.V;
                  document.getElementById("main_image").src= doc.data().main_image;
                                            console.log(doc.data().main_image);
                                            document.getElementById("type").innerHTML  = "For" +" "+ doc.data().type;
                                            console.log("For" +" "+ doc.data().type);
                                            document.getElementById("price").innerHTML  = doc.data().price +" "+ "EGP";
                                            console.log(doc.data().price +" "+ "EGP");
                                            document.getElementById("size").innerHTML  = doc.data().size +" " +"SQRT";
                                            console.log(doc.data().size +" " +"SQRT");
                                            document.getElementById("bedrooms").innerHTML  = doc.data().rooms + " "+ "Bedrooms";
                                            console.log(doc.data().rooms + " "+ "Bedrooms");
                                            document.getElementById("bathrooms").innerHTML  = doc.data().bathrooms + " " + "Bathrooms";
                                            console.log(doc.data().bathrooms + " " + "Bathrooms");
                                                    document.getElementById("city").innerHTML = getState(lat , long);
                                                    document.getElementById("address").innerHTML = getNeigh(lat , long);
                     var elem = document.querySelector(".plus-minus:last-child");
//                     var len = elems.length;
//                     console.log("length is" + len);
                     elem.id = doc.id;
                     //console.log("get document id " +  lastelement.id);
                     if(count < size) {
                      $( ".single-property-item:first" ).clone().appendTo(".property-list");
                      console.log("Added new single properity");
                               count++;

                     console.log("before");
                     }
                         console.log("end");
                         addFavs(doc.data().size);
                 }
                 });
                 }}
                 }
                 console.log("outside");
                 });}
                 });
function getState (lat , long) {
console.log("entered state" + lat + " " + long);
    $.ajaxSetup({async: false});
    $.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ lat +'&lon='+ long +'', function(data){
        state= data.address.city;
        if(state==null) {
                state= data.address.state;
        }
        console.log("The state 1 is :"+state);
    });
    console.log("The state 2 is :"+state);
    return state;
}

function getNeigh (lat , long) {
console.log("entered neigh" + lat + " " + long);
$.ajaxSetup({async: false});
    $.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ lat +'&lon='+ long +'', function(data){
        neigh= data.address.neighbourhood;
            if(neigh== null) {
            neigh= data.address.suburb;
            if(data.address.suburb==null){
            neigh= data.address.village;
            }
            }
    });
    console.log("The neigh 2 is :"+neigh);
    return neigh;
}

function onClick(e) {
var customId = this.options.customId;
var docid =  customId;
localStorage.setItem("thisdocid" , docid);
         window.open('','_self').close();
         var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Main/Propertydetails.html';
         var myWindow = window.open(url, "");
}
function addFavs() {
console.log("entered cont function");
              arraySizes = new Array(count);
              console.log("Size of array" + arraySizes.length);
}
arrayIds = new Array(0);
function addFavs (elem) {
  var classname =document.getElementById(elem).getAttribute("class");
console.log(classname);
  if(classname== "plus-minus") {
    document.getElementById(elem).classList.toggle('plus-minus:after');
    console.log("added");
    arrayIds[arrayIds.length]= elem;
    console.log(arrayIds.length+" "+arrayIds);
  }
  else{
    document.getElementById(elem).classList.toggle('plus-minus:after');
    console.log("removed");
const index = arrayIds.indexOf(elem);
if (index > -1) {
  arrayIds.splice(index, 1);
}
    console.log(arrayIds.length+" "+arrayIds);
  }
}
function CallMatrices () {
localStorage.setItem("ArrayIds" , arrayIds);
localStorage.setItem("arrsize" , arrayIds.length);
         window.open('','_self').close();
         var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Main/AHP.html';
         var myWindow = window.open(url, "");
}