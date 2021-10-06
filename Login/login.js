//loads the main stats page if the user presses cancel
const cancelLog = document.getElementById("cancelLog");
cancelLog.addEventListener("click", logCancel);

function logCancel() {
    window.location.href = "/map2.html";
}

//loads the main stats page for now if the presses the submit button
const submitLog = document.getElementById("submitLog");
submitLog.addEventListener("click", logSubmit);

function logSubmit() {
    window.location.href = "stats.html";
}