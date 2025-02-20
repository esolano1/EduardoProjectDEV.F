// Ejemplo de objetos

//Via objeto literal
let persona1 = {
nombre: "Juan",
edad: 30,
ocupacion: "Desarrollador"
};

// Or this can also be done as:
//Via constructor Object
let persona2 = new Object();

persona2.nombre = "Juan2";
persona2.edad = 31;
persona2.ocupacion = "Desarrollador2";

//------------------------------------------

//To access to each of the properties of the object, we
//should only type the nameofobject.property
//This is called "Notacion de punto"

console.log(persona1.edad);
console.log(persona2.edad);

//To access to each of the properties of the object, we
//should only type the nameofobject.property
//This is called "Notacion de corchetes"

console.log(persona1["edad"]);
console.log(persona2["edad"]);


//------------------------------------------

//To modify and add a property to an object
persona1.edad = 41; // Modificar -that way or--> persona1["edad"] = 41;
persona1.email = "juan@hotmail.com"; // Agregar -that way or- --> persona1["email"] = "juan@hotmail.com";
persona1["email2"] = "juan2@hotmail.com"; // Agregar

//Let's now to print this new information
console.log(persona1.edad); // or console.log(persona1["edad"]);
console.log(persona1.email); //or console.log(persona["email"]);
console.log(persona1["email2"]);// or console.log(persona1.email2);