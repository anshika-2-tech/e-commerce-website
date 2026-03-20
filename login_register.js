function loginUser() {
  let email = document.querySelector('.email').value;
  let password = document.querySelector(".pass").value;
  let consesntChecked= document.querySelector('.consent').checked;
  
  if(!consesntChecked){
    alert("Please accept the Terms and Conditions");
    return;
  }

  let storedUser = JSON.parse(localStorage.getItem("user"));
  

  if (storedUser) {
    if (email === storedUser.email && password === storedUser.password) {
      
      window.location.href = "dashboard.html";
    } else {
      alert("Wrong Email or Password");
    }
  } else {
    alert("No user found. Please signup.");
  }
}
