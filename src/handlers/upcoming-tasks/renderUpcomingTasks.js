import createPlantSVG from "../../components/plantComponent.js";
import createSandCastleSVG from "../../components/sandCastleComponent.js";
import createCloudSVG from "../../components/cloudComponent.js";
import resetUpcomingTasksEvents from "../tasks/resetTasksEvents.js";

function getCurrentDateString() {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  return year + "-" + month + "-" + day;
}

function getDaysDifference(futureDateString, baseDateStr) {
  const baseDateObject = new Date(baseDateStr + "T00:00:00Z");
  const futureDateObject = new Date(futureDateString + "T00:00:00Z");

  const wasBaseDateUnderstood = !isNaN(baseDateObject.getTime());
  const wasFutureDateUnderstood = !isNaN(futureDateObject.getTime());

  if (!wasBaseDateUnderstood || !wasFutureDateUnderstood) {
    return NaN;
  }

  const baseDateMilliseconds = baseDateObject.getTime();
  const futureDateMilliseconds = futureDateObject.getTime();
  const differenceInMilliseconds =
    baseDateMilliseconds - futureDateMilliseconds;

  const millisecondsInOneDay = 1000 * 60 * 60 * 24;
  const differenceInDays = differenceInMilliseconds / millisecondsInOneDay;

  return differenceInDays;
}

export default function renderUpcomingTasks(currentUpcomingTasks) {
  const tasksDueInDaysList = document.getElementById("up-in-days");
  const tasksDueInWeeksList = document.getElementById("up-in-weeks");
  const tasksDueInMonthsList = document.getElementById("up-in-months");

  if (tasksDueInDaysList) tasksDueInDaysList.innerHTML = "";
  if (tasksDueInWeeksList) tasksDueInWeeksList.innerHTML = "";
  if (tasksDueInMonthsList) tasksDueInMonthsList.innerHTML = "";

  const todayString = getCurrentDateString();

  currentUpcomingTasks.forEach(function (task) {
    if (!task.dueDate) return;
    const daysDifference = getDaysDifference(task.dueDate, todayString);
    if (isNaN(daysDifference) || daysDifference > 0) return;

    let targetListElement = null;

    if (daysDifference <= 0 && daysDifference >= -7) {
      targetListElement = tasksDueInDaysList;
    } else if (daysDifference <= -8 && daysDifference >= -14) {
      targetListElement = tasksDueInWeeksList;
    } else if (daysDifference <= -15) {
      targetListElement = tasksDueInMonthsList;
    }

    if (targetListElement) {
      let svgPictureHtml = "";
      switch (task.priority) {
        case "high":
          svgPictureHtml = createCloudSVG(task.title, task.description);
          break;
        case "medium":
          svgPictureHtml = createSandCastleSVG(task.title, task.description);
          break;
        case "low":
          svgPictureHtml = createPlantSVG(task.title, task.description);
          break;
        default:
          svgPictureHtml = createPlantSVG(task.title, task.description);
          break;
      }

      const listItem = document.createElement("li");
      listItem.classList.add("task-item");
      const priorityClass =
        task.priority === "high" ||
        task.priority === "medium" ||
        task.priority === "low"
          ? task.priority
          : "low";
      listItem.classList.add(priorityClass + "-task");

      listItem.dataset.title = task.title || "";
      listItem.dataset.description = task.description || "";
      listItem.dataset.priority = task.priority || "low";
      listItem.dataset.due = task.dueDate;
      listItem.dataset.project = task.project || "";
      listItem.dataset.uuid = task.uuid || "";

      listItem.innerHTML = svgPictureHtml;
      targetListElement.appendChild(listItem);
    }
  });
  resetUpcomingTasksEvents();
}
