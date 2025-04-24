import editTaskMenu from "./editTaskMenu";
import {
  saveTaskToLocalStorage,
  getTaskFromLocalStorage,
  getAllTasks,
  getTask,
} from "./taskStorage";

export default function resetTasksEvents() {
  const taskModal = document.getElementById("task-modal");
  const domTaskList = document.querySelectorAll("main section ul li");

  const handleClickTask = (event) => {
    const domTask = event.currentTarget; // Get the clicked DOM element
    const uuid = domTask.dataset.uuid; // only identifier make sure it is present
    taskModal.showModal();
    editTaskMenu(uuid);
    console.log(`Task clicked: ${event.target}`);
  };

  // First, remove existing click listeners
  domTaskList.forEach((domTask) => {
    domTask.removeEventListener("click", handleClickTask);
  });

  // Then, add the click listener for each task
  domTaskList.forEach((domTask) => {
    domTask.addEventListener("click", handleClickTask);
  });

  const showDeleteBtn = document.getElementById("task-delete-btn");

  // Make the delete button show when any task is clicked
  domTaskList.forEach((DOMs_li) => {
    DOMs_li.addEventListener("click", () => {
      console.log(DOMs_li); // Find the task's uuid and match it with the database's uuid
      showDeleteBtn.style.display = "inline-block";
    });
  });
}
