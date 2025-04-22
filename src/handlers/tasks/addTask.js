import createPlantTaskSVG from "../../components/plantComponent.js";
import createSandCastleSVG from "../../components/sandCastleComponent.js";
import createCloudTaskSVG from "../../components/cloudComponent.js";
import editTask from "./editTaskHandler.js";

export default function drawTask() {
  const priorityInputElement = document.getElementById("priority");
  const nameInputElement = document.getElementById("name");
  const descriptionInputElement = document.getElementById("descript");
  const dueDateInputElement = document.getElementById("due");
  const projectListSelector = document.getElementById("projectList");

  const taskPriorityValue = priorityInputElement.value;
  const taskNameValue = nameInputElement.value.trim();
  const taskDescriptionValue = descriptionInputElement.value.trim();
  const taskDueDateValue = dueDateInputElement.value;
  const projectSelectedValue = projectListSelector.value;

  if (!taskNameValue) {
    alert("Please enter a task name.");
    return;
  }

  let targetListElement;
  let taskSvgMarkup;

  if (taskPriorityValue === "lowp") {
    targetListElement = document.querySelector("#lowp ul");
    taskSvgMarkup = createPlantTaskSVG(taskNameValue, taskDescriptionValue);
  } else if (taskPriorityValue === "medp") {
    targetListElement = document.querySelector("#medp ul");
    taskSvgMarkup = createSandCastleSVG(taskNameValue, taskDescriptionValue);
  } else if (taskPriorityValue === "highp") {
    targetListElement = document.querySelector("#highp ul");
    taskSvgMarkup = createCloudTaskSVG(taskNameValue, taskDescriptionValue);
  } else {
    console.error("Invalid priority selected:", taskPriorityValue);
    alert("Invalid task priority selected.");
    return;
  }

  if (!targetListElement) {
    console.error(`Target list for priority "${taskPriorityValue}" not found.`);
    alert(
      `Could not find the list element for ${taskPriorityValue} priority tasks.`
    );
    return;
  }

  const taskListItemElement = document.createElement("li");

  taskListItemElement.dataset.name = taskNameValue;
  taskListItemElement.dataset.description = taskDescriptionValue;
  taskListItemElement.dataset.priority = taskPriorityValue;
  taskListItemElement.dataset.due = taskDueDateValue;
  taskListItemElement.dataset.project = projectSelectedValue;

  taskListItemElement.classList.add("task-item");
  taskListItemElement.classList.add(`${taskPriorityValue}-task`);

  taskListItemElement.innerHTML = taskSvgMarkup;

  taskListItemElement.addEventListener("click", function () {
    const currentTaskName = this.dataset.name;
    const currentTaskDescription = this.dataset.description;
    const currentTaskPriority = this.dataset.priority;
    const currentDueDate = this.dataset.due;
    editTask(
      currentTaskName,
      currentTaskDescription,
      currentTaskPriority,
      currentDueDate,
      this
    );
  });

  targetListElement.appendChild(taskListItemElement);

  nameInputElement.value = "";
  descriptionInputElement.value = "";
  dueDateInputElement.value = "";
}
export {};
