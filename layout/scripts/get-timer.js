var countDownDate = new Date("Jul 6, 2021 16:37:52").getTime();
var text=document.getElementById("timer-text")
var myfunc = setInterval(function() {
    var now = new Date().getTime();
var timeleft = countDownDate - now;
    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
if (timeleft < 0) {
text.innerHTML="Workshop has started"
}
else{
    text.innerHTML=days+":"+hours+":"+minutes+":"+seconds
}
    }, 1000)
    