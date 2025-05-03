// this renderTask is meant to run multiple times
// first it clears the html then it takes all the tasks from db
// then renders them according to there priority.
// after rendering tasks we run resetTasksEvents that adds events for editing said task

import createPlantSVG from "../../components/plantComponent.js";
import createSandCastleSVG from "../../components/sandCastleComponent.js";
import createCloudSVG from "../../components/cloudComponent.js";
import resetTasksEvents from "./resetTasksEvents.js";

export default function renderTasks(currentTaskState) {
  const highList = document.getElementById("high-priority-tasks");
  const medList = document.getElementById("medium-priority-tasks");
  const lowList = document.getElementById("low-priority-tasks");

  if (highList) highList.innerHTML = "";
  if (medList) medList.innerHTML = "";
  if (lowList) lowList.innerHTML = "";

  if (Array.isArray(currentTaskState)) {
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

      if (task.priority === "high") {
        taskSvgMarkup = createCloudSVG(task.title, task.description);
        targetListElement = highList;
      } else if (task.priority === "medium") {
        taskSvgMarkup = createSandCastleSVG(task.title, task.description);
        targetListElement = medList;
      } else {
        taskSvgMarkup = createPlantSVG(task.title, task.description);
        targetListElement = lowList;
      }

      taskListItemElement.innerHTML = taskSvgMarkup;

      if (targetListElement) {
        targetListElement.appendChild(taskListItemElement);
      }
    });
  }

  resetTasksEvents();
}
