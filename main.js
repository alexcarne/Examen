let btn = document.querySelector("button");

function inicializar() {
  añadirstyle();
  btn.addEventListener("click", function (event) {
    event.preventDefault();
  });
}
function añadirstyle() {
  let btnclass = "btn-add";
  let divclasses = [
    "container",
    "search",
    "li-container",
    "empty",
    "task-count",
  ];
  let divs = document.querySelectorAll("div");
  let counter = 0;
  divs.forEach((div) => {
    div.classList.add(divclasses[counter]);
    counter++;
  });
  btn.classList.add(btnclass);
}
function añadirTask() {
  let divtareas = document.getElementsByClassName("li-container");
    let nomtarea = document.querySelector("input").textContent;
    

}

document.addEventListener("DOMContentLoaded", inicializar);
