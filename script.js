let olho = document.getElementById("olho");
let password = document.getElementById("password");


olho.onclick = function() {
  if(password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
