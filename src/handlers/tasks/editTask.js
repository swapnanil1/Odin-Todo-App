// So editTask.js is called as a task is clicked for editing
// And when you click on a task, resetTaskEvents will open the edit modal.
// Then, populateEditForm (editTask.js) is involved: it saves the task ID,
// retrieves its information, and populates the modal form for you.
// Key step: It also sticks that task ID right onto the form itself (as data-editing-uuid).

// When you click UPDATE:
// The button code pulls that ID *from the form,
// retrieves your changes from the inputs, tells your storage to update the task
// (typically by overlaying the new data on top of the old, with the same ID), and then updates the on-screen list.

// When you click DELETE: Same thing - the code of the button captures the ID *from the form,
// informs storage to delete the task of that ID, and then reloads the list, hiding the task.

import renderTasks from './renderTasks';
import { getAllTasks, saveTask, deleteTask, getTask } from './taskStorage';
import { getAllProjectNames } from '../projects/localProjectStore';
import renderUpcomingTasks from '../upcoming-tasks/renderUpcomingTasks';

export function populateEditForm(uuid) {
  const TaskModalForm = document.getElementById('task-form');
  const TaskNameInput = document.getElementById('task-name-input');
  const TaskDescInput = document.getElementById('task-desc-input');
  const TaskDueInput = document.getElementById('task-due-input');
  const TaskPrioritySelect = document.getElementById('task-priority-select');
  const TaskProjectSelect = document.getElementById('task-project-select');

  const task = getTask(uuid);

  if (task) {
    TaskProjectSelect.innerHTML = '';
    TaskModalForm.dataset.editingUuid = uuid;
    TaskNameInput.value = task.title;
    TaskDescInput.value = task.description;
    TaskDueInput.value = task.dueDate;
    TaskPrioritySelect.value = task.priority;
    const projectNames = getAllProjectNames();
    projectNames.forEach((project) => {
      const option = document.createElement('option');
      option.value = project;
      option.textContent = project;
      TaskProjectSelect.appendChild(option);
    });
    TaskProjectSelect.value = task.project;
  } else {
    console.log(`Task with UUID ${uuid} not found for editing.`);
    TaskModalForm.removeAttribute('data-editing-uuid');
    TaskNameInput.value = '';
    TaskDescInput.value = '';
    TaskDueInput.value = '';
    TaskPrioritySelect.value = 'lowp';
    TaskProjectSelect.value = 'Default';
  }
}

export function setupModalListeners() {
  const TaskModal = document.getElementById('task-modal');
  const TaskModalForm = document.getElementById('task-form');
  const showUpdateBtn = document.getElementById('task-update-btn');
  const TaskDeleteBtn = document.getElementById('task-delete-btn');

  const handleUpdateTask = () => {
    const uuidToUpdate = TaskModalForm.dataset.editingUuid;
    const TaskNameInput = document.getElementById('task-name-input');
    const TaskDescInput = document.getElementById('task-desc-input');
    const TaskDueInput = document.getElementById('task-due-input');
    const TaskPrioritySelect = document.getElementById('task-priority-select');
    const TaskProjectSelect = document.getElementById('task-project-select');

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

    TaskModalForm.removeAttribute('data-editing-uuid');
    TaskModal.close();
    const currentTasks = getAllTasks();
    renderTasks(currentTasks);
    renderUpcomingTasks(getAllTasks());
  };

  const handleDeleteTask = () => {
    const uuidToDelete = TaskModalForm.dataset.editingUuid;

    deleteTask(uuidToDelete);

    TaskModalForm.removeAttribute('data-editing-uuid');
    TaskModal.close();
    const currentTasks = getAllTasks();
    renderTasks(currentTasks);
    renderUpcomingTasks(getAllTasks());
  };

  showUpdateBtn.removeEventListener('click', handleUpdateTask);
  TaskDeleteBtn.removeEventListener('click', handleDeleteTask);

  showUpdateBtn.addEventListener('click', handleUpdateTask);
  TaskDeleteBtn.addEventListener('click', handleDeleteTask);

  console.log('Modal update/delete listeners attached.');
}
// **Very Important Question**
//  So, Why go through the hassle and add TaskModalForm.dataset.editingUuid = uuid to the DOM as a copy
// and then why use that the ID like this inside the delete handler...
//   const uuidToDelete = TaskModalForm.dataset.editingUuid;
// to later use it to deleteTasks
//   deleteTask(uuidToDelete);
// ...instead of just using the original `uuid` that was passed into `populateEditForm(uuid)` earlier?
// ** Answer is ....**
// Basically, when you click "Update" or "Delete" in the modal, those buttons need to know which task you were editing, right?
// The tricky part is that the code handling those button clicks runs later and doesn't automatically remember the task ID from when you first clicked the task item.
// You can't just directly tell the event listener addEventListener('click', handleMyAction(uuid)) because that actually runs handleMyAction right away instead of telling the browser which function to run later.
// So, we need a little trick: we temporarily stash the task's UUID right onto the form itself using a data-editing-uuid attribute when the editing modal opens.
// That way, when you finally click "Update" or "Delete," the code for that button can just look at the form, grab the stored UUID, and know exactly which task to work on.
// Without that step, the buttons would be lost, and editing/deleting wouldn't function correctly.
