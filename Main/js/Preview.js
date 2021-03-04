
var name=localStorage.getItem("PropID");
console.log(name);
var arr= name.split(",");
    if(arr.length != 0){
    const myNode = document.getElementById("property");
      myNode.innerHTML = '';
}
for(var x =0; x < arr.length ; x++){
var docRef = db.collection("apartment").doc(arr[x]);
docRef.get().then(function(doc) {
    var count = 1;
    if (doc.exists) {
        console.log(doc.id);
        console.log(doc.data());
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
        var elems = document.querySelector(".property-pic:last-child");
        var len = elems.length;
        console.log("length is" + len);
        elems.id = doc.id;
        //console.log("get document id " +  lastelement.id);
        if(count < arr.length) {
            $( ".single-property-item:first" ).clone().appendTo(".property-list");
            console.log("Added new single properity");
            count++;

            console.log("before");
        }
        console.log("end");


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }




    }).catch(function(error) {
    console.log("Error getting document:", error);
});

}

        function getState (lat , long) {
            console.log("entered state" + lat + " " + long);
            $.ajaxSetup({async: false});
            $.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ lat +'&lon='+ long +'', function(data){
                state= data.address.state;
                if(state==null) {
                    state= data.address.suburb;
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
                }
            });
            console.log("The neigh 2 is :"+neigh);
            return neigh;
        }



