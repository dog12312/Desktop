function bootup() {
    document.getElementById("bootupframe").style.display = "block";
}
function bootupdone() {
    document.getElementById("bootupframe").style.display = "none";
}
function showdesktop() {
    document.getElementById("desktop").style.display = "block";
}
function hidedesktop() {
    document.getElementById("desktop").style.display = "none";
}
function error() {
    document.getElementById("errorframe").style.display = "block";
}
function errorclosed() {
    document.getElementById("errorframe").style.display = "none";
}
function sleep() {
    document.getElementById("sleepframe").style.display = "block";
}
function wake() {
    document.getElementById("sleepframe").style.display = "none";
    setTimeout(sleep, 600000);
}
window.onmousemove = wake;
window.onmousedown = wake;
window.onclick = wake;
window.onscroll = wake;
window.onkeypress = wake;
function OpenWBM() {
    document.getElementById("WBMoverlay").style.display = "block";
}

function CloseWBM() {
    document.getElementById("WBMoverlay").style.display = "none";
}

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + ap;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
