//sends back to login page if the user presses reset password for now
var resetPassword = document.getElementById("resetPassword");
var cancel = document.getElementById("cancel");
var empty = document.getElementById("empty");
var noMatch = document.getElementById("noMatch");
var pass1 = document.getElementById("1password");
var pass2 = document.getElementById("2password");
pass1.addEventListener("input", clearPass);
pass2.addEventListener("input", clearPass);

resetPassword.onclick = function() {
    //display needs to be set to flex, not block
    //block causes issues with the formatting
    if (pass1.value.length > 0 && pass2.value.length > 0) {
        if (pass1.value == pass2.value) {
            window.location.href = "login.html";
        }
        else {
            noMatch.style.display = "flex";
        }
    }
    else {
        empty.style.display = "flex";
    }
}

cancel.onclick = function() {
    window.location.href = "login.html";
}

function clearPass() {
    noMatch.style.display = "none";
    empty.style.display = "none";
}