import "./styles/style.css";
import addTaskMenu from "./handlers/tasks/addTaskMenu.js";
import renderTasks from "./handlers/tasks/renderTasks.js";
import {getAllTasks} from "./handlers/tasks/taskStorage.js";
import setupModalListeners from "./handlers/tasks/editTask.js";
import addProjectMenu from "./handlers/projects/addProjectMenu";
import {renderAllProjects} from "./handlers/projects/renderProjects";
import handleProjectEvents from "./handlers/projects/handleProjectEvents";

addTaskMenu();
setupModalListeners();
addProjectMenu()
renderAllProjects()
handleProjectEvents()

let allTask = getAllTasks();
renderTasks(allTask);

console.log("Application started.");
