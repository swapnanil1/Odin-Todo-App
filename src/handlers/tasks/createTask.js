// create Tasks is responible for saving the entered data to the localstorage just that
import { saveTask } from './taskStorage';

export default function createTask() {
  const initialTaskName = document.getElementById('task-name-input');
  const initialTaskDescription = document.getElementById('task-desc-input');
  const initialTaskDueDate = document.getElementById('task-due-input');
  const initialTaskPriority = document.getElementById('task-priority-select');
  const initialTaskProject = document.getElementById('task-project-select');
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
