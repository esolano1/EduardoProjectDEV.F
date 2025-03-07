let button = document.getElementById("boton"); //Obtenemos el elemento boton
let comments_input = document.getElementById("comentarios"); //Obtenemos el elemento input con id "comentarios"
let name_input = document.getElementById ("nombre"); //Obtenemos el elemento input con id "nombre"
let container1 = document.getElementById("contenedor1"); //Obtenemos el elemento div

let all_comments_inputs = { //Declaramos objetos para guardar cada comentario del usuario
   comments: [] 
};

let all_names_inputs = { //Declaramos objetos para guardar cada nombre del usuario
   names: [] 
};


function agregar_comments (commentsvalue, namesvalue) {
  
   let currentDate = new Date();
   let dateTime = currentDate.toLocaleString();

   let div_element = document.createElement("div");
  /* div_element.innerHTML = comments_input.value;*/
  div_element.innerHTML = `<strong>Comentario publicado el:</strong> ${dateTime} <strong>Por:</strong> ${namesvalue} <br>${commentsvalue} <br>`
  container1.className = "muestracomments"; // Agregamos esta clase para que se le de estilo al div para mostrar los comentarios
  container1.appendChild(div_element);

   let delete_element = document.createElement("button");
   delete_element.innerHTML = "Eliminar mensaje";
   div_element.appendChild(delete_element);

   delete_element.addEventListener("click", function (e) {
    container1.removeChild(div_element);
 

/*
    all_comments_inputs.comments.pop();
    all_names_inputs.names.pop();

    let comments_JSON = JSON.stringify(all_comments_inputs);
    let names_JSON = JSON.stringify(all_names_inputs);

    localStorage.setItem("commentsAll",comments_JSON)
    localStorage.setItem("namesAll",names_JSON);
*/


   }
)

}

//Aqui iniciamos el programa, cuando el usuario da click en el boton
button.addEventListener("click", function (event) {
   
agregar_comments(comments_input.value, name_input.value);

all_comments_inputs.comments.push(comments_input.value);
all_names_inputs.names.push(name_input.value);

let comments_JSON = JSON.stringify(all_comments_inputs);
let names_JSON = JSON.stringify(all_names_inputs);

localStorage.setItem("commentsAll",comments_JSON)
localStorage.setItem("namesAll",names_JSON);

})

if(localStorage.getItem("commentsAll")) {

   let from_comments_JSON = localStorage.getItem("commentsAll"); //Creamos una variable para guardar el JSON almacenado
   let from_names_JSON = localStorage.getItem("namesAll"); //Creamos una variable para guardar el JSON almacenado

   all_comments_inputs = JSON.parse(from_comments_JSON); //Sobreescribimos el objeto global almacenando el JSON ya parseado a objeto
   all_names_inputs = JSON.parse(from_names_JSON); //Sobreescribimos el objeto global almacenando el JSON ya parseado a objeto

   for(let i = 0;i<all_comments_inputs.comments.length;i++) { //Una vez que tenemos uno de los objetos, podemos recorrerlo

      agregar_comments(all_comments_inputs.comments[i], all_names_inputs.names[i]); //Llamamos a la función e ingresamos ambos argumentos

   }

}



