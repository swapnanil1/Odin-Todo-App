import createPlantTaskSVG from "./components/plantComponent.js";
import createSandCastleSVG from "./components/sandCastleComponent.js";
import createCloudTaskSVG from "./components/cloudComponent.js";

export default function editTask(
  initialName,
  initialDescription,
  initialPriority,
  taskListItemElement
) {
  const editDialogElement = document.createElement("dialog");
  editDialogElement.className = "editTaskModal";

  const editTaskForm = document.createElement("form");
  editTaskForm.id = "editTaskForm";
  editTaskForm.method = "dialog";

  const headingElement = document.createElement("h2");
  headingElement.textContent = `Edit Task: ${initialName}`;
  editTaskForm.appendChild(headingElement);

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
    if (optionData.value === initialPriority) {
      optionElement.selected = true;
    }
    prioritySelectElement.appendChild(optionElement);
  });
  editTaskForm.appendChild(prioritySelectElement);

  editTaskForm.appendChild(document.createElement("br"));
  editTaskForm.appendChild(document.createElement("br"));

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-between";
  buttonContainer.style.marginTop = "1em";

  const updateButton = document.createElement("button");
  updateButton.type = "submit";
  updateButton.textContent = "Update Task";
  updateButton.value = "update";
  buttonContainer.appendChild(updateButton);

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete Task";
  deleteButton.style.backgroundColor = "#f44336";
  deleteButton.style.color = "white";
  deleteButton.addEventListener("click", () => {
    if (confirm(`Are you sure you want to delete the task "${initialName}"?`)) {
      taskListItemElement.remove();
      editDialogElement.close("deleted");
    }
  });
  buttonContainer.appendChild(deleteButton);

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    editDialogElement.close("cancelled");
  });
  buttonContainer.appendChild(cancelButton);

  editTaskForm.appendChild(buttonContainer);

  editTaskForm.addEventListener("submit", function (event) {
    const updatedName = nameInputElement.value.trim();
    const updatedDescription = descriptionTextareaElement.value.trim();
    const updatedPriority = prioritySelectElement.value;

    if (!updatedName) {
      alert("Task name cannot be empty.");
      event.preventDefault();
      return;
    }

    if (updatedPriority !== initialPriority) {
      taskListItemElement.remove();

      let newTargetListElement;
      let newTaskSvgMarkup;

      if (updatedPriority === "lowp") {
        newTargetListElement = document.querySelector("#lowp ul");
        newTaskSvgMarkup = createPlantTaskSVG(updatedName, updatedDescription);
      } else if (updatedPriority === "medp") {
        newTargetListElement = document.querySelector("#medp ul");
        newTaskSvgMarkup = createSandCastleSVG(updatedName, updatedDescription);
      } else {
        newTargetListElement = document.querySelector("#highp ul");
        newTaskSvgMarkup = createCloudTaskSVG(updatedName, updatedDescription);
      }

      if (!newTargetListElement) {
        console.error(
          `Error: Could not find target list for new priority: ${updatedPriority}`
        );
        alert("Error: Could not move task. Target list not found.");
        return;
      }

      const newTaskListItem = document.createElement("li");
      newTaskListItem.dataset.name = updatedName;
      newTaskListItem.dataset.description = updatedDescription;
      newTaskListItem.dataset.priority = updatedPriority;
      newTaskListItem.classList.add("task-item");
      newTaskListItem.classList.add(`${updatedPriority}-task`);
      newTaskListItem.innerHTML = newTaskSvgMarkup;

      newTaskListItem.addEventListener("click", function () {
        editTask(
          this.dataset.name,
          this.dataset.description,
          this.dataset.priority,
          this
        );
      });

      newTargetListElement.appendChild(newTaskListItem);
    } else {
      taskListItemElement.dataset.name = updatedName;
      taskListItemElement.dataset.description = updatedDescription;

      const nameTextElement =
        taskListItemElement.querySelector(".task-name-text");
      if (nameTextElement) {
        nameTextElement.textContent = updatedName;
      } else {
        taskListItemElement.innerHTML = "";
        if (initialPriority === "lowp")
          taskListItemElement.innerHTML = createPlantTaskSVG(
            updatedName,
            updatedDescription
          );
        else if (initialPriority === "medp")
          taskListItemElement.innerHTML = createSandCastleSVG(
            updatedName,
            updatedDescription
          );
        else
          taskListItemElement.innerHTML = createCloudTaskSVG(
            updatedName,
            updatedDescription
          );
      }

      const descriptionTextElement =
        taskListItemElement.querySelector(".task-desc-text");
      if (descriptionTextElement) {
        descriptionTextElement.textContent = updatedDescription;
      }

      headingElement.textContent = `Edit Task: ${updatedName}`;
      alert("Task Updated!");
    }
  });

  editDialogElement.appendChild(editTaskForm);
  document.body.appendChild(editDialogElement);

  editDialogElement.addEventListener("close", () => {
    editDialogElement.remove();
  });

  editDialogElement.showModal();
}
