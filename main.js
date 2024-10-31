let btn = document.querySelector("button");
let counter = 0;

function inicializar() {
  añadirstyle();
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    añadirTask();
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
  let divtareas = document.getElementsByClassName("li-container")[0];
  let ul = document.querySelector("ul");
  let input = document.querySelector("input");
  let li = document.createElement("li");
  let p = document.createElement("p");
  let span = document.createElement("span");
  let btntask = document.createElement("button");
  let textTareas = document.getElementsByClassName("empty")[0];
  let divCounter = document.getElementsByClassName("task-count")[0];
  let spancounter = divCounter.childNodes[3];

  span.textContent = input.value;
  btntask.classList.add("btn-delete");
  btntask.textContent = "X";
  btntask.addEventListener("click", () => {
    eleminarTask(li, ul, spancounter, textTareas);
  });
  p.addEventListener("click", () => {
    tacharTarea(span);
  });
  if (input.value) {
    p.appendChild(span);
    li.appendChild(p);
    li.appendChild(btntask);
    ul.appendChild(li);
    divtareas.appendChild(ul);

    input.value = "";
    textTareas.setAttribute("hidden", "");
    spancounter.textContent = ++counter;
  }
}
function eleminarTask(li, ul, spancounter, textTareas) {
  ul.removeChild(li);
  spancounter.textContent = --counter;
  if (counter <= 0) {
    textTareas.removeAttribute("hidden");
  }
}
function tacharTarea(span) {
  span.style.textDecoration == "line-through"
    ? (span.style.textDecoration = "")
    : (span.style.textDecoration = "line-through");
}

document.addEventListener("DOMContentLoaded", inicializar);
