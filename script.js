var masculino = true;

var nombre = document.querySelectorAll("datos-personales") [0];

var ocupacion = document.querySelectorAll("datos-personales") [1];

var tarjeta = document.querySelector("perfil-card");

tarjeta.addEventListener ("cliclk", function) {

    if (masculino) {

        nombre.textContent = "Oscar Patricio Guerra Cisneros";
        ocupacion.textCotent = "Estudiante (Ella)";
        alert("Cambio a femenino");

    }

}
