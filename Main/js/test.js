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
// Initaaaialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
let storageRef = storage.ref();



// Initialize html elements
    // const Sale = document.getElementById("st-rent");
   //const Rent = document.getElementById("st-buy");
    const Bedrooms = document.getElementById("Bedrooms");
    const Bathrooms = document.getElementById("Bathrooms");
    const City = document.getElementById("City");
    const Nearbyplaces = document.getElementById(" Nearbyplaces");
    const Features = document.getElementById("Features");
    const Size = document.getElementById("Size");
    const Price  = document.getElementById("Price");
    const Description = document.getElementById("Description");
    const From  = document.getElementById("Date");
    const To = document.getElementById("Date1");
    const Mainphoto  = document.getElementById("select");
    const Otherphoto  = document.getElementById("files");
    const City1 = document.getElementById("City1");
    const Street  = document.getElementById("Street");
    const BuildingNumber  = document.getElementById("Building");
    const AppartementNumber = document.getElementById("Appartement");


    const UploadButoon = document.getElementById("Upload");


    let file={}

    function chooseFile(e) {
     file= e.target.files[0];
    }

       // get values from inputs
    function  Collectvalues() {

        const _Bedrooms = Bedrooms.value;
        const _Bathrooms = Bathrooms.value;
        const _City = City.value;
        const _Nearbypalces = Nearbyplaces.value;
        const _Features= Features.value;
        const _Size = Size.value;
        const _Price= Price.value;
        const _Description = Description.value;
        const _From= From.value;
        const _To = To.value;
        const _Mainphto = Mainphoto.value;
        const _Otherphoto= Otherphoto.value;
        const _City1= City1.value;
        const _Street= Street.value;
        const _BuildingNumbere= BuildingNumber.value;
        const _AppartementNumber= AppartementNumber.value;
     }

       //if clicked on Rent Button
      function  Rent() {
        Collectvalues();
     }

     //if clicked on Sale Button
      function  Sale() {
          Collectvalues();
      }

    //if clicked on  upload button
    function  Upload(){
       if (Rent()){
           db.collection("Rent").add({
               Bedrooms : _Bedrooms,
               Bathrooms : _Bathrooms,
               City : _City,
               NearbyPlaces: _Nearbypalces,
               Features: _Features,
               Size : _Size,
               Price : _Price,
               Description : _Deeskription,
               From : _From,
               To : _TO,
               Mainphoto : _Mainphoto,
               Otherphoto : _Otherphoto,
               City1 : _City1,
               Street : _Street,
               BuildingNumber : _BuildingNumber,
               AppartementNumber : _AppartementNumber


               })

           let storageRef =  firebase.storage().ref('appartment/Rent'+ auth.user.uid +'/Rent.jpg').put(file).then(function () {
               console.log('Success')
           }).catch(error =>{console.log(error.message)})

       }else {
           db.collection("Sale").add({
               Bedrooms : _Bedrooms,
               Bathrooms : _Bathrooms,
               City : _City,
               NearbyPlaces: _Nearbypalces,
               Features: _Features,
               Size : _Size,
               Price : _Price,
               Description : _Deeskription,
               From : _From,
               To : _TO,
               Mainphoto : _Mainphoto,
               Otherphoto : _Otherphoto,
               City1 : _City1,
               Street : _Street,
               BuildingNumber : _BuildingNumber,
               AppartementNumber : _AppartementNumber



               })

           let storageRef =  firebase.storage().ref('appartment/Sale'+ auth.user.uid +'/Sale.jpg').put(file).then(function () {
               console.log('Success')
           }).catch(error =>{console.log(error.message)

           })
       }

    }






