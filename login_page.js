function login_details(){


var username = "";
var password = "";
username = document.getElementById("id_username").value;
password = document.getElementById("id_password").value;

if(username == "admin" && password == "password"){
    alert("Welcome Admin");
    return true;
}
else{  
    alert("Invalid Login Credentials");
    return false;
}

}