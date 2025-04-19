import createPlantTaskSVG from "./components/plantComponent.js";
import createSandCastleSVG from "./components/sandCastleComponent.js";
import createCloudTaskSVG from "./components/cloudComponent.js";
import editTask from "./editTask.js";

export default function drawTask() {
  const taskPriorityInput = document.getElementById("priority");
  const taskNameInput = document.getElementById("name");
  const taskDescInput = document.getElementById("descript");

  const taskPriority = taskPriorityInput.value;
  const taskName = taskNameInput.value.trim();
  const taskDesc = taskDescInput.value.trim();

  if (!taskName) {
    alert("Please enter a task name.");
    return;
  }

  let targetList;
  let svgHTML;

  if (taskPriority === "lowp") {
    targetList = document.querySelector("#lowp ul");
    svgHTML = createPlantTaskSVG(taskName, taskDesc);
  } else if (taskPriority === "medp") {
    targetList = document.querySelector("#medp ul");
    svgHTML = createSandCastleSVG(taskName, taskDesc);
  } else if (taskPriority === "highp") {
    targetList = document.querySelector("#highp ul");
    svgHTML = createCloudTaskSVG(taskName, taskDesc);
  } else {
    console.error("Invalid priority selected:", taskPriority);
    alert("Invalid task priority selected.");
    return;
  }

  if (!targetList) {
    console.error(`Target list for priority "${taskPriority}" not found.`);
    alert(
      `Could not find the list element for ${taskPriority} priority tasks.`
    );
    return;
  }

  const li = document.createElement("li");

  li.dataset.name = taskName;
  li.dataset.description = taskDesc;
  li.dataset.priority = taskPriority;

  li.classList.add("task-item");
  li.classList.add(`${taskPriority}-task`);

  li.innerHTML = svgHTML;

  li.addEventListener("click", function () {
    const currentName = this.dataset.name;
    const currentDesc = this.dataset.description;
    const currentPriority = this.dataset.priority;
    editTask(currentName, currentDesc, currentPriority, this);
  });

  targetList.appendChild(li);

  taskNameInput.value = "";
  taskDescInput.value = "";
  // taskPriorityInput.value = "lowp";
}
