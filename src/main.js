import "./styles/style.css";
import initializeCreateTaskModal from "./handlers/tasks/newTaskFormHandler.js";
import initializeCreateTaskProject from "./handlers/projects/newProjectForm.js";
import { initializeProjects, initializeTasks } from "./handlers/dataStore.js";
import { renderUI } from "./handlers/uiRenderer.js";

initializeProjects();
initializeTasks();

initializeCreateTaskModal();
initializeCreateTaskProject();

renderUI();

console.log("Application started and initial UI rendered.");
