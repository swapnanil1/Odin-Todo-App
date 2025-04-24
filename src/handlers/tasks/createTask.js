// createTask.js

const initialTaskName = document.getElementById("task-name-input");
const initialTaskDescription = document.getElementById("task-desc-input");
const initialTaskDueDate = document.getElementById("task-due-input");
const initialTaskPriority = document.getElementById("task-priority-select");
const initialTaskProject = document.getElementById("task-project-select");

import { saveTask } from "./taskStorage.js";

export default function createTask() {
  const newTask = {
    title: initialTaskName.value.trim(),
    description: initialTaskDescription.value.trim(),
    dueDate: initialTaskDueDate.value,
    priority: initialTaskPriority.value,
    project: initialTaskProject.value,
    uuid: self.crypto.randomUUID(),
  };

  saveTask(newTask);
}
