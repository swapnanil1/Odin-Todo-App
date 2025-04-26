// localProjectStore.js
const STORAGE_KEY = "projects";

export function getAllProjects() {
    const projectJson = localStorage.getItem(STORAGE_KEY);
    const projects = projectJson ? JSON.parse(projectJson) : [];
    return Array.isArray(projects) ? projects : [];
}

export function saveAllProjects(projectsArray) {
    const projectsJSON = JSON.stringify(projectsArray);
    localStorage.setItem(STORAGE_KEY, projectsJSON);
}

export function saveProject(projectObject) {
    const currentProjects = getAllProjects();
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

export function deleteProject(uuid) {
    let currentProjects = getAllProjects();
    console.log("Deleting project...");
    const initialLength = currentProjects.length;

    currentProjects = currentProjects.filter(
        (projectInDB) => projectInDB.uuid !== uuid
    );

    if (currentProjects.length < initialLength) {
        saveAllProjects(currentProjects);
    }
}

export function getProject(uuid) {
    const currentProjects = getAllProjects();
    const foundProject = currentProjects.find(
        (projectInDB) => projectInDB.uuid === uuid
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
