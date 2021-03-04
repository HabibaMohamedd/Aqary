var docRef = db.collection("apartment").doc(name);
function sendmail() {
docRef.get().then(function(doc) {
 var docReff = db.collection("user").doc(doc.data().owner.id);
            docReff.get().then(function(docc) {
                if (docc.exists) {
            var ownerEmail =docc.data().email;
            var senderEmail = document.getElementById('email').value;
        var link = "mailto:"+ ownerEmail
                    + "?" +senderEmail
                    + "&subject=" + escape(document.getElementById('subject').value)
                    + "&body=" + escape(document.getElementById('message').value)
           ;

           window.location.href = link;
}});
});
}
