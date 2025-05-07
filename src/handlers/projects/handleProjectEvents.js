import { getAllTaskByProject } from '../tasks/taskStorage';
import renderTasks from '../tasks/renderTasks';
import renderUpcomingTasks from '../upcoming-tasks/renderUpcomingTasks';

const handleProjectMenuClick = (e) => {
  e.stopPropagation();
  const clickedProject = e.currentTarget;
  const projectNameFromData = clickedProject.dataset.projectname;
  const projectIDFromData = clickedProject.dataset.id;
  const editProjectModal = document.getElementById('project-modal');
  const editProjectModalHeading = document.getElementById(
    'project-modal-heading'
  );

  const updateProjectButton = document.getElementById('update-project-btn');
  const projectSaveButton = document.getElementById('project-save-btn');
  const projectNameInput = document.getElementById('project-name-input');
  const deleteProjectBtn = document.getElementById('delete-project-btn');

  editProjectModalHeading.textContent = `Edit Project: ${projectNameFromData}`;
  editProjectModal.dataset.id = projectIDFromData;
  projectSaveButton.style.display = 'none';
  updateProjectButton.style.display = 'inline-block';
  updateProjectButton.style.background = 'lightskyblue';
  updateProjectButton.style.color = 'white';
  deleteProjectBtn.style.display = 'inline-block';
  deleteProjectBtn.style.background = 'red';

  projectNameInput.value = projectNameFromData || '';

  editProjectModal.showModal();
};

const viewTasksByProjectClick = (e) => {
  const clickedProject = e.currentTarget;
  const projectName = clickedProject.firstChild.textContent.trim();
  const appHeadTitle = document.getElementById('main-content-title');
  appHeadTitle.innerText = `Filter Project: ${projectName}`;
  const allTasksByProject = getAllTaskByProject(projectName);
  renderTasks(allTasksByProject);
  renderUpcomingTasks(allTasksByProject);
};

export function handleProjectEditMenu() {
  const allProjectsEditList = document.querySelectorAll('.project span');

  allProjectsEditList.forEach((projectsEditMenu) => {
    projectsEditMenu.removeEventListener('click', handleProjectMenuClick);
    projectsEditMenu.addEventListener('click', handleProjectMenuClick);
  });
}
export function viewTasksByProject() {
  const allProjectList = document.querySelectorAll('.project');
  allProjectList.forEach((projectList) => {
    projectList.removeEventListener('click', viewTasksByProjectClick);
    projectList.addEventListener('click', viewTasksByProjectClick);
  });
}
