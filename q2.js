var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds = seconds - 20;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);

var score = 0;

function stopCount() {
  clearInterval(seconds);
}
