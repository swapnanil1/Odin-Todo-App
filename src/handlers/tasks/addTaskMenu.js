import createTask from "./createTask.js";
import { getAllTasks } from "./taskStorage.js";
import renderTasks from "./renderTasks.js";

export default function addTaskMenu() {
  const TaskModal = document.getElementById("task-modal");
  const addTaskBtn = document.getElementById("add-task-btn");
  const TaskModalForm = document.getElementById("task-form");
  const TaskNameInput = document.getElementById("task-name-input");
  const TaskDescInput = document.getElementById("task-desc-input");
  const TaskDueInput = document.getElementById("task-due-input");
  const TaskPrioritySelect = document.getElementById("task-priority-select");
  const TaskProjectSelect = document.getElementById("task-project-select");
  const hideSubmitBtn = document.getElementById("task-submit-btn");
  const showUpdateBtn = document.getElementById("task-update-btn");
  const TaskModalTitle = document.getElementById("task-modal-title");
  const showDeleteBtn = document.getElementById("task-delete-btn");

  addTaskBtn.addEventListener("click", () => {
    console.log("Adding Task");
    TaskModal.showModal();
    TaskModalTitle.textContent = "Create New Task";
    TaskNameInput.value = "";
    TaskDescInput.value = "";
    TaskDueInput.value = "";
    TaskPrioritySelect.value = "lowp";
    TaskProjectSelect.value = "Default";
    hideSubmitBtn.style.display = "inline-block";
    showUpdateBtn.style.display = "none";
    showDeleteBtn.style.display = "none";
  });

  const closeTaskModalBtn = document.getElementById("task-cancel-btn");
  closeTaskModalBtn.addEventListener("click", () => {
    TaskModal.close();
    console.log("Halt Task Creation/Edit");
  });

  TaskModalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createTask();
    TaskModal.close();
    let currentTasks = getAllTasks();
    renderTasks(currentTasks);
    console.log(currentTasks);
  });
}
