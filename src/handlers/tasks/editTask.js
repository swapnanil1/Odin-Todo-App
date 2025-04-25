import renderTasks from "./renderTasks.js";
import { getAllTasks, saveTask, deleteTask, getTask } from "./taskStorage.js";

export function populateEditForm(uuid) {
  const TaskModalForm = document.getElementById("task-form");
  const TaskNameInput = document.getElementById("task-name-input");
  const TaskDescInput = document.getElementById("task-desc-input");
  const TaskDueInput = document.getElementById("task-due-input");
  const TaskPrioritySelect = document.getElementById("task-priority-select");
  const TaskProjectSelect = document.getElementById("task-project-select");

  const task = getTask(uuid);

  if (task) {
    TaskModalForm.dataset.editingUuid = uuid;
    TaskNameInput.value = task.title;
    TaskDescInput.value = task.description;
    TaskDueInput.value = task.dueDate;
    TaskPrioritySelect.value = task.priority;
    TaskProjectSelect.value = task.project;
  } else {
    console.log(`Task with UUID ${uuid} not found for editing.`);
    TaskModalForm.removeAttribute("data-editing-uuid");
    TaskNameInput.value = "";
    TaskDescInput.value = "";
    TaskDueInput.value = "";
    TaskPrioritySelect.value = "lowp";
    TaskProjectSelect.value = "Default";
  }
}

export default function setupModalListeners() {
  const TaskModal = document.getElementById("task-modal");
  const TaskModalForm = document.getElementById("task-form");
  const showUpdateBtn = document.getElementById("task-update-btn");
  const TaskDeleteBtn = document.getElementById("task-delete-btn");

  const handleUpdateTask = () => {
    const uuidToUpdate = TaskModalForm.dataset.editingUuid;
    const TaskNameInput = document.getElementById("task-name-input");
    const TaskDescInput = document.getElementById("task-desc-input");
    const TaskDueInput = document.getElementById("task-due-input");
    const TaskPrioritySelect = document.getElementById("task-priority-select");
    const TaskProjectSelect = document.getElementById("task-project-select");

    const updatedTask = {
      title: TaskNameInput.value.trim(),
      description: TaskDescInput.value.trim(),
      dueDate: TaskDueInput.value,
      priority: TaskPrioritySelect.value,
      project: TaskProjectSelect.value,
      uuid: uuidToUpdate,
    };

    deleteTask(uuidToUpdate);
    saveTask(updatedTask);

    TaskModalForm.removeAttribute("data-editing-uuid");
    TaskModal.close();
    let currentTasks = getAllTasks();
    renderTasks(currentTasks);
  };

  const handleDeleteTask = () => {
    const uuidToDelete = TaskModalForm.dataset.editingUuid;

    deleteTask(uuidToDelete);

    TaskModalForm.removeAttribute("data-editing-uuid");
    TaskModal.close();
    let currentTasks = getAllTasks();
    renderTasks(currentTasks);
  };

  showUpdateBtn.removeEventListener("click", handleUpdateTask);
  TaskDeleteBtn.removeEventListener("click", handleDeleteTask);

  showUpdateBtn.addEventListener("click", handleUpdateTask);
  TaskDeleteBtn.addEventListener("click", handleDeleteTask);

  console.log("Modal update/delete listeners attached.");
}
