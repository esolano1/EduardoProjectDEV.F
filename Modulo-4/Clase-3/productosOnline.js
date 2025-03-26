//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Productos menos de 100 pesos
const menosDeCien = productos.filter(producto => producto.precio < 100);
console.log(menosDeCien);

//Ordenados alfabéticamente
productos.sort((a, b) => {
    if (a.nombre < b.nombre) return -1; // Si a.nombre es menor, 'a' va primero
    if (a.nombre > b.nombre) return 1;  // Si a.nombre es mayor, 'b' va primero
    return 0; // Si son iguales, no se cambia el orden
  });

console.log(productos);

//Nuevo arreglo únicamente para los nombres de cada producto
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

//Al menos un producto arriba de 100
const masDeCien = productos.filter(producto => producto.precio > 100);
console.log(masDeCien);