import "./styles/style.css";
// import "./styles/modal.css";
// import "./styles/variables.css";
// import "./styles/reset.css";
import initializeCreateTaskModal from "./handlers/tasks/newTaskFormHandler.js";
import initializeCreateTaskProject from "./handlers/projects/newProjectForm.js";
initializeCreateTaskModal();
initializeCreateTaskProject();
console.log("Application started.");
