$(document).ready(function () {

    //$("#mostrarOcultarAudio").hide();
    console.log("documento cargado");
    botones();
    audioEscondido(); //oculto los elementos para poder interactuar con ellos
    ocultarAudio(); //uso el hide()
    mostrarAudio(); //uso el show()
    verVideo();
    ocultarVideo();
});

function verVideo() {
    $(".verVideo").click(function () {
        $("#videoInformativo").fadeIn()
        $(".verVideo").hide()
        $(".ocultarVideo").show()
        
    })
}

function ocultarVideo() {
    $(".ocultarVideo").click(function () {
        $("#videoInformativo").fadeOut()
        $(".verVideo").show()
        $(".ocultarVideo").hide()
    })

}

function ocultarAudio() {
    $(".ocultarAudio").click(function () {
        $("#mostrarOcultarAudio").hide()
        $(".mostrarAudio").show()
        $(".ocultarAudio").hide()
    });
}

function mostrarAudio() {
    $(".mostrarAudio").click(function () {
        $("#mostrarOcultarAudio").show()
        $(".ocultarAudio").show()
        $(".mostrarAudio").hide()
    });
}

function audioEscondido() {
    $("#mostrarOcultarAudio").hide()
    $(".ocultarAudio").hide()
    $("#videoInformativo").hide()
    $(".ocultarVideo").hide()
    $("#ocultarVideoYouTube").hide()

}

function botones() {
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
