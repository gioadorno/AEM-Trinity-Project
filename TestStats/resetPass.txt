//sends back to login page if the user presses reset password for now
var resetPassword = document.getElementById("resetPassword");
var cancel = document.getElementById("cancel");
var recoverEmail = document.getElementById("recoverEmail");
var recovery = document.getElementById("recovery");
recoverEmail.addEventListener("input", clearAlert);

function clearAlert() {
    recoverEmail.style.marginBottom = "10%";
    recoverEmail.style.marginLeft = "20%";
    recovery.style.display = "none";
    cancel.value = "Cancel";
}

resetPassword.onclick = function() {
    if (recoverEmail.value.length > 0) {
        recoverEmail.value = "";
        recoverEmail.style.marginBottom = "5%";
        recoverEmail.style.marginLeft = "16%";
        recovery.style.display = "block";
        cancel.value = "Back";
    }
}

cancel.onclick = function() {
    window.location.href = "login.html";
}