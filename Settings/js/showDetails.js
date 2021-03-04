
function showDetails(elem) {
var parentElem = elem.parentElement;
    if (!parentElem) {
                parentElem = elem.parentNode;
            }
var docid =  parentElem.id;
localStorage.setItem("thisdocid" , docid);

}