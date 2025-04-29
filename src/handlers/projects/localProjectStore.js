// localProjectStore.js
const STORAGE_KEY = "projects";

export function getAllProjects() {
  const projectJson = localStorage.getItem(STORAGE_KEY);
  const projects = projectJson ? JSON.parse(projectJson) : [];
  return Array.isArray(projects) ? projects : [];
}

export function getAllProjectNames() {
  const projects = getAllProjects();
  return projects.map((project) => project.projectName);
}

export function saveAllProjects(projectsArray) {
  const projectsJSON = JSON.stringify(projectsArray);
  localStorage.setItem(STORAGE_KEY, projectsJSON);
}

export function saveProject(projectObject) {
  const currentProjects = getAllProjects();

  const duplicate = currentProjects.find(
    (projectInDB) => projectInDB.projectName === projectObject.projectName
  );
  if (duplicate) {
    alert("This project already exists");
    return;
  }

  const projectIndex = currentProjects.findIndex(
    (projectInDB) => projectInDB.projectID === projectObject.projectID
  );

  if (projectIndex > -1) {
    currentProjects[projectIndex] = projectObject;
  } else {
    currentProjects.push(projectObject);
  }

  saveAllProjects(currentProjects);
}

export function deleteProject(projectID) {
  let currentProjects = getAllProjects();
  console.log("Deleting project...");
  const initialLength = currentProjects.length;

  currentProjects = currentProjects.filter(
    (projectInDB) => projectInDB.projectID !== projectID
  );

  if (currentProjects.length < initialLength) {
    saveAllProjects(currentProjects);
    console.log("Project Deleted ");
  }
}

export function getProject(projectID) {
  const currentProjects = getAllProjects();
  const foundProject = currentProjects.find(
    (projectInDB) => projectInDB.projectID === projectID
  );

  if (foundProject !== undefined) {
    console.log("found project");
    return foundProject;
  } else {
    console.log("no project");
    return null;
  }
}

export function deleteAllProjects() {
  localStorage.removeItem(STORAGE_KEY);
}
