import {
  saveProject,
  deleteProject,
  deleteAllProjects,
} from './localProjectStore';
import renderAllProjects from './renderProjects';

export default function addProjectMenu() {
  const addProjectBtn = document.getElementById('add-project-btn');
  const projectModal = document.getElementById('project-modal');
  const projectNameInput = document.getElementById('project-name-input');
  const projectForm = document.getElementById('project-form');
  const projectModalHeading = document.getElementById('project-modal-heading');
  const projectSaveButton = document.getElementById('project-save-btn');
  const updateProjectButton = document.getElementById('update-project-btn');
  const addProjectCancelBtn = document.getElementById('add-project-cancel-btn');
  const deleteProjectBtn = document.getElementById('delete-project-btn');
  const deleteAllProjectsBtn = document.getElementById(
    'delete-all-project-btn'
  );
  if (addProjectBtn) {
    addProjectBtn.addEventListener('click', () => {
      projectForm.reset();
      projectModal.removeAttribute('data-id');
      projectModalHeading.textContent = 'Add New Project';
      projectSaveButton.style.display = 'inline-block';
      updateProjectButton.style.display = 'none';
      deleteProjectBtn.style.display = 'none';

      projectModal.showModal();
    });
  }

  if (addProjectCancelBtn && projectModal) {
    addProjectCancelBtn.addEventListener('click', () => {
      projectModal.close();
    });
  }

  if (projectForm && projectModal && projectNameInput) {
    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const isEditing = projectModal.dataset.id; // should not be there

      if (!isEditing) {
        // if not editing then adding
        const newProjectName = projectNameInput.value.trim();
        if (newProjectName) {
          const newProject = {
            projectName: newProjectName,
            projectID: self.crypto.randomUUID(),
          };
          saveProject(newProject);
          renderAllProjects();
        }
        projectModal.close();
      }
    });
  }
  if (updateProjectButton) {
    updateProjectButton.addEventListener('click', () => {
      const keepSameID = projectModal.dataset.id;
      const updateName = projectNameInput.value.trim();
      deleteProject(keepSameID);
      const newProject = {
        projectName: updateName,
        projectID: keepSameID,
      };
      saveProject(newProject);
      renderAllProjects();
      projectModal.close();
    });
  }
  if (deleteProjectBtn) {
    deleteProjectBtn.addEventListener('click', () => {
      const userInput = prompt(
        'Deleting a project removes it from all attached tasks: Are you sure ? y/N'
      );
      if (userInput === 'y') {
        const deleteProjectID = projectModal.dataset.id;
        if (!deleteProjectID) {
          console.error('No project ID set in modal. Cannot delete.');
          return;
        }
        deleteProject(deleteProjectID);
        renderAllProjects();
        projectModal.close();
      }
    });
  }
  if (deleteAllProjectsBtn) {
    deleteAllProjectsBtn.addEventListener('click', () => {
      const userInput = prompt('Deleting All Project: Are you sure ? y/N');
      if (userInput === 'y') {
        deleteAllProjects();
        renderAllProjects();
      }
    });
  }
}
