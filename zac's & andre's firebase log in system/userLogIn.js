const firebaseConfig = {
    apiKey: "AIzaSyADIvtlPlZpn7HkjldBGk1hYplTDNMq85w",
    authDomain: "orbital-milestone1-e78a4.firebaseapp.com",
    databaseURL: "https://orbital-milestone1-e78a4-default-rtdb.firebaseio.com",
    projectId: "orbital-milestone1-e78a4",
    storageBucket: "orbital-milestone1-e78a4.appspot.com",
    messagingSenderId: "642665998173",
    appId: "1:642665998173:web:53dd2a41134383b9356ab4"
  };
  
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var database = firebase.database();
var contactFormDB = database.ref("contactForm");


document.getElementById("logInForm").addEventListener("submit", submitForm1);

function submitForm1(e) {
  e.preventDefault();

  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  var matched = false;

  contactFormDB.once("value", function(snapshot) {
    snapshot.forEach(function(element){
        var email = element.val()['emailid']
        var password = element.val()['password']
        var name = element['ref_']['path']['pieces_'][1]

        console.log(email);
        console.log(password);
        if (email == userEmail && password == userPassword) {
            alert('successful login');
            matched = true;
            
            var now = new Date();
            var time = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();

            var updates = {
                currTime : time
            }
            database.ref("contactForm/" + name).update(updates);
        }
    })
  if (!matched) {
    alert('login failed');
  }
  })
  
  //reset the form
  document.getElementById("logInForm").reset();

}



    





