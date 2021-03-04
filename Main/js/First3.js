
  var state ;
  var neigh;
  var ownerName;
  var ownerPic;
  var imageUrl;

var today = new Date();
db.collection('apartment').orderBy("price").limit(3).get().then(function(querySnapshot){
   size = querySnapshot.size // will return the collection size
   let count = 1;
   console.log("before items");
    querySnapshot.forEach(function(doc) {
    console.log(doc.data());
        if(count==1){
           $('#saleeeMain').owlCarousel('destroy');
           $('#saleeeMain').owlCarousel({touchDrag: true, mouseDrag: true,autoplay: true,items:1,smartSpeed: 1200});
    var lat = doc.data().location.F;
    var long = doc.data().location.V;
    console.log(doc.data());
    imageUrl = doc.data().main_image;
    $("#fisrtMain").css("background-image", "url(" + imageUrl + ")");
    console.log(doc.data().main_image);
    document.getElementById("mainImage2").src= imageUrl;
    document.getElementById("priceMain").innerHTML  = doc.data().price +" "+ "EGP";
    console.log(doc.data().price +" "+ "EGP");
    document.getElementById("sizeMain").innerHTML  = doc.data().size +" " +"\u33A1";
    console.log(doc.data().size +" " +"SQRT");
    document.getElementById("bedroomsMain").innerHTML  = doc.data().rooms + " "+ "Bedrooms";
    console.log(doc.data().rooms + " "+ "Bedrooms");
    document.getElementById("bathroomsMain").innerHTML  = doc.data().bathrooms + " " + "Bathrooms";
    console.log(doc.data().bathrooms + " " + "Bathrooms");
            document.getElementById("cityMain").innerHTML = getState(lat , long) + " : "+ getNeigh(lat , long);
            var elems = document.querySelector(".detaMain:last-child");
                        var len = elems.length;
                        console.log("length is" + len);
                        elems.id = doc.id;
                        count++;
                        }
    else {
            console.log("clone");
        $( "#feature-itemMain:first" ).clone().appendTo("#saleeeMain");
         console.log("Added new single properity");
        console.log("before");
            console.log("end");
           console.log("outside");
                           $('#saleeeMain').owlCarousel('destroy');
                               $('#saleeeMain').owlCarousel({touchDrag: true, mouseDrag: true,autoplay: true,items:1,smartSpeed: 1200});
                               $('#Mainn').owlCarousel('destroy');
                                $('#Mainn').owlCarousel({touchDrag: true, mouseDrag: true,autoplay: true,items:1,smartSpeed: 1200});
                                 $("#saleeeMain").owlCarousel({
                                       items: 1,
                                       dots: false,
                                       autoplay: true,
                                       margin: 0,
                                       loop: true,
                                       smartSpeed: 1200,
                                       nav: true,
                                       navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
                                   });
                        var lat = doc.data().location.F;
                        var long = doc.data().location.V;
                        console.log(doc.data());
                        imageUrl = doc.data().main_image;
                        $("#fisrtMain").css("background-image", "url(" + imageUrl + ")");
                        console.log(doc.data().main_image);
                         if(count==2) {
                         document.getElementById("mainImage3").src= imageUrl;
                         }
                         if(count==3) {
                         document.getElementById("mainImage1").src= imageUrl;
                         }
                        document.getElementById("priceMain").innerHTML  = doc.data().price +" "+ "EGP";
                        console.log(doc.data().price +" "+ "EGP");
                        document.getElementById("sizeMain").innerHTML  = doc.data().size +" " +"\u33A1";
                        console.log(doc.data().size +" " +"SQRT");
                        document.getElementById("bedroomsMain").innerHTML  = doc.data().rooms + " "+ "Bedrooms";
                        console.log(doc.data().rooms + " "+ "Bedrooms");
                        document.getElementById("bathroomsMain").innerHTML  = doc.data().bathrooms + " " + "Bathrooms";
                        console.log(doc.data().bathrooms + " " + "Bathrooms");
                                document.getElementById("cityMain").innerHTML = getState(lat , long)+ " : "+ getNeigh(lat , long);
                                var elems = document.querySelector(".detaMain:last-child");
                                            var len = elems.length;
                                            console.log("length is" + len);
                                            elems.id = doc.id;
                                            count++;
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