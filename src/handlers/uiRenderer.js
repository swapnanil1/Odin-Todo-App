// --- Imports ---
import {
  getProjects,
  getTasks,
  getCurrentProjectFilter,
  setProjectFilter,
  deleteProject,
} from "./dataStore.js"; // Data logic
import createPlantTaskSVG from "../components/plantComponent.js"; // SVG components
import createSandCastleSVG from "../components/sandCastleComponent.js";
import createCloudTaskSVG from "../components/cloudComponent.js";
import editTask from "./tasks/editTaskHandler.js"; // Edit task modal handler

// --- DOM Elements ---
const projectListElement = document.querySelector(".projects ul");
const projectsHeadingElement = document.querySelector(".projects h2");
const highPriorityListElement = document.querySelector("#highp ul");
const mediumPriorityListElement = document.querySelector("#medp ul");
const lowPriorityListElement = document.querySelector("#lowp ul");

// --- Render Functions ---

// Renders project list items in the sidebar.
function renderProjectsSidebar() {
  projectListElement.innerHTML = ""; // Clear current list
  const projects = getProjects();
  const currentFilter = getCurrentProjectFilter();

  projects.forEach((projectName) => {
    const aProject = document.createElement("li");
    aProject.dataset.name = projectName;
    aProject.textContent = projectName;
    aProject.style.cursor = "pointer";
    aProject.style.paddingBottom = "10px";

    // Highlight active filter
    if (
      projectName === currentFilter ||
      (projectName === "Default" && currentFilter === null)
    ) {
      aProject.classList.add("active-filter");
      aProject.style.fontWeight = "bold";
    }

    // Add click listener for filtering
    aProject.addEventListener("click", (e) => {
      e.stopPropagation();
      const filterToSet = projectName === "Default" ? null : projectName; // Null filter for 'Default' click
      setProjectFilter(filterToSet);
      renderTasks(); // Update task display

      // Update highlighting
      document.querySelectorAll(".projects ul li").forEach((li) => {
        li.classList.remove("active-filter");
        li.style.fontWeight = "normal";
      });
      const newlyActiveLi = projectListElement.querySelector(
        filterToSet === null
          ? 'li[data-name="Default"]'
          : `li[data-name="${CSS.escape(filterToSet)}"]`
      );
      if (newlyActiveLi) {
        newlyActiveLi.classList.add("active-filter");
        newlyActiveLi.style.fontWeight = "bold";
      }
    });

    // Add delete button unless it's 'Default' project
    if (projectName !== "Default") {
      const delProjectBtn = document.createElement("button");
      delProjectBtn.textContent = "X";
      delProjectBtn.title = `Delete project: ${projectName}`;
      delProjectBtn.style.marginLeft = "10px";
      delProjectBtn.style.cursor = "pointer";
      // Add minimal styles or use CSS

      delProjectBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent li click
        if (
          confirm(
            `Delete project "${projectName}"? Tasks within it will be moved to "Default".`
          )
        ) {
          const deleted = deleteProject(projectName);
          if (deleted) {
            // Reset filter if active one deleted
            if (getCurrentProjectFilter() === projectName)
              setProjectFilter(null);
            renderUI(); // Refresh entire UI
          } else {
            alert(`Could not delete project "${projectName}".`);
          }
        }
      });

      const delProjectSpan = document.createElement("span");
      delProjectSpan.style.marginLeft = "auto"; // Push button right
      delProjectSpan.appendChild(delProjectBtn);
      aProject.style.display = "flex";
      aProject.style.alignItems = "center";
      aProject.appendChild(delProjectSpan);
    } else {
      aProject.style.paddingRight = "30px"; // Align 'Default' text
    }

    projectListElement.appendChild(aProject);
  });
}

// Renders task items based on current filter and priority.
export function renderTasks() {
  // Clear current tasks
  highPriorityListElement.innerHTML = "";
  mediumPriorityListElement.innerHTML = "";
  lowPriorityListElement.innerHTML = "";

  const currentFilter = getCurrentProjectFilter();
  const allTasks = getTasks();

  // Filter tasks
  const tasksToRender = allTasks.filter(
    (task) => currentFilter === null || task.project === currentFilter
  );

  // Render each filtered task
  tasksToRender.forEach((task) => {
    let targetListElement;
    let taskSvgMarkup;

    // Assign to correct priority list and get SVG
    switch (task.priority) {
      case "lowp":
        targetListElement = lowPriorityListElement;
        taskSvgMarkup = createPlantTaskSVG(task.name, task.description);
        break;
      case "medp":
        targetListElement = mediumPriorityListElement;
        taskSvgMarkup = createSandCastleSVG(task.name, task.description);
        break;
      case "highp":
        targetListElement = highPriorityListElement;
        taskSvgMarkup = createCloudTaskSVG(task.name, task.description);
        break;
      default:
        return; // Skip unknown priority
    }

    // Create task list item
    const taskListItemElement = document.createElement("li");

    // Set data attributes
    taskListItemElement.dataset.id = task.id;
    taskListItemElement.dataset.name = task.name;
    taskListItemElement.dataset.description = task.description || "";
    taskListItemElement.dataset.priority = task.priority;
    taskListItemElement.dataset.due = task.due || "";
    taskListItemElement.dataset.project = task.project || "Default";

    // Add CSS classes
    taskListItemElement.classList.add("task-item");
    taskListItemElement.classList.add(`${task.priority}-task`);

    // Add SVG content
    taskListItemElement.innerHTML = taskSvgMarkup;

    // Add click listener to edit task
    taskListItemElement.addEventListener("click", function () {
      editTask(
        this.dataset.id,
        this.dataset.name,
        this.dataset.description,
        this.dataset.priority,
        this.dataset.due,
        this.dataset.project
      );
    });

    // Append to correct list
    targetListElement.appendChild(taskListItemElement);
  });
}

// Renders the entire UI by calling sub-renderers and setting up global listeners.
export function renderUI() {
  renderProjectsSidebar();
  renderTasks();

  // Add listener to Project heading ONCE for clearing filter
  if (
    projectsHeadingElement &&
    !projectsHeadingElement.dataset.listenerAttached
  ) {
    projectsHeadingElement.style.cursor = "pointer";
    projectsHeadingElement.addEventListener("click", () => {
      setProjectFilter(null); // Clear filter
      renderTasks(); // Update task display

      // Update highlighting
      document.querySelectorAll(".projects ul li").forEach((li) => {
        li.classList.remove("active-filter");
        li.style.fontWeight = "normal";
      });
      const defaultLi = projectListElement.querySelector(
        'li[data-name="Default"]'
      );
      if (defaultLi) {
        defaultLi.classList.add("active-filter");
        defaultLi.style.fontWeight = "bold";
      }
    });
    projectsHeadingElement.dataset.listenerAttached = "true"; // Mark listener as attached
  }
}
