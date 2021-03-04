function logout() {
firebase.auth().signOut().then(function() {
  console.log("loged out");
   window.open('','_self').close();
           var url = 'C:/Users/ProSoft/eclipse-workspace/AqaryProject/Log/Signin.html';
           var myWindow = window.open(url, "");
}).catch(function(error) {
  console.error(error);
});
}