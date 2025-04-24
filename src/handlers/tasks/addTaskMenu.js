import createTask from "./createTask.js";
import { getAllTasks } from "./taskStorage.js";
import renderTasks from "./renderTasks.js";
export default function addTaskMenu() {
  // works with the task modal and form
  const TaskModal = document.getElementById("task-modal");
  const addTaskBtn = document.getElementById("add-task-btn");
  const TaskModalForm = document.getElementById("task-form");
  addTaskBtn.addEventListener("click", () => {
    renderTasks(getAllTasks());
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
    createTask();
    TaskModal.close();
    renderTasks(getAllTasks());
    console.log(getAllTasks());
  });
}
