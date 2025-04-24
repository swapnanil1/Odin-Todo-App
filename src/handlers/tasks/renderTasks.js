import createPlantSVG from "../../components/plantComponent.js";
import createSandCastleSVG from "../../components/sandCastleComponent.js";
import createCloudSVG from "../../components/cloudComponent.js";
import resetTasksEvents from "./resetTasksEvents.js";
export default function renderTasks(currentTaskState) {
  // if currentTaskStateisempty return
  if (!currentTaskState || currentTaskState.length === 0) {
    return;
  }
  // Clear previous tasks from DOM
  const highList = document.getElementById("high-priority-tasks");
  const medList = document.getElementById("medium-priority-tasks");
  const lowList = document.getElementById("low-priority-tasks");
  if (highList) highList.innerHTML = "";
  if (medList) medList.innerHTML = "";
  if (lowList) lowList.innerHTML = "";
  currentTaskState.forEach((task) => {
    const taskListItemElement = document.createElement("li");

    taskListItemElement.dataset.title = task.title;
    taskListItemElement.dataset.description = task.description;
    taskListItemElement.dataset.priority = task.priority;
    taskListItemElement.dataset.due = task.dueDate;
    taskListItemElement.dataset.project = task.project;
    taskListItemElement.dataset.uuid = task.uuid;

    taskListItemElement.classList.add("task-item");
    taskListItemElement.classList.add(`${task.priority}-task`);

    let targetListElement;
    let taskSvgMarkup;

    if (task.priority === "highp") {
      taskSvgMarkup = createCloudSVG(task.title, task.description);
      targetListElement = document.getElementById("high-priority-tasks");
    } else if (task.priority === "medp") {
      taskSvgMarkup = createSandCastleSVG(task.title, task.description);
      targetListElement = document.getElementById("medium-priority-tasks");
    } else {
      taskSvgMarkup = createPlantSVG(task.title, task.description);
      targetListElement = document.getElementById("low-priority-tasks");
    }
    taskListItemElement.innerHTML = taskSvgMarkup;
    targetListElement.appendChild(taskListItemElement);
  });
  resetTasksEvents();
}
