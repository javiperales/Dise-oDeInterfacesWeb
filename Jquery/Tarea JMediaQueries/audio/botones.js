$(document).ready(function () {

    //$("#mostrarOcultarAudio").hide();
    console.log("documento cargado");
    botones();
    audioEscondido(); //oculto los elementos para poder interactuar con ellos

    asignarEfectoAlVideo()
    asignarEfectoAlAudio()
    asignarEfectoAlVideoDeYouTube()
    slideSociales()
    plegarDesplegarMenuIzquierdo()
});

function plegarDesplegarMenuIzquierdo(){
    $(".desplegar").on('click',function(){
       if($(this).parent().children("a").is(":visible")){
           console.log("esta escondido")
           $($(this).parent()).children("a").hide()
       } else {
           $($(this).parent()).children("a").show()
           console.log("no esta escondido")
           
       }
    })
}
function slideSociales() { //uso de efectos ANIMATE
    $("#efectoRedes").click(
        function (e) {
            //console.log($(this).html())
            if ($(this).html() == "Animar Redes Sociales") {
                $(".social").animate({
                   
                }, "fast", function () {
                    $(this).hide(2000);
                });
                e.target.innerHTML = "mostrar redes"
            } else {
                e.target.innerHTML = "Animar Redes Sociales"
                console.log("Estamos en el else")
                $(".social").animate({
                    
                }, 3000, function () {
                    $(this).show(2000);
                });
            }
        })
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
