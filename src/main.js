import "./styles/style.css";
import addTaskMenu from "./handlers/tasks/addTaskMenu.js";
import renderTasks from "./handlers/tasks/renderTasks.js";
import {getAllTasks} from "./handlers/tasks/taskStorage.js";
import setupModalListeners from "./handlers/tasks/editTask.js";
import addProjectMenu from "./handlers/projects/addProjectMenu";

addTaskMenu();
setupModalListeners();
addProjectMenu()

let allTask = getAllTasks();
renderTasks(allTask);

console.log("Application started.");
