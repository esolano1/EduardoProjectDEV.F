/*
Imagina que tienes un programa que clasifica las
frutas según su tipo y cuenta cuántas hay de cada tipo.
*/
let frutas = ['guayaba', 'uva', 'pera', 'platano', 'uva', 'guayaba', 'uva'];   

let guayaba = 0;
let uva = 0;
let pera = 0;
let platano = 0;


//Con ciclo for
console.log('Numero de frutas con ciclo for');
for (let i = 0; i < frutas.length ; i++) {

    if (frutas[i] === 'guayaba') {
        guayaba += 1;
    }

    else if (frutas[i] === 'uva') {
        uva += 1;
    }

    else if (frutas[i] === 'pera') {
        pera += 1;
    }

    else if (frutas[i] === 'platano') {
        platano += 1;
    }
}

console.log('guayaba:', guayaba);
console.log('uva:', uva);
console.log('pera:', pera);
console.log('platano:', platano);


// Otro método

i=0;
guayaba = 0;
uva = 0;
pera = 0;
platano = 0;
console.log('Numero de frutas con ciclo while');
// Con ciclo while    
    while (i < frutas.length) {

        if (frutas[i] === 'guayaba') {
            guayaba += 1;
        }
    
        else if (frutas[i] === 'uva') {
            uva += 1;
        }
    
        else if (frutas[i] === 'pera') {
            pera += 1;
        }
    
        else if (frutas[i] === 'platano') {
            platano += 1;
        }

i++;

}

console.log('guayaba:', guayaba);
console.log('uva:', uva);
console.log('pera:', pera);
console.log('platano:', platano);
