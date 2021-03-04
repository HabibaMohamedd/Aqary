
  var state ;
  var neigh;

var today = new Date();
db.collection('apartment').where("type","==","Rent").get().then(function(querySnapshot){
   size = querySnapshot.size // will return the collection size
   let count = 1;
   console.log("before items");
    querySnapshot.forEach(function(doc) {
    var docRef = db.collection("user").doc(doc.data().owner.id);
    docRef.get().then(function(docc) {
    console.log(doc.data());
     var date = doc.data().start_date.toDate();
        let year = date.getFullYear();
        let monthstart = date.getMonth();
        let fromtoday = today.getMonth()+1;
        if(monthstart==fromtoday) {
        if(count==1){
                console.log("Month from firebase" +monthstart);
                console.log("Month from today" + fromtoday);
           $('#renttt').owlCarousel('destroy');
           $('#renttt').owlCarousel({touchDrag: true, mouseDrag: true,autoplay: true,smartSpeed: 1200});
    var lat = doc.data().location.F;
    var long = doc.data().location.V;
    console.log(doc.data());
     var imageUrl = doc.data().main_image;
    $("#first").css("background-image", "url(" + imageUrl + ")");
    console.log(doc.data().main_image);
    document.getElementById("price").innerHTML  = doc.data().price +" "+ "EGP";
    console.log(doc.data().price +" "+ "EGP");
    document.getElementById("size").innerHTML  = doc.data().size +" " +"\u33A1";
    console.log(doc.data().size +" " +"SQRT");
    document.getElementById("bedrooms").innerHTML  = doc.data().rooms + " "+ "Bedrooms";
    console.log(doc.data().rooms + " "+ "Bedrooms");
    document.getElementById("bathrooms").innerHTML  = doc.data().bathrooms + " " + "Bathrooms";
    console.log(doc.data().bathrooms + " " + "Bathrooms");
    document.getElementById("ownerName").innerHTML = docc.data().first_name + " " + docc.data().last_name;
               if(docc.data().img != null){
                    document.getElementById("ownerPic").src = docc.data().img;
                    }else{
                    document.getElementById("ownerPic").src = "https://firebasestorage.googleapis.com/v0/b/aqary-project.appspot.com/o/user%2Fcontact-placeholder.jpg?alt=media&token=e4b5a946-b4ab-4315-aced-c9073042d90a";
                    }
            document.getElementById("city").innerHTML = getState(lat , long);
            document.getElementById("address").innerHTML = getNeigh(lat , long);
            var elems = document.querySelector(".deta:last-child");
                        var len = elems.length;
                        console.log("length is" + len);
                        elems.id = doc.id;
                        count++
                        }
    else {
            console.log("clone");
        $( "#aprt:first" ).clone().appendTo("#renttt");
         console.log("Added new single properity");
        console.log("before");
            console.log("end");
console.log("outside");
           console.log("Month from firebase" +monthstart);
                console.log("Month from today" + fromtoday);
           $('#renttt').owlCarousel('destroy');
           $('#renttt').owlCarousel({touchDrag: true, mouseDrag: true,smartSpeed: 1200});
    var lat = doc.data().location.F;
    var long = doc.data().location.V;
    console.log(doc.data());
     var imageUrl = doc.data().main_image;
    $("#first").css("background-image", "url(" + imageUrl + ")");
    console.log(doc.data().main_image);
    document.getElementById("price").innerHTML  = doc.data().price +" "+ "EGP";
    console.log(doc.data().price +" "+ "EGP");
    document.getElementById("size").innerHTML  = doc.data().size +" " +"\u33A1";
    console.log(doc.data().size +" " +"SQRT");
    document.getElementById("bedrooms").innerHTML  = doc.data().rooms + " "+ "Bedrooms";
    console.log(doc.data().rooms + " "+ "Bedrooms");
    document.getElementById("bathrooms").innerHTML  = doc.data().bathrooms + " " + "Bathrooms";
    console.log(doc.data().bathrooms + " " + "Bathrooms");
                document.getElementById("ownerName").innerHTML = docc.data().first_name + " " + docc.data().last_name;
                if(docc.data().img != null){
                    document.getElementById("ownerPic").src = docc.data().img;
                    }else{
                    document.getElementById("ownerPic").src = "https://firebasestorage.googleapis.com/v0/b/aqary-project.appspot.com/o/user%2Fcontact-placeholder.jpg?alt=media&token=e4b5a946-b4ab-4315-aced-c9073042d90a";
                    }
            document.getElementById("city").innerHTML = getState(lat , long);
            document.getElementById("address").innerHTML = getNeigh(lat , long);
            var elems = document.querySelector(".deta:last-child");
                        var len = elems.length;
                        console.log("length is" + len);
                        elems.id = doc.id;
                        count++
          }
     }
});
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






