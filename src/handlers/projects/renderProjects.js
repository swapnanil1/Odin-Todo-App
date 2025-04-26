import {getAllProjects} from "./localProjectStore";

export function renderAllProjects() {
    const projectListContainer = document.querySelector('ul#project-list');
    projectListContainer.innerHTML = '';
    const getLocalProjects = getAllProjects();
    getLocalProjects.forEach((project) => {
        const aProject = document.createElement('li');
        aProject.dataset.projectname = project.projectName;
        aProject.dataset.id = project.projectID;
        aProject.classList.add('project');
        aProject.innerText = project.projectName;
        projectListContainer.appendChild(aProject);
    })
}