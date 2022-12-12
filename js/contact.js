function validate(){
    var username = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    if ( username == "" && email == ""){
    alert ("Please enter valid details");
    return false;
    }
    }