// Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyChQ3NE43lzSRKZ_5jQ3G6ka21JbEqwHB8",
  //   authDomain: "aslgame-fef72.firebaseapp.com",
  //   databaseURL: "https://aslgame-fef72.firebaseio.com",
  //   projectId: "aslgame-fef72",
  //   storageBucket: "aslgame-fef72.appspot.com",
  //   messagingSenderId: "499620395762",
  //   appId: "1:499620395762:web:e8f63b7ff0b70e7d5b6e6b",
  //   measurementId: "G-18C5PZZSKQ"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // //firebase.analytics();
  //
  // var messagesRef = firebase.database().ref('test');
  //
  // //saving test message to firebase
  //
  // function saveMessage(){
  //   var newMessageRef = messagesRef.push();
  //   newMessageRef.set({
  //     testMessage: "thisIsATestMessage"
  //   });
  // }

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds = seconds - 20;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);

// function stopCount() {
//   clearInterval(countdown);
var score = 0;
//   console.log(score);
// }

//function for Question one
function handleAnswerQ1(answer) {
  if(answer === "a"){
    clearInterval(countdown);
    score += countdown;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
    countdown = 0;
    document.getElementById("countdown").innerHTML = "0";
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('wrongActive');
        $(this).addClass('wrongActive');
      });
    });
  }
}

//function for Question two
function handleAnswerQ2(answer) {
  if(answer === "c"){
    clearInterval(countdown);
    score += countdown;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
    countdown = 0;
    document.getElementById("countdown").innerHTML = "0";
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('wrongActive');
        $(this).addClass('wrongActive');
      });
    });
  }
}

//function for Question three
function handleAnswerQ3(answer) {
  if(answer === "b"){
    clearInterval(countdown);
    score += countdown;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
    countdown = 0;
    document.getElementById("countdown").innerHTML = "0";
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('wrongActive');
        $(this).addClass('wrongActive');
      });
    });
  }
}

//function for Question four
function handleAnswerQ4(answer) {
  if(answer === "b"){
    clearInterval(countdown);
    score += countdown;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
    countdown = 0;
    document.getElementById("countdown").innerHTML = "0";
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('wrongActive');
        $(this).addClass('wrongActive');
      });
    });
  }
}

//function for Question five
function handleAnswerQ5(answer) {
  if(answer === "c"){
    clearInterval(countdown);
    score += countdown;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
    countdown = 0;
    document.getElementById("countdown").innerHTML = "0";
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('wrongActive');
        $(this).addClass('wrongActive');
      });
    });
  }
}
