var firebaseConfig = {
  apiKey: "AIzaSyChQ3NE43lzSRKZ_5jQ3G6ka21JbEqwHB8",
  authDomain: "aslgame-fef72.firebaseapp.com",
  databaseURL: "https://aslgame-fef72.firebaseio.com",
  projectId: "aslgame-fef72",
  storageBucket: "aslgame-fef72.appspot.com",
  messagingSenderId: "499620395762",
  appId: "1:499620395762:web:e8f63b7ff0b70e7d5b6e6b",
  measurementId: "G-18C5PZZSKQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

var messagesRef = firebase.database().ref('test2');

//saving test message to firebase

function saveMessage(){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    testMessage: "thisIsATestMessage"
  });
}

function signup(){

  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password").value;
  var userFirst = document.getElementById("first_name").value;
  var userLast = document.getElementById("last_name").value;
  var userName = document.getElementById("username").value;
  var databaseRef = firebase.database().ref(userName);
  var userInfoRef = databaseRef.push();
  userInfoRef.set({
    first_name: userFirst,
    last_name: userLast
  });

  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage, errorCode);

}).then(function(user){

  // const userUid = userName.uid;
  // const account = {
  //     useruid: userUid,
  //     calendarEvents: []
  //   }
  //   firebase.firestore().collection('accounts').doc(userUid).set(account);
  // })

  window.location = "q1.html"});

}

function login(){

  var userName = document.getElementById("username").value;
  var userEmail = document.getElementById("email_field").value;
  var userPassword = document.getElementById("password").value;
  var databaseRef = firebase.database().ref(userName);
  var userInfoRef = databaseRef.push();

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage, errorCode);
  }).then(function(){window.location = "q1.html"});

}
