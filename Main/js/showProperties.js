
  var state ;
  var neigh;
var iff=localStorage.getItem("if");
console.log(iff);

  var pin = L.icon({
         customId: "",
      iconUrl: 'js/pin.png',
      iconSize:     [35, 40], // size of the icon
  });
var today = new Date();
if(iff == 0){
db.collection('apartment').get().then(function(querySnapshot){
   size = querySnapshot.size // will return the collection size
   console.log(size);
   var count = 1;
   console.log("before items");
    querySnapshot.forEach(function(doc) {
    console.log(doc.id);
    console.log(doc.data());
    console.log(doc.data().start_date);
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
    var marker = L.marker([lat,long], {customId: doc.id , icon: pin}).addTo(mymap).on('click', onClick);
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
     // create popup contents
        var customPopup = "<img src= \"" + doc.data().main_image + "\" width='350px' height='150px'/><br/>"
                            +    "Type: \"" + doc.data().type + "\" "
                            +    "&emsp;For \"" + doc.data().price + "\"EGP <br/> "
                            +    "<i class='fa fa-arrows'> \"" + doc.data().size + "\"&emsp;</i> "
                            +    "<i class='fa fa-bed'> \"" + doc.data().rooms + "\"Bedrooms</i></br> "
                            +    "<i class='fa fa-bath'> \"" + doc.data().bathrooms + "\"Bathrooms</i> "
        ;

        // specify popup options
        var customOptions =
            {
            'maxWidth': '500',
            'className' : 'custom'
            }
                marker.bindPopup(customPopup,customOptions);
                        marker.on('mouseover', function (e) {
                            this.openPopup();
                        });
                        marker.on('mouseout', function (e) {
                            this.closePopup();
                        });
        document.getElementById("city").innerHTML = getState(lat , long);
        document.getElementById("address").innerHTML = getNeigh(lat , long);
    var elems = document.querySelector(".property-pic:last-child");
    var len = elems.length;
    console.log("length is" + len);
    elems.id = doc.id;
    //console.log("get document id " +  lastelement.id);
    if(count < size) {
     $( ".single-property-item:first" ).clone().appendTo(".property-list");
     console.log("Added new single properity");
              count++;

    console.log("before");
    }
        console.log("end");
}
});
console.log("outside");
});

  //Declare Variables off Search properties

  var _Typee;
  const Bedroom = document.getElementById("Bedroom");
  const Bathroom  = document.getElementById("Bathroom");



  var arrf = [];
  var arrn=[]

  const Price = document.getElementById("priceRange");
  const Size = document.getElementById("roomsizeRange");


  function Rent(){
      _Typee= "Rent"
      console.log(_Typee)
  }

  function Sale() {
      _Typee = "Buy"
      console.log(_Typee)
  }


  function addvalues7() {
      var checkBox = document.getElementById("eight");
      if (checkBox.checked == true) {
          arrf.push(document.getElementById('eight').value);
          for (i = 0; i < arrf.length; i++) {
              console.log(arrf[i]);
          }
      } else {
          arrf.pop();
      }
  }

  function addvalues6() {
      var checkBox = document.getElementById("seven");
      if (checkBox.checked == true) {
          arrf.push(document.getElementById('seven').value);
          for (i = 0; i < arrf.length; i++) {
              console.log(arrf[i]);
          }
      } else {
          arrf.pop();
      }
  }

  function addvalues5() {
      var checkBox = document.getElementById("six");
      if (checkBox.checked == true) {
          arrf.push(document.getElementById('six').value);
          for (i = 0; i < arrf.length; i++) {
              console.log(arrf[i]);
          }
      } else {
          arrf.pop();
      }
  }

  function addvalues4() {
      var checkBox = document.getElementById("five");
      if (checkBox.checked == true) {
          arrf.push(document.getElementById('five').value);
          for (i = 0; i < arrf.length; i++) {
              console.log(arrf[i]);
          }
      } else {
          arrf.pop();
      }
  }

  function addvalues3() {
      var checkBox = document.getElementById("four");
      if (checkBox.checked == true) {
          arr1.push(document.getElementById('four').value);
          for (i = 0; i < arr1.length; i++) {
              console.log(arr1[i]);
          }
      } else {
          arr1.pop();
      }
  }




  function addvalues2() {
      var checkBox = document.getElementById("three");
      if (checkBox.checked == true) {
          arrn.push(document.getElementById('three').value);
          for (i = 0; i < arrn.length; i++) {
              console.log(arrn[i]);
          }
      } else {
          arrn.pop();
      }
  }

  function addvalues1() {
      var checkBox = document.getElementById("two");
      if (checkBox.checked == true) {
          arrn.push(document.getElementById('two').value);
          for (i = 0; i < arrn.length; i++) {
              console.log(arrn[i]);
          }
      } else {
          arrn.pop();
      }
  }

  function addvalues() {
      var checkBox1 = document.getElementById("one");
      if (checkBox1.checked == true) {
          arrn.push(document.getElementById('one').value);
          for (i = 0; i < arrn.length; i++) {
              console.log(arrn[i]);
          }
      } else {
          arrn.pop();
      }
  }


  function Search() {
  $('.single-property-item').slice(1).remove();

        const _Bedroom= Bedroom.value;
         console.log(_Bedroom);


         const _Bathroom = Bathroom.value;
         console.log(_Bathroom);

         let _Price= Price.value.split('[').join('');
         _Price= _Price.split(']').join('');
         _Price= _Price.split('Egp').join('');
         console.log(_Price);
         const _price1=_Price.split('-')[0];
         const _price2=_Price.split('-')[1];

         console.log(_price1);
         console.log(_price2);

         let _Size= Size.value.split('[').join('');
         _Size = _Size.split(']').join('');
         _Size = _Size.split('sqft').join('');
         console.log(_Size);
         console.log(typeof _Size);
         const _size1=_Size.split('-')[0];
         const _size2=_Size.split('-')[1];

         console.log(_size1);
         console.log(_size2);



         console.log(arrf);

         console.log(arrn);

         console.log(_Typee);

         console.log("Nice work till now it's all done ");


         let query = db.collection('apartment')
               if (_Typee!==''){
               query=query.where('type', '==', _Typee );
               }
               if (_Bedroom!==''){
             query=query.where('rooms', '==', Number(_Bedroom) );
               }
               if (_Bathroom!==''){
             query=query.where('bathrooms', '==', Number(_Bathroom) );
                }
              if (arrf.length > 0){
             query=query.where('features', '==', arrf);
                }
             if (arrn.length > 0){
             query=query.where('near_by_places', '==', arrn );
               }

         let observer = query.onSnapshot(querySnapshot => {
             console.log("it;s okay ");
           size = querySnapshot.size // will return the collection size
             console.log(size);
             var count = 1;
             console.log("before items");

          querySnapshot.docs.forEach(doc =>{
              if (doc.data().size > Number(_size1) && doc.data().size < Number(_size2) && doc.data().price > Number(_price1) && doc.data().price < Number(_price2)){
    console.log(doc.id);
    console.log(doc.data());
    console.log(doc.data().start_date);
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
    console.log(doc.id + "is ignored")
    return;
    }else {
    var lat = doc.data().location.F;
    var long = doc.data().location.V;
    var marker = L.marker([lat,long], {customId: doc.id , icon: pin}).addTo(mymap).on('click', onClick);
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
     // create popup contents
        var customPopup = "<img src= \"" + doc.data().main_image + "\" width='350px' height='150px'/><br/>"
                            +    "Type: \"" + doc.data().type + "\" "
                            +    "&emsp;For \"" + doc.data().price + "\"EGP <br/> "
                            +    "<i class='fa fa-arrows'> \"" + doc.data().size + "\"SQRT&emsp;</i> "
                            +    "<i class='fa fa-bed'> \"" + doc.data().rooms + "\"Bedrooms</i></br> "
                            +    "<i class='fa fa-bath'> \"" + doc.data().bathrooms + "\"Bathrooms</i> "
        ;

        // specify popup options
        var customOptions =
            {
            'maxWidth': '500',
            'className' : 'custom'
            }
                marker.bindPopup(customPopup,customOptions);
                        marker.on('mouseover', function (e) {
                            this.openPopup();
                        });
                        marker.on('mouseout', function (e) {
                            this.closePopup();
                        });
        document.getElementById("city").innerHTML = getState(lat , long);
        document.getElementById("address").innerHTML = getNeigh(lat , long);
    var elems = document.querySelector(".property-pic:last-child");
    var len = elems.length;
    console.log("length is" + len);
    elems.id = doc.id;
    //console.log("get document id " +  lastelement.id);
    if(count < size) {
     $( ".single-property-item:first" ).clone().appendTo(".property-list");
     console.log("Added new single properity");
              count++;

    console.log("before");
    }
        console.log("end");
              }}else{
                  return;
              }

          })
          console.log(`Received query snapshot of size ${querySnapshot.size}`);
          // ...
      }, err => {
          console.log(`Encountered error: ${err}`);
      });
  }
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

function onClick(e) {
var customId = this.options.customId;
var docid =  customId;
localStorage.setItem("thisdocid" , docid);
         window.open('','_self').close();
         var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Main/Propertydetails.html';
         var myWindow = window.open(url, "");
}
