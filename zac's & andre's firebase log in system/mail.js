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
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var contact = getElementVal("contact");
  var password = getElementVal("password");
  var copassword = getElementVal("copassword");
  var currTime = 0;

  //enter password == copassword
  saveMessages(name, emailid, contact, password, copassword, currTime);

  //enable alert
  document.querySelector(".alert").style.display = "block";

  //remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //reset the form
  document.getElementById("contactForm").reset();

}

const saveMessages = (name, emailid, contact, password, copassword, currTime) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    contact: contact,
    password: password,
    copassword: copassword,
    currTime : currTime,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
