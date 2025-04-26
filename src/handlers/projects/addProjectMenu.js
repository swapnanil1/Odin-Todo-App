// addProjectMenu.js
// Placeholder for project rendering logic

import {saveProject} from "./localProjectStore";
import {renderAllProjects} from "./renderProjects";
import handleProjectEvents from "./handleProjectEvents";

export default function addProjectMenu() {
    const addProjectBtn = document.getElementById('add-project-btn');
    const projectModal = document.getElementById('project-modal');
    const projectNameInput = document.getElementById('project-name-input');
    addProjectBtn.addEventListener('click', () => {
        projectModal.showModal();
        projectNameInput.value = '';
    })
    const addProjectCancelBtn = document.getElementById('add-project-cancel-btn');
    addProjectCancelBtn.addEventListener('click', () => {
        projectModal.close();
    })
    projectModal.addEventListener('submit', (event) => {
        event.preventDefault();
        const newProject = {
            projectName: projectNameInput.value,
            projectID: self.crypto.randomUUID(),
        };
        saveProject(newProject);
        renderAllProjects();
        handleProjectEvents();
        projectModal.close();
    })
}
