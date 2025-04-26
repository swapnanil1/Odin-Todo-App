// addProjectMenu.js
// Placeholder for project rendering logic

import {saveProject} from "./localProjectStore";

export default function addProjectMenu() {
    const addProjectBtn = document.getElementById('add-project-btn');
    const addProjectModal = document.getElementById('add-project-modal');
    const addProjectForm = document.getElementById('add-project-form');
    const projectNameInput = document.getElementById('project-name-input');
    addProjectBtn.addEventListener('click', () => {
        addProjectModal.showModal();
    })
    const addProjectCancelBtn = document.getElementById('add-project-cancel-btn');
    addProjectCancelBtn.addEventListener('click', () => {
        addProjectModal.close();
    })
    addProjectForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newProject = {
            projectName: projectNameInput.value,
            projectID: self.crypto.randomUUID(),
        };
        saveProject(newProject);
        addProjectModal.close();
    })
}
