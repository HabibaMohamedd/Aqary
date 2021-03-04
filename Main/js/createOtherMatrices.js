
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
         var arrsize = localStorage.getItem("arrsize");
        allIds=localStorage.getItem("ArrayIds");
          console.log("the data type is : "+ typeof allIds );
         var arr= allIds.split(",");
       console.log("the data type after splitis : "+ typeof arr );
       console.log(arr);
    var arraySizes; var arrayPrices; var arrayBeds; var arrayBaths;
    var MatrixSizes; var MatrixPrices; var MatrixBeds; var MatrixBaths;
    var ratingSizes; var ratingPrices; var ratingBeds; var ratingBaths;
    var final;
    final = new Array(arrsize);
    arraySizes= new Array(arrsize); arrayPrices = new Array(arrsize) ; arrayBeds = new Array(arrsize);arrayBaths=new Array(arrsize);
    MatrixSizes= new Array(arrsize); MatrixPrices= new Array(arrsize); MatrixBeds= new Array(arrsize); MatrixBaths= new Array(arrsize);
    ratingSizes= new Array(arrsize); ratingPrices = new Array(arrsize) ; ratingBeds = new Array(arrsize);ratingBaths=new Array(arrsize);
    for (var i = 0; i < arrsize; i++) {
       MatrixSizes[i] = [];   ratingSizes[i] = [];
       MatrixPrices[i] = [];  ratingPrices[i] = [];
       MatrixBeds[i] = [];    ratingBeds[i] = [];
       MatrixBaths[i] = [];   ratingBaths[i] = [];
    }
    console.log("array size : " + arrsize);
    for(var i =0; i < arrsize ; i++) {
    console.log("doc id is : " + arr[i]);
    var docRef = db.collection("apartment").doc(arr[i]);
    docRef.get().then(function(doc) {
        if (doc.exists) {
        console.log(doc.data());
                arraySizes.push(doc.data().size);
                arrayPrices.push(doc.data().price);
                arrayBeds.push(doc.data().rooms);
                arrayBaths.push(doc.data().bathrooms)
                        console.log(arraySizes);
                        console.log(arrayPrices);
                        console.log(arrayBeds);
                        console.log(arrayBaths);
 } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}
function DoAHP() {
console.log("Outside");
arraySizes.shift(); arrayPrices.shift(); arrayBeds.shift(); arrayBaths.shift();
for(var i = 0 ; i < arrsize ; i++) {
for(var x = 0 ; x < arrsize ; x++){
MatrixSizes[i][x] = arraySizes[x]/ arraySizes[i];
MatrixPrices[i][x] = arrayPrices[x]/ arrayPrices[i];
MatrixBeds[i][x] = arrayBeds[x]/ arrayBeds[i];
MatrixBaths[i][x] = arrayBaths[x]/ arrayBaths[i];
}
}
var count=0;
                                        for (var i = 0; i < arrsize; i++) {
                                        console.log("entered loop");
                                                             var sumSizes= 0; var sumPrices= 0; var sumBeds= 0; var sumBaths= 0;
                                                         for (var j = 0; j < arrsize; j++)
                                                                                    {
                                                                                    console.log("next loop");
                                                               sumSizes = +sumSizes + +MatrixSizes[i][j];
                                                               sumPrices = +sumPrices + +MatrixPrices[i][j];
                                                               sumBeds = +sumBeds + +MatrixBeds[i][j];
                                                               sumBaths = +sumBaths + +MatrixBaths[i][j];
                                                               console.log("the sum is : "+ sumSizes+" "+ sumPrices+" " + sumBeds +" "+ sumBaths);
                                                                                    if(j==arrsize-1) {
                                                                                    console.log("the sum is : "+ sumSizes+" "+ sumPrices+" " + sumBeds +" "+ sumBaths);
                                                                                      ratingSizes[count][0] = sumSizes /arrsize;
                                                                                      ratingPrices[count][0] = sumPrices /arrsize;
                                                                                      ratingBeds[count][0] = sumBeds /arrsize;
                                                                                      ratingBaths[count][0] = sumBaths /arrsize;
                                                                                      count++;
                                                                                }
                                                                                }
                                                                                }
                                                                                var array_of_values = new Array(6);
                                                                                var x =0;
                                                                                var y=0;
                                                                                var rating_matrix = new Array(5);
                                                                                var standardized_rating_matrix = new Array(5);
                                                                                var criteria_weights = new Array(4)
                                                                                for (var i = 0; i < rating_matrix.length; i++) {
                                                                                   rating_matrix[i] = [];
                                                                                   standardized_rating_matrix[i] = [];
                                                                                   criteria_weights[i] = [];
                                                                                }
                                                                                                                rating_matrix[0][0]= standardized_rating_matrix[0][0]=0;
                                                                                                                rating_matrix[0][1] = rating_matrix[1][0]=standardized_rating_matrix[0][1]=standardized_rating_matrix[1][0] =criteria_weights[0][0] ="price";
                                                                                                                rating_matrix[0][2] = rating_matrix[2][0]=standardized_rating_matrix[0][2]=standardized_rating_matrix[2][0] =criteria_weights[0][1] ="size";
                                                                                                                rating_matrix[0][3] = rating_matrix[3][0]=standardized_rating_matrix[0][3]=standardized_rating_matrix[3][0] =criteria_weights[0][2] ="bedrooms";
                                                                                                                rating_matrix[0][4] = rating_matrix[4][0]=standardized_rating_matrix[0][4]=standardized_rating_matrix[4][0] =criteria_weights[0][3] ="bathrooms";
                                                                                 var ele = document.getElementsByTagName('input');

                                                                                            for(i = 0; i < ele.length; i++) {

                                                                                                if(ele[i].type="radio") {

                                                                                                    if(ele[i].checked){
                                                                                                        console.log( i +
                                                                                                                ele[i].name + " Value: "
                                                                                                                + ele[i].value );
                                                                                                                array_of_values[x] = ele[i].value;
                                                                                                                x++;
                                                                                               } }
                                                                                            }
                                                                                            for (var j = 0; j < array_of_values.length; j++)
                                                                                                            {
                                                                                                            console.log(array_of_values[j]);
                                                                                                            }
                                                                                            for (var i = 1; i < 5; i++) {
                                                                                                for (j =i; j < 5; j++)
                                                                                                {
                                                                                                                                    if(i==j) {
                                                                                                                                    rating_matrix[i][j] = 1;
                                                                                                                                    }else {
                                                                                                console.log("y is : "+y + "j is : " + j + "i is : " + i);
                                                                                                    rating_matrix[j][i] = array_of_values[y];
                                                                                                    rating_matrix[i][j] = 1/array_of_values[y];
                                                                                                    y++;}
                                                                                                }
                                                                                                                                                 if(y==array_of_values.length+1) {
                                                                                                                                                 break;
                                                                                                                                                 }
                                                                                                }
                                                                                                for (var i = 1; i < 5; i++) {
                                                                                                     var sum= 0;
                                                                                                 for (var j = 1; j < 5; j++)
                                                                                                                            {
                                                                                                      sum = +sum + +rating_matrix[j][i];
                                                                                                                            if(j==4) {
                                                                                                                            console.log("the sum is : "+ sum);
                                                                                                                            for(var x=1;x<5;x++){
                                                                                                                            standardized_rating_matrix[x][i] = rating_matrix[x][i] /sum;
                                                                                                                            }
                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                        }
                                                                                                                        var count=0;
                                                                                                                        for (var i = 1; i < 5; i++) {
                                                                                                                                             var sum= 0;
                                                                                                                                         for (var j = 1; j < 5; j++)
                                                                                                                                                                    {
                                                                                                                                               sum = +sum + +standardized_rating_matrix[i][j];
                                                                                                                                                                    if(j==4) {
                                                                                                                                                                    console.log("the sum is : "+ sum);
                                                                                                                                                                      criteria_weights[1][count] = sum /4;
                                                                                                                                                                      console.log("the critria  is : "+ criteria_weights[1][count]);
                                                                                                                                                                      count++;
                                                                                                                                                                }
                                                                                                                                                                }
                                                                                                                                                                }

for(var s =0 ; s < ratingSizes.length ; s++) {
var sumfi =0;
for(var f =0 ; f < criteria_weights[1].length ; f++){
var mul = 0;
if(f==0) {
console.log("criteria_weights :" + criteria_weights[1][f] + "rating Prices :" + ratingPrices[s][0]);
mul =
sumfi = +sumfi + +(criteria_weights[1][f] * ratingPrices[s][0]);
}
if(f==1){
console.log("criteria_weights :" + criteria_weights[1][f] + "rating Prices :" + ratingSizes[s][0]);
sumfi = +sumfi + +(criteria_weights[1][f] * ratingSizes[s][0]);
}
if(f==2){
console.log("criteria_weights :" + criteria_weights[1][f] + "rating Prices :" + ratingBeds[s][0]);
sumfi = +sumfi + +(criteria_weights[1][f] * ratingBeds[s][0]);
}
if(f==3){
console.log("criteria_weights :" + criteria_weights[1][f] + "rating Prices :" + ratingBaths[s][0]);
sumfi = +sumfi + +(criteria_weights[1][f] * ratingBaths[s][0]);
final[s] = sumfi;
console.log("the val" + final[s]);
}
}
}
  var max = final[0];
    var maxIndex = 0;
    var customId;

    for (var i = 1; i < final.length; i++) {
        if (final[i] > max) {
            maxIndex = i;
            max = final[i];
        }
    }
    var property = arr[maxIndex];
    console.log(property);
     var docRef = db.collection("apartment").doc(property);
        docRef.get().then(function(doc) {
            if (doc.exists) {
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
         var elems = document.querySelector("#fordet");
            elems.id = property;
            customId = property;
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
function showDetails(elem) {
var parentElem = elem.parentElement;
    if (!parentElem) {
                parentElem = elem.parentNode;
            }
var docid =  parentElem.id;
localStorage.setItem("thisdocid" , docid);
     window.open('','_self').close();
         var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Main/Propertydetails.html';
         var myWindow = window.open(url, "");

}