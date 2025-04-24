// taskStorage.js (Single Key Strategy - Comments and Try/Catch Removed)

const STORAGE_KEY = "tasks";

export function getAllTasks() {
  const tasksJSON = localStorage.getItem(STORAGE_KEY);
  const tasks = JSON.parse(tasksJSON);
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
  const initialLength = currentTasks.length;
  currentTasks = currentTasks.filter((task) => task.uuid !== uuid);

  if (currentTasks.length < initialLength) {
    saveAllTasks(currentTasks);
  }
}

export function getTask(uuid) {
  const currentTasks = getAllTasks();
  return currentTasks.find((task) => task.uuid === uuid) || null;
}

export function deleteAllTasks() {
  localStorage.removeItem(STORAGE_KEY);
}

// Alright, let's break down that taskStorage.js code and what localStorage is all about.

// What's localStorage?

// Think of localStorage like a small, persistent storage box built right into your web browser (Chrome, Firefox, Safari, etc.).

// Persistent: Anything you put in this box stays there even if you close the tab, close the browser, or even restart your computer. It's saved locally on your machine.

// Website Specific: The box belonging to google.com is different from the box belonging to youtube.com. Websites can only access their own storage box. This keeps things secure.

// Stores Strings: Technically, localStorage can only store text (strings). If you want to store more complex data like a list (array) or details (object), you have to convert it into a special text format first. That's where JSON comes in.

// JSON: The Translator

// JSON.stringify(someData): Takes your JavaScript data (like an array of task objects) and turns it into a string that looks like that data. It's like writing down the blueprint of your data in a universally understood text format.

// JSON.parse(someString): Takes a JSON string (that you read from localStorage) and turns it back into real JavaScript data (an array or object) that your code can work with.

// What Did We Do in taskStorage.js (Single Key Strategy)?

// Instead of giving every single task its own little spot in localStorage, we decided to be more organized:

// One Big Entry: We created one single entry in the localStorage box. We gave it a name (a "key") called "tasks" (const STORAGE_KEY = 'tasks';).

// Storing Everything Together: Inside that "tasks" entry, we store all of our tasks together as one big list (array). But since localStorage only holds text, we use JSON.stringify() to turn our array of task objects into one long string before saving it.

// The Functions:

// saveAllTasks(tasksArray): Takes your current list of tasks (as a JavaScript array), converts the entire list into a JSON string, and saves that string into localStorage under the key "tasks". It replaces whatever was there before.

// getAllTasks(): Goes to localStorage, asks for the string stored under the key "tasks". If it finds a string, it uses JSON.parse() to turn it back into a JavaScript array of tasks. If it finds nothing (or the data is messed up), it gives you an empty array [].

// saveTask(taskObject): This is for adding a new task or updating an existing one.

// It first gets the current full list of tasks (getAllTasks).

// It checks if a task with the same unique ID (uuid) already exists in the list.

// If yes (update): It finds that task in the list and replaces it with the new taskObject you provided.

// If no (add): It just adds the new taskObject to the end of the list.

// Finally, it saves the entire modified list back to localStorage using saveAllTasks. (This read-modify-write pattern is typical when storing arrays this way).

// deleteTask(uuid):

// Gets the current full list (getAllTasks).

// Creates a new list that includes only the tasks whose uuid doesn't match the one you want to delete (using .filter()).

// Saves this new, shorter list back to localStorage using saveAllTasks.

// getTask(uuid): Gets the full list and then searches through it (.find()) to return just the single task object that matches the uuid you asked for.

// deleteAllTasks(): Simply removes the entire "tasks" entry from localStorage, effectively deleting all stored tasks at once.

// Why This Way?

// Simplicity: Getting all your tasks is easy – just one read operation.

// Organization: Keeps all your app's task data together under one key.

// The Catch (Why we removed try...catch):

// We removed the try...catch blocks. These are like safety nets. If JSON.parse tries to read data that isn't valid JSON (maybe it got corrupted), the code would normally crash. The try...catch would "catch" the crash and let the program continue (like returning an empty array). Without them, if the data is bad, your script will likely stop working with an error shown in the browser's console. It's less safe but makes the code shorter.

// So, basically, we're using localStorage as a filing cabinet, putting all our task documents into a single folder labelled "tasks", and using JSON as the language to write and read those documents. The functions are just helpers to manage the contents of that folder.
