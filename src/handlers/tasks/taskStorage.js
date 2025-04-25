const STORAGE_KEY = "tasks";

export function getAllTasks() {
  const tasksJSON = localStorage.getItem(STORAGE_KEY);
  const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];
  return Array.isArray(tasks) ? tasks : [];
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
  console.log("deleting a Task");
  const initialLength = currentTasks.length;
  currentTasks = currentTasks.filter((task) => task.uuid !== uuid);

  if (currentTasks.length < initialLength) {
    saveAllTasks(currentTasks);
  }
  console.log(getAllTasks());
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
