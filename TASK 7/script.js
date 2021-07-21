var dest = new Date("july 21, 2021 20:26:00 ").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var diff = dest - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(days);
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(seconds);
    document.getElementById("timer").innerHTML = days + "d, " + hours + "hrs: " + minutes + "m:" + seconds + "s"

    if (diff < 0) {
        clearInterval(x);

        alert("Time Out!!");
    }

}, 1000);