function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var msg = document.getElementById("msg").value;
  var error_msg = document.getElementById("error-msg");
  var text;


  if(name.length <5){
    text="Please enter valid name.";
    error_msg.innerHTML = text;
    error_msg.style.padding="10px";
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text="Please enter valid email address.";
    error_msg.innerHTML = text;
    error_msg.style.padding="10px";
    return false;
  }
  if(isNaN(mobile) || mobile.length != 10){
    text="Please enter valid phone number.";
    error_msg.innerHTML = text;
    error_msg.style.padding="10px";
    return false;
  }
  if(msg.length <= 100){
    text="Please enter more than 100 characters.";
    error_msg.innerHTML = text;
    error_msg.style.padding="10px";
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
