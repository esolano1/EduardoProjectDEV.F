// Arrow function with NO parameters and NO {}
let variable1 = () => console.log("Hola1");

variable1();

// Arrow function with NO parameters and YES {}
let variable2 = () => {
    console.log("Hola2");
}

variable2();

//----------------------------------------

// Arrow function with YES parameters and NO {}
let variable3 = (a, b) => console.log(a*b);

variable3(4, 5);


// Arrow function with YES parameters and YES {}
let variable4 = (a, b) => {
    console.log(a*b);
}
variable4(4, 5);

//---------------------------------------------------

// Arrow function with 1 parameter circled in () with NO {}
let variable5 = (a) => console.log(a);

variable5(10);

// Arrow function with 1 parameter NOT circled in () with NO {}
let variable6 = a => console.log(a);

variable6(20);