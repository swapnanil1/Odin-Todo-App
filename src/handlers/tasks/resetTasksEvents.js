import { populateEditForm } from "./editTask.js";

const handleClickTask = (event) => {
  const taskModal = document.getElementById("task-modal");
  const TaskModalTitle = document.getElementById("task-modal-title");
  const showDeleteBtn = document.getElementById("task-delete-btn");
  const hideSubmitBtn = document.getElementById("task-submit-btn");
  const showUpdateBtn = document.getElementById("task-update-btn");

  const domTask = event.currentTarget;
  const uuid = domTask.dataset.uuid;

  console.log(`Task clicked (UUID: ${uuid}):`, domTask);

  taskModal.showModal();
  TaskModalTitle.textContent = "Edit Selected Task";
  hideSubmitBtn.style.display = "none";
  showUpdateBtn.style.display = "inline-block";
  showDeleteBtn.style.display = "inline-block";

  populateEditForm(uuid);
};

export default function resetTasksEvents() {
  const domTaskList = document.querySelectorAll("main section ul li");

  domTaskList.forEach((domTask) => {
    domTask.removeEventListener("click", handleClickTask);
    domTask.addEventListener("click", handleClickTask);
  });

  console.log(`Reset event listeners for ${domTaskList.length} tasks.`);
}
