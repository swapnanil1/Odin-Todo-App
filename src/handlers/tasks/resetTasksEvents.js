// resetTaskEvents is the initial step for editing tasks
// resetTaskEvents is responsible for removing(ifpresent) and adding eventlisters to each task that on click should bring up the editTask modal
// editTaskModal is just same as createTaskModal(HTML) just with a few changes to make it look like a edit form
// the two secrets to not overlap eventlisters is to manage them using a common function i.e handleClickTask
// 1.both removeEventListener and addEventLister accepts 2 args
// first action and second the eventHandler so if we need to a removeEventLister form an element we need to make sure to pass the same event(fn) that was used to addEVentLister in the firstPlace
// 2.make sure the eventListers(add&remove) is not written inside the exported module(Fn) , cuz a module will be called multiple times and we dont want to attach multiple eventListers
// we want exactly one instance of the handleClickTask listener attached to it.
// so write ONE eventListers outside the exported module(fn) this make removeing and adding eventListners not stackup

import { populateEditForm } from './editTask';

const handleClickTask = (event) => {
  const taskModal = document.getElementById('task-modal');
  const TaskModalTitle = document.getElementById('task-modal-title');
  const showDeleteBtn = document.getElementById('task-delete-btn');
  const hideSubmitBtn = document.getElementById('task-submit-btn');
  const showUpdateBtn = document.getElementById('task-update-btn');

  const domTask = event.currentTarget;
  const { uuid } = domTask.dataset;

  console.log(`Task clicked (UUID: ${uuid}):`, domTask);

  taskModal.showModal();
  TaskModalTitle.textContent = 'Edit Selected Task';
  hideSubmitBtn.style.display = 'none';
  showUpdateBtn.style.display = 'inline-block';
  showDeleteBtn.style.display = 'inline-block';

  populateEditForm(uuid);
};

export default function resetTasksEvents() {
  const domTaskList = document.querySelectorAll('main section ul li');

  domTaskList.forEach((domTask) => {
    domTask.removeEventListener('click', handleClickTask);
    domTask.addEventListener('click', handleClickTask);
  });

  console.log(`Reset event listeners for ${domTaskList.length} tasks.`);
}

// Why go through this `resetTasksEvents` loop (or use delegation) instead of
// just slapping an `addEventListener` on each task item when it's first made?

// Two big reasons:
// 1. **Lost Listeners:** When the list re-renders (after edits, adds, etc.), old items often get
//    completely replaced. If listeners were only attached at creation, they're gone with the
//    old items, making the new ones unclickable.
// 2. **Removal Headache & Messy Code:** Trying to remove a specific listener added way back
//    during creation is surprisingly tough (you need that *exact* function reference again!).
//    Plus, scattering `addEventListener` calls throughout your rendering code makes things
//    harder to follow and debug later.

// This approach (remove/add cycle or delegation) ensures everything currently on screen
// *always* has the listener it needs, and it keeps the event handling logic tidier and
// easier to manage.
