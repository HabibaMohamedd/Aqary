function deleteApt(elem) {
var parentElem = elem.parentElement;
    if (!parentElem) {
                parentElem = elem.parentNode;
            }
            alert ("The id of the parent element: " + parentElem.id);
var docid =  parentElem.id;
db.collection("apartment").doc(docid).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}