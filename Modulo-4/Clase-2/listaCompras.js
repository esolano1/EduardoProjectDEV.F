let listaDeCompras = [];

function agregarProducto(producto) {

    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
    }
};

function eliminarProducto(producto) {

    // Elimino el producto específico
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
    }

};

function mostrarLista() {

    for (i = 0; i < listaDeCompras.length ; i++) {
   
    console.log("Producto número" + (i + 1) + ": " + listaDeCompras[i]);

    }

};

agregarProducto("Leche");
agregarProducto("Tortillas");
agregarProducto("Tortillas");
agregarProducto("Pan");
agregarProducto("Pan");
agregarProducto("Jamón");
agregarProducto("Queso");

eliminarProducto("Jamón");

mostrarLista();




// Otra forma utilizando un set

/*
let listaDeCompras2 = new Set();

function agregarProducto(producto) {
listaDeCompras2.add(producto);
};

function eliminarProducto(producto) {

listaDeCompras2.delete(producto);
};

function mostrarLista() {

listaDeCompras2.forEach(producto => {

    console.log(producto);
})

};

agregarProducto("Leche");
agregarProducto("Tortillas");
agregarProducto("Tortillas");
agregarProducto("Pan");
agregarProducto("Pan");
agregarProducto("Jamón");
agregarProducto("Queso");

eliminarProducto("Jamón");

mostrarLista();

*/




