function sendMessage() {
             var senderEmail = document.getElementById('email').value;
         var link = "mailto:"+ "habeebamohammeed8@gmail.com"
                     + "?" +senderEmail
                     + "&subject=" + escape(document.getElementById('subject').value)
                     + "&body=" + escape(document.getElementById('message').value)
            ;

            window.location.href = link;
}