// Código completo

//viajes.js
// Array para guardar los destinos
let destinos = [];

// Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte, numeroPersonas) {
    // TODO: Crear un objeto con los datos del destino
    let nuevoViaje = {
        numeroPersonas: numeroPersonas,
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte, numeroPersonas)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
function calcularCosto(destino, transporte, numeroPersonas) {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    } else if (destino === "Italia") {
        costoBase = 800;
    } else if (destino === "Alemania") {
        costoBase = 900;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Barco") {
        costoBase += 300;
    }
    
    // Descuento por cantidad de personas
    if (numeroPersonas >= 3) {
            costoBase -= 250;
    } 


    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
function mostrarItinerario() {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        let viaje = destinos[i];
        console.log("Número de personas: " + viaje.numeroPersonas);
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}



// app.js

// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión", 4);
    registrarDestino("Londres", "2024-07-01", "Tren", 2);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp(); 
