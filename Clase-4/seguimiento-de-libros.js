
let librosLeidos = [];
let i = 0;


function agregarLibro(titulo) { // titulo now will have "Libro leido 1/2/3/and 4" for each call

librosLeidos.push(titulo);// Here, we add the data saved in titulo into the array (push means at the end)

};


agregarLibro('Libro leido 1'); //Here, I call for the function and save what's placed here into the empty array
agregarLibro('Libro leido 2'); //Here, I call for the function and save what's placed here into the array (at the end of last data)
agregarLibro('Libro leido 3'); //Here, I call for the function and save what's placed here into the array (at the end of last data)
agregarLibro('Libro leido 4'); //Here, I call for the function and save what's placed here into the array (at the end of last data)


function mostrarLibrosLeidos() {

while (i < librosLeidos.length) { //while i is < than the lenght of the array, this will ejecute
console.log('Libro leido:'+ librosLeidos[i]); //Here, I show you every data that is located in each space
i++;
};

};

mostrarLibrosLeidos();