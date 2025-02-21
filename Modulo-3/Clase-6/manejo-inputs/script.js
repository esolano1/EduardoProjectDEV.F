let botonjs = document.getElementById("boton");
let mensajejs = document.getElementById("mensaje");

let result = document.getElementById("msj");

botonjs.addEventListener('click', () => {

    result.innerHTML = mensajejs.value;

})

