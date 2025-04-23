// --- Imports ---
import { getProjects, updateTask, deleteTask } from "../dataStore.js"; // Data functions
import { renderTasks } from "../uiRenderer.js"; // UI update function

// Creates and manages the modal dialog for editing a task.
export default function editTask(
  taskId,
  initialName,
  initialDescription,
  initialPriority,
  initialDueDate,
  initialProject
) {
  // Exit if task ID is missing.
  if (!taskId) {
    console.error("editTask called without a taskId!");
    alert("Cannot edit task: Missing task identifier.");
    return;
  }

  // --- Create Dialog and Form Elements ---
  const editDialogElement = document.createElement("dialog");
  editDialogElement.className = "editTaskModal";

  const editTaskForm = document.createElement("form");
  editTaskForm.id = "editTaskForm";
  editTaskForm.method = "dialog"; // Allows closing dialog via form method

  // --- Populate Form Fields ---
  const headingElement = document.createElement("h2");
  headingElement.textContent = `Edit Task: ${initialName}`;
  editTaskForm.appendChild(headingElement);

  // Name input
  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "edit-task-name";
  nameLabel.textContent = "Task Name:";
  editTaskForm.appendChild(nameLabel);
  const nameInputElement = document.createElement("input");
  nameInputElement.type = "text";
  nameInputElement.id = "edit-task-name";
  nameInputElement.name = "taskName";
  nameInputElement.value = initialName;
  nameInputElement.required = true;
  editTaskForm.appendChild(nameInputElement);
  editTaskForm.appendChild(document.createElement("br"));

  // Description input
  const descriptionLabel = document.createElement("label");
  descriptionLabel.htmlFor = "edit-task-descript";
  descriptionLabel.textContent = "Description:";
  editTaskForm.appendChild(descriptionLabel);
  const descriptionTextareaElement = document.createElement("textarea");
  descriptionTextareaElement.id = "edit-task-descript";
  descriptionTextareaElement.name = "taskDescription";
  descriptionTextareaElement.rows = "4";
  descriptionTextareaElement.value = initialDescription;
  editTaskForm.appendChild(descriptionTextareaElement);
  editTaskForm.appendChild(document.createElement("br"));

  // Due Date input
  const dueDateLabelElement = document.createElement("label");
  dueDateLabelElement.htmlFor = "edit-due-date";
  dueDateLabelElement.textContent = "Due Date:";
  editTaskForm.appendChild(dueDateLabelElement);
  const dueDateInputElement = document.createElement("input");
  dueDateInputElement.type = "date";
  dueDateInputElement.id = "edit-due-date";
  dueDateInputElement.name = "due";
  dueDateInputElement.value = initialDueDate;
  editTaskForm.appendChild(dueDateInputElement);
  editTaskForm.appendChild(document.createElement("br"));

  // Priority select dropdown
  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "edit-priority-select";
  priorityLabel.textContent = "Priority:";
  editTaskForm.appendChild(priorityLabel);
  const prioritySelectElement = document.createElement("select");
  prioritySelectElement.id = "edit-priority-select";
  prioritySelectElement.name = "priority";
  const priorityOptions = [
    { value: "lowp", text: "Low" },
    { value: "medp", text: "Medium" },
    { value: "highp", text: "High" },
  ];
  priorityOptions.forEach((optionData) => {
    const optionElement = document.createElement("option");
    optionElement.value = optionData.value;
    optionElement.textContent = optionData.text;
    if (optionData.value === initialPriority) optionElement.selected = true;
    prioritySelectElement.appendChild(optionElement);
  });
  editTaskForm.appendChild(prioritySelectElement);
  editTaskForm.appendChild(document.createElement("br"));
  editTaskForm.appendChild(document.createElement("br"));

  // Project select dropdown
  const projectLabel = document.createElement("label");
  projectLabel.htmlFor = "edit-project-select";
  projectLabel.textContent = "Project:";
  editTaskForm.appendChild(projectLabel);
  const projectSelectElement = document.createElement("select");
  projectSelectElement.id = "edit-project-select";
  projectSelectElement.name = "project";
  const projectNames = getProjects(); // Get project list
  if (projectNames?.length > 0) {
    // Check if projects exist
    projectNames.forEach((projectName) => {
      const optionElement = document.createElement("option");
      optionElement.value = projectName;
      optionElement.textContent = projectName;
      if (
        projectName === initialProject ||
        (projectName === "Default" && !initialProject)
      )
        optionElement.selected = true; // Select current project
      projectSelectElement.appendChild(optionElement);
    });
    if (!projectSelectElement.value && projectNames.includes("Default"))
      projectSelectElement.value = "Default"; // Ensure default if needed
  } else {
    const noProjectsOption = document.createElement("option");
    noProjectsOption.textContent = "No projects available";
    noProjectsOption.disabled = true; // Handle no projects case
    projectSelectElement.appendChild(noProjectsOption);
  }
  editTaskForm.appendChild(projectSelectElement);
  editTaskForm.appendChild(document.createElement("br"));
  editTaskForm.appendChild(document.createElement("br"));

  // --- Create and Setup Buttons ---
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-between";
  buttonContainer.style.marginTop = "1em";

  // Update button (submits form)
  const updateButton = document.createElement("button");
  updateButton.type = "submit";
  updateButton.textContent = "Update Task";
  updateButton.value = "update";
  buttonContainer.appendChild(updateButton);

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete Task";
  deleteButton.style.backgroundColor = "#f44336";
  deleteButton.style.color = "white";
  // Delete button click listener
  deleteButton.addEventListener("click", () => {
    if (confirm(`Are you sure you want to delete the task "${initialName}"?`)) {
      // Confirm delete
      const deleted = deleteTask(taskId); // Delete from data store
      if (deleted) {
        renderTasks(); // Update UI
        editDialogElement.close("deleted"); // Close dialog
      } else {
        alert("Failed to delete task. It might have already been removed.");
        editDialogElement.close("delete-failed");
      }
    }
  });
  buttonContainer.appendChild(deleteButton);

  // Cancel button
  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    editDialogElement.close("cancelled"); // Close dialog without changes
  });
  buttonContainer.appendChild(cancelButton);

  editTaskForm.appendChild(buttonContainer);

  // --- Form Submit Logic ---
  editTaskForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default reload

    // Get updated values from form
    const updatedName = nameInputElement.value.trim();
    const updatedDescription = descriptionTextareaElement.value.trim();
    const updatedPriority = prioritySelectElement.value;
    const updatedDueDate = dueDateInputElement.value;
    const updatedProject = projectSelectElement.value;

    // Validate name
    if (!updatedName) {
      alert("Task name cannot be empty.");
      nameInputElement.focus();
      return; // Stop if invalid
    }

    // Prepare data object for update
    const updatedData = {
      name: updatedName,
      description: updatedDescription,
      priority: updatedPriority,
      due: updatedDueDate,
      project: updatedProject,
    };

    // Update task in data store
    const success = updateTask(taskId, updatedData);

    // Handle update result
    if (success) {
      renderTasks(); // Update UI
      editDialogElement.close("updated"); // Close dialog
    } else {
      alert("Failed to update task. It might have been deleted.");
      editDialogElement.close("update-failed"); // Close dialog even on failure
    }
  });

  // --- Display Modal ---
  editDialogElement.appendChild(editTaskForm);
  document.body.appendChild(editDialogElement);

  // --- Cleanup ---
  editDialogElement.addEventListener("close", () => {
    editDialogElement.remove(); // Remove dialog from DOM on close
  });

  editDialogElement.showModal(); // Show the dialog
}
