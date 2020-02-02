
/*
1)
*/

function framework(data) {
  var user = firebase.auth().currentUser;

  if (user) {
    console.log("User is signed in.");
  } else {
    console.log("User is not signed in.");
  }

  //  Add a new document in collection "users"
   db.collection("accounts").doc(user.uid).set(data).then(function() {
      console.log("Document successfully written!");
   })
   .catch(function(error) {
      console.error("Error writing document: ", error);
  });

}

var score = parseInt(localStorage.getItem("score") || "0");
framework(score);
console.log(score);
//   console.log(score);
// }

if(document.getElementById("score")) {
  document.getElementById("score").textContent = score;
}
else {
  var seconds = parseInt(document.getElementById("countdown").textContent);
  var countdown = setInterval(function() {
      seconds = seconds - 20;
      document.getElementById("countdown").textContent = seconds;
      if (seconds <= 0) clearInterval(countdown);
  }, 1000);
}

//function for Question one
function handleAnswerQ1(answer) {
  if(answer === "a"){
    clearInterval(countdown);
    score += seconds;
    localStorage.setItem("score", ''+ score);
    seconds = 0;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
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
    score += seconds;
    localStorage.setItem("score", ''+score);
    seconds = 0;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "0";
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('wrongAc   tive');
        $(this).addClass('wrongActive');
      });
    });
  }
}

//function for Question three
function handleAnswerQ3(answer) {
  if(answer === "b"){
    clearInterval(countdown);
    score += seconds;
    localStorage.setItem("score", ''+score);
    seconds = 0;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
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
    score += seconds;
    localStorage.setItem("score", ''+score);
    seconds = 0;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
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
    score += seconds;
    localStorage.setItem("score", ''+score);
    seconds = 0;
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
  else{
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "0";
    $(document).ready(function () {
    	$('button').on('click', function() {
        $('button').removeClass('wrongActive');
        $(this).addClass('wrongActive');
      });
    });
  }
}
