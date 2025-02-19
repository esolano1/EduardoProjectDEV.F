//Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

const libro1 = {
titulo: "Primer Libro",
autor: "Autor numero 1",
anio: 2020,
estado: "disponible"
};

const libro2 = {
    titulo: "Segundo Libro",
    autor: "Autor numero 2",
    anio: 2021,
    estado: "disponible"
};

const libro3 = {
    titulo: "Tercer Libro",
    autor: "Autor numero 3",
    anio: 2022,
    estado: "prestado"
};



let informacion1 = Object.keys(libro1) // ["titulo", "autor", "anio", "estado"]

for(let i = 0; i < informacion1.length; i++) {
    console.log(libro1[informacion1[i]]) // persona["nombre"]
}


let informacion2 = Object.keys(libro1) // ["titulo", "autor", "anio", "estado"]

for(let i = 0; i < informacion2.length; i++) {
    console.log(libro2[informacion2[i]]) // persona["nombre"]
}


let informacion3 = Object.keys(libro3) // ["titulo", "autor", "anio", "estado"]

for(let i = 0; i < informacion3.length; i++) {
    console.log(libro3[informacion3[i]]) // persona["nombre"]
}