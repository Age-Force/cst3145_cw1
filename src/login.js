function validate()
{
    var email = document.getElementById("email").value;
    var passowrd = document.getElementById("password").value;
    var email = "email";
    var password = "password";
    if ((email === "email") && (passowrd === passowrd)) {
        window.location = "Subject.html";
        alert ("login successsful");
        return false;
    }
    else {
        alert("Login was unsuccessful, please check your username and password");
    }
}