function editAprt(elem) {
   var parentElem = elem.parentElement;
       if (!parentElem) {
                   parentElem = elem.parentNode;
               }
   var docid =  parentElem.id;
   console.log("the doc id"+docid);
   localStorage.setItem("docforedit" , docid);
}