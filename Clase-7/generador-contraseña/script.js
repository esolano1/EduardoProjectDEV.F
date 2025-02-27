// Función para generar la contraseña
function generarContraseña(longitud, opciones) {
    const caracteres = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_-+=<>?'
    };

    let conjuntoCaracteres = '';
    let contraseña = '';

    // Agregar los caracteres según las opciones seleccionadas
    if (opciones.lowercase) conjuntoCaracteres += caracteres.lowercase;
    if (opciones.uppercase) conjuntoCaracteres += caracteres.uppercase;
    if (opciones.numbers) conjuntoCaracteres += caracteres.numbers;
    if (opciones.symbols) conjuntoCaracteres += caracteres.symbols;

    // Verificar si se ha seleccionado al menos una opción
    if (conjuntoCaracteres === '') {
        alert('¡Selecciona al menos una opción!');
        return '';
    }

    // Generar la contraseña aleatoria
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * conjuntoCaracteres.length);
        contraseña += conjuntoCaracteres[indiceAleatorio];
    }

    return contraseña;
}

// Función para evaluar la fortaleza de la contraseña
function evaluarFortaleza(contraseña) {
    let fuerza = 'débil';
    const longitud = contraseña.length;
    const tieneMayusculas = /[A-Z]/.test(contraseña);
    const tieneMinusculas = /[a-z]/.test(contraseña);
    const tieneNumeros = /\d/.test(contraseña);
    const tieneSimbolos = /[!@#$%^&*(),.?":{}|<>]/.test(contraseña);

    if (longitud >= 12 && tieneMayusculas && tieneMinusculas && tieneNumeros && tieneSimbolos) {
        fuerza = 'fuerte';
    } else if (longitud >= 8 && ((tieneMayusculas && tieneNumeros) || (tieneMinusculas && tieneNumeros))) {
        fuerza = 'pasable';
    }

    return fuerza;
}

// Función que maneja el clic para generar la contraseña
document.getElementById('generate').addEventListener('click', () => {
    const longitud = parseInt(document.getElementById('length').value);
    const opciones = {
        lowercase: document.getElementById('include-lowercase').checked,
        uppercase: document.getElementById('include-uppercase').checked,
        numbers: document.getElementById('include-numbers').checked,
        symbols: document.getElementById('include-symbols').checked
    };

    const contraseña = generarContraseña(longitud, opciones);
    if (contraseña) {
        document.getElementById('password').value = contraseña;
        const fortaleza = evaluarFortaleza(contraseña);
        mostrarFortaleza(fortaleza);
    }
});

// Función para mostrar la fortaleza de la contraseña
function mostrarFortaleza(fortaleza) {
    const strengthText = document.getElementById('strength-text');
    const strengthBar = document.getElementById('strength-bar');
    
    if (fortaleza === 'fuerte') {
        strengthText.textContent = 'Fortaleza de la contraseña: Fuerte';
        strengthBar.className = 'strong';
    } else if (fortaleza === 'pasable') {
        strengthText.textContent = 'Fortaleza de la contraseña: Pasable';
        strengthBar.className = 'medium';
    } else {
        strengthText.textContent = 'Fortaleza de la contraseña: Débil';
        strengthBar.className = 'weak';
    }
}
