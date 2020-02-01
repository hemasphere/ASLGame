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


function handleAnswer(answer) {
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
