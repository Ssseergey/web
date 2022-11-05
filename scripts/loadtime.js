var startTime = new Date().getTime();
window.onload = pageLoadTime;
function pageLoadTime() {
    var finishTime = new Date().getTime();
    document.getElementById("loadtime").innerHTML = "page loaded in <font color='green'><b>" + (finishTime - startTime) + "</b></font> ms"
}