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

function changeCamera(btn) {
  var srcDiv = document.getElementById("cam-view");
  var player = document.getElementById("video-player");
  if (btn.id == "cam1")
    srcDiv.src = "media/placeholder1.mp4";
  if (btn.id == "cam2")
    srcDiv.src = "media/placeholder2.mp4";
  if (btn.id == "cam3")
    srcDiv.src = "media/placeholder3.mp4";

  player.load();
  player.play();
}

function endGame() {
  window.location.href = "index.html";
}

function reportProblem() {
  window.location.href = "report.html";
}

let muted = true;
function toggleMute() {
  var audio;
  var btn = document.getElementById("toggle-mic");
  if (muted == true) {
    audio = new Audio("media/micActive.mp3");
    audio.play();
    btn.textContent = "Wyłącz mikrofon";
    muted = false;
  }
  else {
    audio = new Audio("media/micMuted.mp3");
    audio.play();
    btn.textContent = "Włącz mikrofon";
    muted = true;
  }
}
