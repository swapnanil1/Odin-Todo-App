// Basically the entry point of the app "add a task"
// it really does what it says
// when add task btn is clicked it brings up the modal, styles it to make is a createTaskModal
// and on submiting the form inside the modal calls createTask which grabs the entered data form the opened inputModal , creates a taskobject of it , pass tasskObject to localStorage for storing it.
// after that the modal closes. and renders all tasks inside the DB

import createTask from "./createTask.js";
import { getAllTasks, deleteAllTasks, getAllTaskNames } from "./taskStorage.js";
import { getAllProjectNames } from "../projects/localProjectStore.js";
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
  const deleteAllTasksBtn = document.getElementById("delete-all-task-btn");

  addTaskBtn.addEventListener("click", () => {
    console.log("Adding Task");
    TaskModalTitle.textContent = "Create New Task";
    TaskNameInput.value = "";
    TaskDescInput.value = "";
    TaskDueInput.value = "";
    TaskPrioritySelect.value = "low";
    hideSubmitBtn.style.display = "inline-block";
    showUpdateBtn.style.display = "none";
    showDeleteBtn.style.display = "none";

    TaskProjectSelect.innerHTML = "";

    const projectNames = getAllProjectNames();
    projectNames.forEach((project) => {
      const option = document.createElement("option");
      option.value = project;
      option.textContent = project;
      TaskProjectSelect.appendChild(option);
    });
    TaskModal.showModal();
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

  deleteAllTasksBtn.addEventListener("click", () => {
    const userInput = prompt("Deleting All Tasks: Are you sure ? y/N");
    if (userInput === "y") {
      deleteAllTasks();
      renderTasks(getAllTasks());
    } else {
      return;
    }
  });
}
