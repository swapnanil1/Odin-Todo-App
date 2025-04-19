import createPlantTaskSVG from "./components/plantComponent.js";
import createSandCastleSVG from "./components/sandCastleComponent.js";
import createCloudTaskSVG from "./components/cloudComponent.js";

export default function editTask(name, descript, priority, taskElement) {
  const editTaskModal = document.createElement("dialog");
  editTaskModal.className = "editTaskModal";

  const taskForm = document.createElement("form");
  taskForm.id = "editTaskForm";
  taskForm.method = "dialog";

  const heading = document.createElement("h2");
  heading.textContent = `Edit Task: ${name}`;
  taskForm.appendChild(heading);

  const taskNameLabel = document.createElement("label");
  taskNameLabel.htmlFor = "edit-task-name";
  taskNameLabel.textContent = "Task Name:";
  taskForm.appendChild(taskNameLabel);

  const editTaskNameInput = document.createElement("input");
  editTaskNameInput.type = "text";
  editTaskNameInput.id = "edit-task-name";
  editTaskNameInput.name = "taskName";
  editTaskNameInput.value = name;
  editTaskNameInput.required = true;
  taskForm.appendChild(editTaskNameInput);

  taskForm.appendChild(document.createElement("br"));

  const taskDescLabel = document.createElement("label");
  taskDescLabel.htmlFor = "edit-task-descript";
  taskDescLabel.textContent = "Description:";
  taskForm.appendChild(taskDescLabel);

  const editTaskDescTextarea = document.createElement("textarea");
  editTaskDescTextarea.id = "edit-task-descript";
  editTaskDescTextarea.name = "taskDescription";
  editTaskDescTextarea.rows = "4";
  editTaskDescTextarea.value = descript;
  taskForm.appendChild(editTaskDescTextarea);

  taskForm.appendChild(document.createElement("br"));

  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "edit-priority-select";
  priorityLabel.textContent = "Priority:";
  taskForm.appendChild(priorityLabel);

  const prioritySelect = document.createElement("select");
  prioritySelect.id = "edit-priority-select";
  prioritySelect.name = "priority";

  const priorities = [
    { value: "lowp", text: "Low" },
    { value: "medp", text: "Medium" },
    { value: "highp", text: "High" },
  ];

  priorities.forEach((p) => {
    const option = document.createElement("option");
    option.value = p.value;
    option.textContent = p.text;
    if (p.value === priority) {
      option.selected = true;
    }
    prioritySelect.appendChild(option);
  });
  taskForm.appendChild(prioritySelect);

  taskForm.appendChild(document.createElement("br"));
  taskForm.appendChild(document.createElement("br"));

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-between";
  buttonContainer.style.marginTop = "1em";

  const updateTaskBtn = document.createElement("button");
  updateTaskBtn.type = "submit";
  updateTaskBtn.textContent = "Update Task";
  updateTaskBtn.value = "update";
  buttonContainer.appendChild(updateTaskBtn);

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.type = "button";
  deleteTaskBtn.textContent = "Delete Task";
  deleteTaskBtn.style.backgroundColor = "#f44336";
  deleteTaskBtn.style.color = "white";
  deleteTaskBtn.addEventListener("click", () => {
    if (confirm(`Are you sure you want to delete the task "${name}"?`)) {
      taskElement.remove();
      editTaskModal.close("deleted");
    }
  });
  buttonContainer.appendChild(deleteTaskBtn);

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.textContent = "Cancel";
  closeBtn.addEventListener("click", () => {
    editTaskModal.close("cancelled");
  });
  buttonContainer.appendChild(closeBtn);

  taskForm.appendChild(buttonContainer);

  taskForm.addEventListener("submit", function (event) {
    const newName = editTaskNameInput.value.trim();
    const newDesc = editTaskDescTextarea.value.trim();
    const newPriority = prioritySelect.value;

    if (!newName) {
      alert("Task name cannot be empty.");
      event.preventDefault();
      return;
    }

    if (newPriority !== priority) {
      taskElement.remove();

      let newTargetList;
      let newSvgHTML;

      if (newPriority === "lowp") {
        newTargetList = document.querySelector("#lowp ul");
        newSvgHTML = createPlantTaskSVG(newName, newDesc);
      } else if (newPriority === "medp") {
        newTargetList = document.querySelector("#medp ul");
        newSvgHTML = createSandCastleSVG(newName, newDesc);
      } else {
        newTargetList = document.querySelector("#highp ul");
        newSvgHTML = createCloudTaskSVG(newName, newDesc);
      }

      if (!newTargetList) {
        console.error(
          `Error: Could not find target list for new priority: ${newPriority}`
        );
        alert("Error: Could not move task. Target list not found.");
        return;
      }

      const newLi = document.createElement("li");
      newLi.dataset.name = newName;
      newLi.dataset.description = newDesc;
      newLi.dataset.priority = newPriority;
      newLi.classList.add("task-item");
      newLi.classList.add(`${newPriority}-task`);
      newLi.innerHTML = newSvgHTML;

      newLi.addEventListener("click", function () {
        editTask(
          this.dataset.name,
          this.dataset.description,
          this.dataset.priority,
          this
        );
      });

      newTargetList.appendChild(newLi);
    } else {
      taskElement.dataset.name = newName;
      taskElement.dataset.description = newDesc;

      const nameTextElement = taskElement.querySelector(".task-name-text");
      if (nameTextElement) {
        nameTextElement.textContent = newName;
      } else {
        taskElement.innerHTML = "";
        if (priority === "lowp")
          taskElement.innerHTML = createPlantTaskSVG(newName, newDesc);
        else if (priority === "medp")
          taskElement.innerHTML = createSandCastleSVG(newName, newDesc);
        else taskElement.innerHTML = createCloudTaskSVG(newName, newDesc);
      }

      const descTextElement = taskElement.querySelector(".task-desc-text");
      if (descTextElement) {
        descTextElement.textContent = newDesc;
      } else {
        // If regeneration happened above, desc text might be fixed.
      }

      heading.textContent = `Edit Task: ${newName}`;
      alert("Task Updated!");
    }
  });

  editTaskModal.appendChild(taskForm);
  document.body.appendChild(editTaskModal);

  editTaskModal.addEventListener("close", () => {
    editTaskModal.remove();
  });

  editTaskModal.showModal();
}
