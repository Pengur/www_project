function timer() {
  var data = new Date();
  var h = data.getHours();
  var min = data.getMinutes();
  var now = ""+h+
  ((min<10)?":0":":")+min;
  document.getElementById("timer").innerHTML = now;
  setTimeout(timer, 1000);
}

window.onload = function() {
  timer();
};