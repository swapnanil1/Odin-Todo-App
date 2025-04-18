import createPlantTaskSVG from "./components/plantComponent.js";
import createSunTaskSVG from "./components/sandCastleComponent.js";
import createCloudTaskSVG from "./components/cloudComponent.js";

export default function drawTask() {
  const priorityChoice = document.getElementById("priority").value;
  const taskName = document.getElementById("name").value;
  const taskDesc = document.getElementById("descript").value;

  // Use '===' for comparison (strict equality)
  if (priorityChoice === "lowp") {
    const lowpList = document.querySelector("#lowp ul");
    const li = document.createElement("li");
    li.innerHTML = createPlantTaskSVG(taskName, taskDesc);
    lowpList.appendChild(li);
  } else if (priorityChoice === "medp") {
    const medpList = document.querySelector("#medp ul");
    const li = document.createElement("li");
    li.innerHTML = createSunTaskSVG(taskName, taskDesc);
    medpList.appendChild(li);
  } else {
    const highpList = document.querySelector("#highp ul");
    const li = document.createElement("li");
    li.innerHTML = createCloudTaskSVG(taskName, taskDesc);
    highpList.appendChild(li);
  }
}
