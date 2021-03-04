
function showDetails(elem) {
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
var parentElem = elem.parentElement;
    if (!parentElem) {
                parentElem = elem.parentNode;
            }
var docid =  parentElem.id;
localStorage.setItem("thisdocid" , docid);
}// else {
elem.parentElement.setAttribute("href", "#myModal");
elem.parentElement.setAttribute("data-toggle", "model");
//}
})
}