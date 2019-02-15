window.onload = function () {
    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var more = document.getElementById("more");
    var less = document.getElementById("less");
    var x = document.getElementById("myAudio");

    play.addEventListener("click", function (e) {
        x.play();
    });

    pause.addEventListener("click", function (e) {
        x.pause();
    });
    
    more.addEventListener("click", function (e) {
        x.volume += 0.1;
    });
    less.addEventListener("click", function (e) {
        x.volume -= 0.1;
    });
}
