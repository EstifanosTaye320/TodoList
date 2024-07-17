import { TodoList } from "./modules/todoList.js";
import { listItem } from "./elements/listItem.js";

const listArea = document.querySelector("#list");
const todoList = new TodoList();

todoList.todos.forEach((ele, id) => {
  listArea.innerHTML += listItem(id + 1, ele.title, ele.message);
});

const blackShip = document.querySelectorAll(".theblackship");
const toggle = document.querySelectorAll(".toggle");

todoList.todos.forEach((ele, id) => {
  toggle[id].addEventListener("click", function () {
    blackShip[id].style.display =
      blackShip[id].style.display === "flex" ? "none" : "flex";
    todoList.todos[id].done();
  });

  blackShip[id].style.display = ele.isDone ? "flex" : "none";
});

// toggle.forEach((ele, id) => {
//   ele.addEventListener("click", function () {
//     blackShip[id].style.display =
//       blackShip[id].style.display == "flex" ? "none" : "flex";
//     todoList.todos[id].done();
//     console.log(todoList.todos[id].isDone);
//   });
// });

// toggle[id].addEventListener("click", function () {
//   blackShip[id].style.display =
//     blackShip[id].style.display == "none" ? "flex" : "none";
// });

// console.log(toggle);
