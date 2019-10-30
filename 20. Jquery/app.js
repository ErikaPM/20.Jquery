$(document).ready(function () {
    const titulos = $("#titulo");
    const container = $("#container");
    const link = $("#link");
    const input = $("#input");
    const boton = $("#boton");


    container.append("<p>soy un párrafo</p>");
    link.attr("href", "https://google.com").attr("target", "_blank")
    // input.val("mi nombre es Erika");
    boton.click(function () {
        titulos.css("color", "blue").css("background", "lightgreen")


    })
});


//prepend -- se inserta antes del elemento anterior