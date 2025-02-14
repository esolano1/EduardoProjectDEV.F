
let librosLeidos = [];
let i = 0;
let ii = 0;

function agregarLibro(titulo) {

librosLeidos.push(titulo);

};


agregarLibro('Libro leido 1');
agregarLibro('Libro leido 2');
agregarLibro('Libro leido 3');
agregarLibro('Libro leido 4');


function mostrarLibrosLeidos() {

while (i < librosLeidos.length) {
console.log('Libro leido:'+ librosLeidos[i]);
i++;
};

};

mostrarLibrosLeidos();