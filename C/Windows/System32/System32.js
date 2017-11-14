function bootup() {
    document.getElementById("bootupframe").style.display = "block";
}
function bootupdone() {
    document.getElementById("bootupframe").style.display = "none";
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
