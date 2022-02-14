const addToDoButton = document.querySelector(".btn");
const toDoContainer = document.querySelector(".todo-list");
const inputField = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

addToDoButton.addEventListener("click", function () {
  const list = document.createElement("div");
  list.classList.add("todo-item");
  toDoContainer.appendChild(list);
  list.innerText = input.value;
  input.value = "";
});

list.addEventListener("click", () => {
  list.remove();
});

list.addEventListener("click", () => {
  list.style.textDecoration("line-through");
});
