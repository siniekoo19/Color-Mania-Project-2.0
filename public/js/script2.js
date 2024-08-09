let eyeicon = document.getElementById("eyeicon");
let eyeicon2 = document.getElementById("eyeicon2");
let password = document.getElementById("password");
let confirm = document.getElementById("confirm");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.className = "bx bxs-lock-open";
    }
    else{
        password.type = "password";
        eyeicon.className = "bx bxs-lock-alt";
    }
}

eyeicon2.onclick = function(){
    if(confirm.type == "password"){
        confirm.type = "text";
        eyeicon2.className = "bx bxs-lock-open";
    }
    else{
        confirm.type = "password";
        eyeicon2.className = "bx bxs-lock-alt";
    }
}