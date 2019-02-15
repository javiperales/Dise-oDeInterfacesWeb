$(document).ready(function () {

    //$("#mostrarOcultarAudio").hide();
    console.log("documento cargado");
    botones();
    audioEscondido(); //oculto los elementos para poder interactuar con ellos

    asignarEfectoAlVideo()
    asignarEfectoAlAudio()
    asignarEfectoAlVideoDeYouTube()
    slideImagen()
});

function slideImagen() {//uso de efectos ANIMATE
    var img = $("a").children("img");
    for (i of img) {
        console.log(i)
        $(i).mouseenter(
            function () {
                $(this).animate({
                    width: '+=50px',
                    height: '+=50px'
                }, "fast", 'swing')

            }
        )
        $(i).mouseleave(
            function () {

                $(this).animate({
                    width: '-=50px',
                    height: '-=50px'
                }, "fast", 'linear');
            }
        )
    }
}

function asignarEfectoAlVideo() { //uso de efectos FADE
    $(".verVideo").click(
        function (e) {
            if ($(this).html() == "ver video") {
                $("#videoInformativo").fadeIn()
                e.target.innerHTML = "ocultar video"
            } else {
                e.target.innerHTML = "ver video"
                $("#videoInformativo").fadeOut()
            }

        })
}

function asignarEfectoAlAudio() { //uso de efectos hide and show
    $(".mostrarAudio").click(
        function (e) {
            if ($(this).html() == "Mostrar Audio") {
                $("#mostrarOcultarAudio").show()
                e.target.innerHTML = "Ocultar Video"
            } else {
                e.target.innerHTML = "Mostrar Audio"
                $("#mostrarOcultarAudio").hide()
            }

        })
}

function asignarEfectoAlVideoDeYouTube() { //uso de efectos slide
    $("#verVideoYouTube").click(
        function (e) {
            if ($(this).html() == "Ver video de youtube") {
                $(".videoYouTube").slideDown("slow")
                e.target.innerHTML = "Ocultar video de youtube"
            } else {
                e.target.innerHTML = "Ver video de youtube"
                $(".videoYouTube").slideUp("slow")
            }

        })
}

function audioEscondido() {
    $("#mostrarOcultarAudio").hide()
    $(".ocultarAudio").hide()
    $("#videoInformativo").hide()
    $(".ocultarVideo").hide()
    $(".videoYouTube").hide()

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
