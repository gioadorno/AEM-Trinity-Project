//loads the main stats page if the user presses cancel
const cancelSign = document.getElementById("cancelSign");
cancelSign.addEventListener("click", signCancel);

function signCancel() {
    window.location.href = "login.html";
}

//loads the main stats page for now if the presses the submit button
const submitSign = document.getElementById("submitSign");
submitSign.addEventListener("click", signSubmit);

function signSubmit() {
    window.location.href = "login.html";
}