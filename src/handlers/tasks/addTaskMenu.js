import createTask from "./createTask.js";
import taskStorage from "./taskStorage.js";
import renderTasks from "./renderTasks.js";
export default function addTaskMenu() {
  // works with the task modal and form
  const TaskModal = document.getElementById("task-modal");
  const addTaskBtn = document.getElementById("add-task-btn");
  const TaskModalForm = document.getElementById("task-form");
  addTaskBtn.addEventListener("click", () => {
    console.log("Adding Task");
    TaskModal.showModal();
  });
  const closeTaskModalBtn = document.getElementById("task-cancel-btn");
  closeTaskModalBtn.addEventListener("click", () => {
    TaskModal.close();
    console.log("Halt Task Creation");
  });
  TaskModalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskStorage("w", createTask(taskStorage()));
    // Updates the stored task state by adding a new task.
    // - taskStorage() retrieves the current saved state (initially [])
    // - createTask(...) adds a new task to that state
    // - taskStorage(w,...) saves the updated state
    console.log(taskStorage());
    TaskModal.close();
    renderTasks(taskStorage());
    console.log("Created Task");
  });
}
