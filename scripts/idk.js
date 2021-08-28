
var clicks = 0;

function click() {
    clicks += 1;
    var text = document.getElementById("0");
    text.innerHTML = string(clicks);
}