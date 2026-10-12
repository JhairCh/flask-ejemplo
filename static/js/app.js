document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-contacto");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const respuesta = document.getElementById("respuesta");

            respuesta.textContent =
                "Gracias, " + nombre + ". El formulario funciona como demostración.";

            formulario.reset();
        });
    }
});