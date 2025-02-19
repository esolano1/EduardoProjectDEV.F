//Example using this and having like a path

let persona = {
    nombre: 'Juan',
    saludar: function() {
      console.log('¡Hola, ' + this.nombre + '!');
    }
  };
  
let otraPersona = {
    nombre: 'Ana',
    saludar: persona.saludar  // Asignamos el método `saludar` de `persona` a `otraPersona`
  };
  
  otraPersona.saludar();  // Esto imprimirá: ¡Hola, Ana!
  





//Example of a calculator

const calculadora = {
    sumar: function(a, b) {
      return a + b;
    },
    restar: function(a, b) {
      return a - b;
    }
  };
  
  console.log(calculadora.sumar(5, 3)); // 8
  //console.log(calculadora["sumar"](5, 3));  // 8


  //Another example of the calculator but using functions
  //outside of the properties

  function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  const calculadora2 = {
    sumar: sumar,  // Asignando una función nombrada
    restar: restar // Asignando una función nombrada
  };
  
  console.log(calculadora2.sumar(5, 3));  // Imprime: 8
  
