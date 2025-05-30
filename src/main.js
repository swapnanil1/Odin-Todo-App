import './styles/style.css';
import addTaskMenu from './handlers/tasks/addTaskMenu';
import renderTasks from './handlers/tasks/renderTasks';
import { getAllTasks } from './handlers/tasks/taskStorage';
import { setupModalListeners } from './handlers/tasks/editTask';
import addProjectMenu from './handlers/projects/addProjectMenu';
import renderAllProjects from './handlers/projects/renderProjects';
import { handleProjectEditMenu } from './handlers/projects/handleProjectEvents';
import setupMobileMenu from './handlers/setupMobileMenuToggle';
import { drawBaseLayout, drawAllTasksLayout } from './layout/layoutManager';
import setupUpcomingLayout from './layout/upcoming';
import renderUpcomingTasks from './handlers/upcoming-tasks/renderUpcomingTasks';

drawBaseLayout();
drawAllTasksLayout('y');
addTaskMenu();
setupModalListeners();
addProjectMenu();
renderAllProjects();
handleProjectEditMenu();
setupMobileMenu();
let allTask = getAllTasks();
renderTasks(allTask);

const viewAllTasksBtn = document.getElementById('view-all-tasks-btn');
const viewAllUpcomingTasksBtn = document.getElementById(
  'view-upcoming-tasks-btn'
);
const navButtons = document.querySelectorAll('.sidebar-navigation .nav-button');

function setActiveButton(activeBtn) {
  navButtons.forEach((btn) => btn.classList.remove('active'));
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

if (viewAllTasksBtn) {
  viewAllTasksBtn.addEventListener('click', (e) => {
    console.log('Switching to All Tasks view');
    drawAllTasksLayout('y');
    setActiveButton(e.currentTarget);
    allTask = getAllTasks();
    renderTasks(allTask);
    setupMobileMenu();
  });
}

if (viewAllUpcomingTasksBtn) {
  viewAllUpcomingTasksBtn.addEventListener('click', (e) => {
    console.log('Switching to Upcoming Tasks view');
    setupUpcomingLayout();
    renderUpcomingTasks(getAllTasks());
    setActiveButton(e.currentTarget);
    setupMobileMenu();
  });
}

const allCloseDialogBtns = document.querySelectorAll('.modal-close-btn');
allCloseDialogBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const modalToClose = button.closest('dialog');
    if (modalToClose) modalToClose.close();
  });
});

console.log('Application started.');
