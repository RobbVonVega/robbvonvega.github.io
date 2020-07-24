function updateBackground() {
    var 
      hr = (new Date()).getHours(),
      $bg = $('#wallpaper');    
    if (hr >= 19 || hr < 7 ) {
        $bg.addClass("night");
    } else if (hr >= 12) {
        $bg.addClass("noon");
    } else if (hr >= 7) {
        $bg.addClass("morning");
    } 
}

setInterval(updateBackground, 1000 * 60 * 60);
updateBackground();




var i = 0;
var txt = '</p>'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("blink").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(function(){
    typeWriter()
}, 750);
