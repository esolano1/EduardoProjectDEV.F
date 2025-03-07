/*let */ objeto = {
    propiedad1: "valor1",
    propiedad2: {
        propiedad3: "valor3"
    }
}

let propiedad2 = objeto.propiedad2 // { propiedad3: "valor3" }
propiedad2.propiedad3 // "valor3"

console.log(propiedad2);