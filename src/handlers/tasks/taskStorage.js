//Seriously, for building a successful app that has a lot of user dataStorage/interaction you need to have a proper database.
// That you as a dev can call into to update/add/delete data from anywhere inside the code.

// no mater how buried it may be inside multiple if-else functions or eventListens it might be
// just import the database and perform edits!

// at first, I tried to set up using arrays to store return and access data. and it always broke on me,
// causing multiple data corruption like creating two task when I add one, setting all tasks to same name etc.
// Nightmare! Everything disappears on refresh, and passing data gets messy fast.
// This module using localStorage is the fix. It gives us a central, persistent place
// for all task data.

// Basically, it's our mini "database" for tasks. Keeps the rest of the code cleaner
// and focused on the UI, instead of worrying about where the data lives. A huge relief!

const STORAGE_KEY = "tasks";

export function getAllTasks() {
  const tasksJSON = localStorage.getItem(STORAGE_KEY);
  const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];
  return Array.isArray(tasks) ? tasks : [];
}

export function getAllTaskByProject(projectName) {
  const tasks = getAllTasks();
  return tasks.filter((task) => task.project && task.project === projectName);
}

export function saveAllTasks(tasksArray) {
  const tasksJSON = JSON.stringify(tasksArray);
  localStorage.setItem(STORAGE_KEY, tasksJSON);
}

export function saveTask(taskObject) {
  const currentTasks = getAllTasks();
  const taskIndex = currentTasks.findIndex(
    (task) => task.uuid === taskObject.uuid
  );

  if (taskIndex > -1) {
    currentTasks[taskIndex] = taskObject;
  } else {
    currentTasks.push(taskObject);
  }

  saveAllTasks(currentTasks);
}

export function deleteTask(uuid) {
  let currentTasks = getAllTasks();
  console.log("Deleting a task");
  const initialLength = currentTasks.length;
  currentTasks = currentTasks.filter((task) => task.uuid !== uuid);

  if (currentTasks.length < initialLength) {
    saveAllTasks(currentTasks);
  }
}

export function getTask(uuid) {
  const currentTasks = getAllTasks();
  console.log("getting a Task");
  const foundTask = currentTasks.find((task) => task.uuid === uuid);
  return foundTask || null;
}

export function deleteAllTasks() {
  localStorage.removeItem(STORAGE_KEY);
}
