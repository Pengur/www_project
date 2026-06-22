function dashboard() {
  window.location.href = "dashboard.html";
}

function sendReport() {
  console.log(document.getElementById("report-content").textContent);
  alert("wyslano zgloszenie");
}
