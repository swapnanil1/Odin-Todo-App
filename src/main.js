import "./styles/style.css";
import addTaskMenu from "./handlers/tasks/addTaskMenu.js";
import renderTasks from "./handlers/tasks/renderTasks.js";
import { getAllTasks } from "./handlers/tasks/taskStorage.js";
import setupModalListeners from "./handlers/tasks/editTask.js";

addTaskMenu();
setupModalListeners();

let allTask = getAllTasks();
renderTasks(allTask);

console.log("Application started.");
