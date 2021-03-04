
  var state ;
  var neigh;
  var ownerName;
  var ownerPic;

var today = new Date();
db.collection('apartment').where("type","==","Buy").get().then(function(querySnapshot){
   size = querySnapshot.size // will return the collection size
   let count = 1;
   console.log("before items");
    querySnapshot.forEach(function(doc) {
    console.log(doc.data());
        if(count<2){
                                       count++
    var lat = doc.data().location.F;
    var long = doc.data().location.V;
    console.log(doc.data());
     var imageUrl = doc.data().main_image;
     document.getElementById("picSale").src = imageUrl;
    console.log(doc.data().main_image);
    document.getElementById("priceSale").innerHTML  = doc.data().price +" "+ "EGP";
    console.log(doc.data().price +" "+ "EGP");
    document.getElementById("sizeSale").innerHTML  = doc.data().size +" " +"\u33A1";
    console.log(doc.data().size +" " +"SQRT");
    document.getElementById("bedroomsSale").innerHTML  = doc.data().rooms + " "+ "Bedrooms";
    console.log(doc.data().rooms + " "+ "Bedrooms");
    document.getElementById("bathroomsSale").innerHTML  = doc.data().bathrooms + " " + "Bathrooms";
    console.log(doc.data().bathrooms + " " + "Bathrooms");
            document.getElementById("citySale").innerHTML = getState(lat , long);
            document.getElementById("addressSale").innerHTML = getNeigh(lat , long);
            var elems = document.querySelector(".detaSale:last-child");
                        var len = elems.length;
                        console.log("length is" + len);
                        elems.id = doc.id;
                        }
    else {
            console.log("clone");
        $( "#aprtSale:first" ).clone().appendTo("#saleee");
         console.log("Added new single properity");
        console.log("before");
            console.log("end");
           console.log("outside");
                     $('#saleee').owlCarousel('destroy');
                     $('#saleee').owlCarousel({touchDrag: true, mouseDrag: true,autoplay: true,items: 1,smartSpeed: 1200, loop:true});
              var lat = doc.data().location.F;
              var long = doc.data().location.V;
              console.log(doc.data());
               var imageUrl = doc.data().main_image;
               document.getElementById("picSale").src = imageUrl;
              console.log(doc.data().main_image);
              document.getElementById("priceSale").innerHTML  = doc.data().price +" "+ "EGP";
              console.log(doc.data().price +" "+ "EGP");
              document.getElementById("sizeSale").innerHTML  = doc.data().size +" " +"\u33A1";
              console.log(doc.data().size +" " +"SQRT");
              document.getElementById("bedroomsSale").innerHTML  = doc.data().rooms + " "+ "Bedrooms";
              console.log(doc.data().rooms + " "+ "Bedrooms");
              document.getElementById("bathroomsSale").innerHTML  = doc.data().bathrooms + " " + "Bathrooms";
              console.log(doc.data().bathrooms + " " + "Bathrooms");
                      document.getElementById("citySale").innerHTML = getState(lat , long);
                      document.getElementById("addressSale").innerHTML = getNeigh(lat , long);
                      var elems = document.querySelector(".detaSale:last-child");
                                  var len = elems.length;
                                  console.log("length is" + len);
                                  elems.id = doc.id;
                                  count++
     }
});
})
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