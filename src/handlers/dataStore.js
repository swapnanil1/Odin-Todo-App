// In-memory data stores
let allTasks = [];
let allProjects = ["Default", "Personal", "Work", "Hobbies"]; // Initial projects

// --- Project Functions ---

export function initializeProjects() {
  // Ensures 'Default' project is first.
  if (allProjects[0] !== "Default") {
    const defaultIndex = allProjects.indexOf("Default");
    if (defaultIndex > -1) allProjects.splice(defaultIndex, 1);
    allProjects.unshift("Default");
  }
}

export function getProjects() {
  // Gets project list copy.
  return [...allProjects];
}

export function addProject(projectName) {
  // Adds unique project name.
  projectName = projectName.trim();
  if (
    projectName &&
    !allProjects.some((p) => p.toLowerCase() === projectName.toLowerCase())
  ) {
    allProjects.push(projectName);
    return true;
  }
  return false;
}

export function deleteProject(projectName) {
  // Deletes project, moves tasks to 'Default'.
  if (projectName === "Default" || !projectName) return false;
  const initialLength = allProjects.length;
  allProjects = allProjects.filter((p) => p !== projectName);
  if (allProjects.length < initialLength) {
    allTasks = allTasks.map((task) =>
      task.project === projectName ? { ...task, project: "Default" } : task
    );
    return true;
  }
  return false;
}

// --- Task Functions ---

export function initializeTasks() {
  // Clears task list.
  allTasks = [];
}

export function getTasks() {
  // Gets task list copy.
  return [...allTasks];
}

export function addTask(taskData) {
  // Adds new task if name exists.
  if (!taskData || !taskData.name?.trim()) return null;
  const newTask = {
    name: taskData.name.trim(),
    description: taskData.description?.trim() || "",
    priority: taskData.priority || "lowp",
    due: taskData.due || "",
    project: taskData.project || "Default",
    id: Date.now() + "-" + Math.random().toString(36).substring(2, 9),
  };
  allTasks.push(newTask);
  return newTask;
}

export function updateTask(taskId, updatedData) {
  // Updates task by ID.
  const taskIndex = allTasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) return false;
  allTasks[taskIndex] = {
    ...allTasks[taskIndex],
    ...updatedData,
    name: updatedData.name?.trim() || allTasks[taskIndex].name,
    project: updatedData.project || "Default",
  };
  return true;
}

export function deleteTask(taskId) {
  // Deletes task by ID.
  const initialLength = allTasks.length;
  allTasks = allTasks.filter((task) => task.id !== taskId);
  return allTasks.length < initialLength;
}

// --- Filter State ---
let currentProjectFilter = null; // null means show all

export function setProjectFilter(projectName) {
  // Sets current project filter.
  currentProjectFilter = projectName || null;
}

export function getCurrentProjectFilter() {
  // Gets current project filter.
  return currentProjectFilter;
}
