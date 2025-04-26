import { saveProject, getAllProjects } from "./localProjectStore.js";
import { renderAllProjects } from "./renderProjects.js";

export default function addProjectMenu() {
  const addProjectBtn = document.getElementById("add-project-btn");
  const projectModal = document.getElementById("project-modal");
  const projectNameInput = document.getElementById("project-name-input");
  const projectForm = document.getElementById("project-form");
  const projectModalHeading = document.getElementById("project-modal-heading");
  const projectSaveButton = document.getElementById("project-save-btn");
  const updateProjectButton = document.getElementById("update-project-btn");
  const addProjectCancelBtn = document.getElementById("add-project-cancel-btn");

  if (addProjectBtn) {
    addProjectBtn.addEventListener("click", () => {
      projectForm.reset();
      projectForm.removeAttribute("data-editing-project-id");
      projectModalHeading.textContent = "Add New Project";
      projectSaveButton.style.display = "inline-block";
      updateProjectButton.style.display = "none";
      projectModal.showModal();
    });
  }

  if (addProjectCancelBtn && projectModal) {
    addProjectCancelBtn.addEventListener("click", () => {
      projectModal.close();
    });
  }

  if (projectForm && projectModal && projectNameInput) {
    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const isEditing = projectForm.dataset.editingProjectId; // should not be there

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
}
