var countDownDate = new Date("Nov 13, 2021 17:00:05").getTime();
var text = document.getElementById("timer-text")
var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    if (hours < 10)
        hours = "0" + hours;
    if (days < 10)
        days = "0" + days;
    if (minutes < 10)
        minutes = "0" + minutes;

    if (seconds < 10)
        seconds = "0" + seconds;
    if (timeleft < 0) {
        text.innerHTML = "Workshop not started"
    } else {
        text.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds
    }
}, 1000)
