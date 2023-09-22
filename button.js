$(document).ready(function () {
    // Ocultar el botón al principio
    $("#btnVolverArriba").hide();

    // Mostrar u ocultar el botón al desplazarse
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#btnVolverArriba").fadeIn();
        } else {
            $("#btnVolverArriba").fadeOut();
        }
    });

    // Volver a la parte superior de la página al hacer clic en el botón
    $("#btnVolverArriba").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});