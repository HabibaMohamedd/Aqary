

    var name=localStorage.getItem("thisdocid");
    console.log(name);

var docRef = db.collection("apartment").doc(name);
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        let other_photos = doc.data().other_images ;
        let features = doc.data().features ;
        let nearByPlaces = doc.data().near_by_places ;
        console.log(other_photos.length);
        console.log(other_photos[0]);
        console.log(features);
        console.log(nearByPlaces);
         document.getElementById("main_image").src =doc.data().main_image;
            document.getElementById("price").innerHTML =doc.data().price +" " +"EGP";
            document.getElementById("size").innerHTML =doc.data().size+" "+ "SQRT";
            document.getElementById("bedrooms").innerHTML =doc.data().rooms + " " + "Bedrooms";
            document.getElementById("bathrooms").innerHTML =doc.data().bathrooms+ " " + "Bathrooms";
            document.getElementById("price1").innerHTML =doc.data().price +" " +"EGP";
            document.getElementById("bathrooms1").innerHTML =doc.data().rooms + " " + "Bedrooms";
            document.getElementById("bedrooms1").innerHTML =doc.data().bathrooms+ " " + "Bathrooms";
            document.getElementById("type").innerHTML =doc.data().type;
            document.getElementById("size1").innerHTML =doc.data().size+" "+ "SQRT";
            var docReff = db.collection("user").doc(doc.data().owner.id);
            docReff.get().then(function(docc) {
                if (docc.exists) {
            document.getElementById("ownerName").innerHTML =docc.data().first_name +" " +docc.data().last_name;
            document.getElementById("ownerNumber").innerHTML ="Number :" +" " +docc.data().phone;
            document.getElementById("ownerEmail").innerHTML ="Email :" +" " +docc.data().email;
            }
            });
            document.getElementById("price").innerHTML =doc.data().price +" " +"EGP";
            document.getElementById("price").innerHTML =doc.data().price +" " +"EGP";
            document.getElementById("description").innerHTML =doc.data().description;
            var aprt_features = document.getElementById('features');
            var aprt_near = document.getElementById('nearby');
            document.getElementById("biggerOne").src = other_photos[0];
            $('#first').data('imgbigurl',other_photos[0]);
            document.getElementById("activeOne").src = other_photos[0];
            for(i =1 ; i< other_photos.length ; i++) {
            let content = document.getElementById('other'+i);
            console.log(content.id);
            console.log(content.firstElementChild.id);
             $('#'+ content.id +'').attr('data-imgbigurl',other_photos[i]);
            document.getElementById(content.firstElementChild.id).src = other_photos[i];
                        console.log(content);
                        console.log(content.firstElementChild);
            }
            for(i =0 ; i< features.length ; i++) {
             aprt_features.innerHTML += " "+features[i]+",";
            }
            for(i =0 ; i< nearByPlaces.length ; i++) {
             aprt_near.innerHTML += " "+nearByPlaces[i]+",";
            }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});




