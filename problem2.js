





//BLINKING PICTURE FUNCTION
var x = 1;
var blink = window.setInterval(myCallback,2000);
function myCallback() {
    x++;
    if (x % 2) {
        $("#gallery li:nth-child(2)").show();
    } else {
        $("#gallery li:nth-child(2)").hide();
    }
}

