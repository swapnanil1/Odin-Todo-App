// --- Imports ---
import { addProject as addProjectData } from "../dataStore.js"; // Data function
import { renderUI } from "../uiRenderer.js"; // UI update function

// Sets up the handlers for the "New Project" modal button and form.
export default function initializeCreateTaskProject() {
  // --- Get Elements ---
  const newProjectBtn = document.getElementById("newProjectBtn");
  const newProjectFormEle = document.getElementById("newProjectForm");
  const newProjectModal = document.querySelector(".newProjectModal");
  const projectNameEle = document.getElementById("projectName");
  const newProjectCloseBtn = newProjectModal?.querySelector(
    ".newProjectCloseBtn"
  );

  // Exit if essential elements are missing.
  if (
    !newProjectBtn ||
    !newProjectFormEle ||
    !newProjectModal ||
    !projectNameEle
  ) {
    console.error(
      "Cannot initialize New Project Modal: Missing critical elements."
    );
    return;
  }

  // --- Event Listeners ---

  // Open modal button listener.
  newProjectBtn.addEventListener("click", () => {
    projectNameEle.value = ""; // Clear input
    newProjectModal.showModal();
    projectNameEle.focus(); // Focus input
  });

  // Close modal button listener (or backdrop click).
  if (newProjectCloseBtn) {
    newProjectCloseBtn.addEventListener("click", () => newProjectModal.close());
  } else {
    newProjectModal.addEventListener("click", (event) => {
      // Fallback close
      if (event.target === newProjectModal) newProjectModal.close();
    });
  }

  // Form submission listener.
  newProjectFormEle.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    const projectNameValue = projectNameEle.value.trim(); // Get project name

    // Validate name.
    if (!projectNameValue) {
      alert("Project name cannot be empty.");
      projectNameEle.focus();
      return; // Stop if invalid
    }

    // Add project to data store.
    const success = addProjectData(projectNameValue);

    // Handle result.
    if (success) {
      renderUI(); // Update UI
      newProjectModal.close(); // Close dialog
    } else {
      alert(`Project "${projectNameValue}" already exists or is invalid.`); // Inform user
      projectNameEle.select(); // Select text for easy correction
      projectNameEle.focus();
    }
  });
}
