// hook into every modal input
// apply taskInQuestion values on it after as user hit submit on the modal capture the new values
//  run update the Database
// then pass the updated database inside renderTask to redraw ever task.
import createTask from "./createTask";
import renderTasks from "./renderTasks";
import { getAllTasks, saveTask } from "./taskStorage";
export default function editTaskMenu(task) {
  const TaskModal = document.getElementById("task-modal");
  const TaskModalForm = document.getElementById("task-form");
  const TaskModalTitle = document.getElementById("task-modal-title");
  TaskModalTitle.textContent = "Edit Selected Task";
  const TaskDeleteBtn = document.getElementById("task-delete-btn");
  // edit task inputs
  const TaskNameInput = document.getElementById("task-name-input");
  const TaskDescInput = document.getElementById("task-desc-input");
  const TaskDueInput = document.getElementById("task-due-input");
  const TaskPrioritySelect = document.getElementById("task-priority-select");
  const TaskProjectSelect = document.getElementById("task-project-select");
  const TaskIdInput = document.getElementById("task-id-input"); // Hidden input for UUID
  // apply task defaults at first
  TaskNameInput.value = task.title || "";
  TaskDescInput.value = task.description || "";
  TaskDueInput.value = task.dueDate || "";
  TaskPrioritySelect.value = task.priority || "lowp";
  TaskProjectSelect.value = task.project || "";
  TaskIdInput.value = task.uuid;
  // on submit of this task's form
  TaskModalForm.addEventListener("submit", () => {
    const updatedTask = {
      title: TaskNameInput.value.trim(),
      description: TaskDescInput.value.trim(),
      dueDate: TaskDueInput.value,
      priority: TaskPrioritySelect.value,
      project: TaskProjectSelect.value,
      uuid: TaskIdInput.value,
    };
    saveTask(updatedTask);
    TaskModal.close();
    renderTasks(getAllTasks());
  });
}
