function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var red = Math.floor(s * 4.33898);
    var green = Math.floor(h * 11.13043);
    var blue = Math.floor(m * 4.33898);
    if (m % 2 == 1) // count back down
        red = 255 - red;
    if (h % 2 == 1) // count back down
        blue = 255 - blue;
    var color = "rgba(" + red + "," + green + "," + blue + ",1)";
    m = formatTime(m);
    s = formatTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('clockFrame').style.backgroundColor = color;
    var t = setTimeout(startTime, 500);
}
function formatTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}