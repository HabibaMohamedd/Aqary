

// Variables

const ContractType = document.getElementById("type");
const Bedroom = document.getElementById("Bedroom");
const Bathroom  = document.getElementById("Bathroom");



var arrf = [];
var arrn=[];

const Price = document.getElementById("priceRange");
const Size = document.getElementById("roomsizeRange");

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


    const _Contract= ContractType.value;
    console.log(_Contract);

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


    console.log(arrf);

    console.log(arrn);

var count =0;
var x =0;

    let query = db.collection('apartment')
    if (_Contract!==''){
        query=query.where('type', '==', _Contract );
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
        var array = new Array(querySnapshot.size);

        querySnapshot.docs.forEach(doc =>{
            console.log("I'm in foreach")

            if (doc.data().size > Number(_size1) && doc.data().size < Number(_size2) && doc.data().price > Number(_price1) && doc.data().price < Number(_price2)){

                console.log('here is data');
                  console.log(doc.data());

                  count++;
                     array[count] = doc.id;

           console.log(array);
           x =1;
           localStorage.setItem("PropID", array);
           localStorage.setItem("if" , x);
           console.log(localStorage);


           window.open('','_self').close();
           var url = 'Propertiess.html';
           var myWindow = window.open(url, "");


            }else{
                return;
            }

        })

        console.log(`Received query snapshot of size ${querySnapshot.size}`);
        // ...
    }, err => {
        console.log(`Encountered error: ${err}`);
    });







}