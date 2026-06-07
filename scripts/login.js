var employees = {
  "12345":"Jan Kowalski",
  "67890":"Piotr Nowak",
  "00547":"Anna Wiśniewska",
  "26138":"Katarzyna Zielińska",
  "89402":"Marek Lewandowski",
  "31764":"Magdalena Wójcik",
  "55910":"Tomasz Kamiński",
  "42836":"Agnieszka Kaczmarek",
  "10359":"Paweł Piotrowski",
  "67284":"Ewa Jabłońska"
};

function login() {
  var id = document.getElementById("login-input").value;

  if (employees[id] != undefined) {
    alert("Witaj " + employees[id]);
    window.location.href = "dashboard.html";
  }
  else {
    alert("Nie znaleziono takiego pracownika D:")
  }
}

document.getElementById("submit").onclick = login;
