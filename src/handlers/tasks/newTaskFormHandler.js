// --- Imports ---
import { getProjects, addTask as addTaskData } from "../dataStore.js"; // Data functions
import { renderTasks } from "../uiRenderer.js"; // UI update function

// --- Constants ---
const SHOW_MODAL_BUTTON_SELECTOR = ".newNoteBtn";
const NEW_TASK_MODAL_SELECTOR = ".newNoteModal";
const NEW_TASK_FORM_ID = "newNoteForm";
const CLOSE_MODAL_BUTTON_SELECTOR = ".newNoteCloseBtn";
const LIST_OF_PROJECTS_ID = "projectList";

// Sets up the handlers for the "New Task" modal button and form.
export default function initializeCreateTaskModal() {
  // --- Get Elements ---
  const showModalButton = document.querySelector(SHOW_MODAL_BUTTON_SELECTOR);
  const newTaskModalElement = document.querySelector(NEW_TASK_MODAL_SELECTOR);
  const newTaskFormElement = document.getElementById(NEW_TASK_FORM_ID);
  const closeModalButton = newTaskModalElement?.querySelector(
    CLOSE_MODAL_BUTTON_SELECTOR
  );
  const projectListSelector = document.getElementById(LIST_OF_PROJECTS_ID);

  // Exit if essential elements are missing.
  if (
    !showModalButton ||
    !newTaskModalElement ||
    !newTaskFormElement ||
    !projectListSelector
  ) {
    console.error(
      "Cannot initialize New Task Modal: Missing critical elements."
    );
    return;
  }

  // Populates the project dropdown in the modal.
  function populateProjectDropdown() {
    const currentSelectedValue = projectListSelector.value; // Preserve selection
    projectListSelector.innerHTML = ""; // Clear options
    const projectNames = getProjects(); // Get current projects
    projectNames.forEach((project) => {
      const option = document.createElement("option");
      option.textContent = project;
      option.value = project;
      if (project === currentSelectedValue) option.selected = true; // Reselect if possible
      projectListSelector.appendChild(option);
    });
    if (!projectListSelector.value && projectNames.includes("Default")) {
      projectListSelector.value = "Default"; // Ensure default selection
    }
  }

  // --- Event Listeners ---

  // Show modal button listener.
  showModalButton.addEventListener("click", () => {
    populateProjectDropdown(); // Refresh projects dropdown
    newTaskFormElement.reset(); // Reset form fields

    // Set default selections
    const defaultPriority = newTaskFormElement.querySelector(
      '#priority option[value="lowp"]'
    );
    if (defaultPriority) defaultPriority.selected = true;
    const defaultProject = projectListSelector.querySelector(
      'option[value="Default"]'
    );
    if (defaultProject) defaultProject.selected = true;

    newTaskModalElement.showModal(); // Show the dialog
    document.getElementById("name")?.focus(); // Focus name input
  });

  // Close modal button listener (or backdrop click).
  if (closeModalButton) {
    closeModalButton.addEventListener("click", () =>
      newTaskModalElement.close()
    );
  } else {
    newTaskModalElement.addEventListener("click", (event) => {
      // Fallback close
      if (event.target === newTaskModalElement) newTaskModalElement.close();
    });
  }

  // Form submission listener.
  newTaskFormElement.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values.
    const taskNameValue = document.getElementById("name").value.trim();
    const taskDescriptionValue = document
      .getElementById("descript")
      .value.trim();
    const taskDueDateValue = document.getElementById("due").value;
    const taskPriorityValue = document.getElementById("priority").value;
    const projectSelectedValue = projectListSelector.value;

    // Validate name.
    if (!taskNameValue) {
      alert("Please enter a task name.");
      document.getElementById("name").focus();
      return; // Stop if invalid
    }

    // Prepare task data object.
    const newTaskData = {
      name: taskNameValue,
      description: taskDescriptionValue,
      due: taskDueDateValue,
      priority: taskPriorityValue,
      project: projectSelectedValue || "Default",
    };

    // Add task to data store.
    const addedTask = addTaskData(newTaskData);

    // Handle result.
    if (addedTask) {
      renderTasks(); // Update displayed tasks
      newTaskModalElement.close(); // Close dialog
    } else {
      alert("Failed to add task. Please check data."); // Inform user on failure
    }
  });
}
