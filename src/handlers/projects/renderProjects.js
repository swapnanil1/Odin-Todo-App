// renderProjects.js empties the old project's list html then, grabs the latest project database and renders the project list form that db.
// after rendering the project list we call the handle events to reset eventlisters for editing the project details.
import { getAllProjects } from "./localProjectStore.js";
import {
  handleProjectEditMenu,
  viewTasksByProject,
} from "./handleProjectEvents.js";

export function renderAllProjects() {
  const projectListContainer = document.querySelector("ul#project-list");

  projectListContainer.innerHTML = "";
  const getLocalProjects = getAllProjects();

  getLocalProjects.forEach((project) => {
    const projectEditBtn = document.createElement("button");
    projectEditBtn.id = "edit-project-details";
    projectEditBtn.type = "button";
    projectEditBtn.classList = "button-secondary";
    projectEditBtn.innerText = "Edit";
    const spanHolder = document.createElement("span");
    spanHolder.dataset.projectname = project.projectName;
    spanHolder.dataset.id = project.projectID;
    spanHolder.style.marginLeft = "auto";
    spanHolder.appendChild(projectEditBtn);
    const aProject = document.createElement("li");
    aProject.classList.add("project");
    aProject.innerText = project.projectName;
    aProject.appendChild(spanHolder);
    projectListContainer.appendChild(aProject);
  });
  handleProjectEditMenu();
  viewTasksByProject();
}
