const initialTaskName = document.getElementById("task-name-input");
const initialTaskDescription = document.getElementById("task-desc-input");
const initialTaskDueDate = document.getElementById("task-due-input");
const initialTaskPriority = document.getElementById("task-priority-select");
const initialTaskProject = document.getElementById("task-project-select");
export default function createTask(currentTaskState) {
  const newTask = {
    title: initialTaskName.value,
    description: initialTaskDescription.value,
    dueDate: initialTaskDueDate.value,
    priority: initialTaskPriority.value,
    project: initialTaskProject.value,
    uuid: self.crypto.randomUUID(),
  };
  currentTaskState.push(newTask);
  return currentTaskState;
}
