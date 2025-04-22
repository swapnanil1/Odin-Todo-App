import "./styles/style.css";
// import "./styles/modal.css";
// import "./styles/variables.css";
// import "./styles/reset.css";
import initializeCreateTaskModal from "./handlers/newTaskFormHandler.js";
import initializeCreateTaskProject from "./handlers/newProjectForm.js";
initializeCreateTaskModal();
initializeCreateTaskProject();
console.log("Application started.");
