// Paso 1. Obtener elemento del input del DOM y agregarle un listener
let button = document.getElementById("boton");
let name_input = document.getElementById ("nombre");
let comments_input = document.getElementById("comentarios");
let container1 = document.getElementById("contenedor1");

let all_comments_inputs = { 
   comments: [] 
};

/*
function agregar_comments () {
   
}
*/

button.addEventListener("click", function (event) {
   
   let currentDate = new Date();
   let dateTime = currentDate.toLocaleString();

   let div_element = document.createElement("div");
  /* div_element.innerHTML = comments_input.value;*/
  div_element.innerHTML = `<strong>Comentario publicado el:</strong> ${dateTime} <strong>Por:</strong> ${name_input.value} <br>${comments_input.value} <br>`
  container1.className = "muestracomments"; 
  container1.appendChild(div_element);

   let delete_element = document.createElement("button");
   delete_element.innerHTML = "Eliminar mensaje";
   div_element.appendChild(delete_element);

   delete_element.addEventListener("click", function (e) {
    container1.removeChild(div_element);
   }
)


all_comments_inputs.comments.push(comments_input.value);

let comments_JSON = JSON.stringify(all_comments_inputs);

localStorage.setItem("commentsAll",comments_JSON)

})


/*
if(localStorage.getItem("commentsAll")) {

   let comments_JSON = localStorage.getItem("commentsAll");
   commentsAll = JSON.parse(comments_JSON);

   for(let i = 0;i<all_comments_inputs.comments.length;i++) {


   }

}
   */