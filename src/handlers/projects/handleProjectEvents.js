const handleProjectClick = (e) => {
    const clickedProject = e.currentTarget;
    const projectNameFromData = clickedProject.dataset.projectname;

    const editProjectModal = document.getElementById('project-modal');
    const editProjectForm = document.getElementById('project-form');
    const editProjectModalHeading = document.getElementById('project-modal-heading');
    const updateProjectButton = document.getElementById('update-project-btn');
    const projectSaveButton = document.getElementById('project-save-btn');
    const projectNameInput = document.getElementById('project-name-input');
    editProjectModalHeading.textContent = `Edit Project: ${projectNameFromData}`;
    updateProjectButton.style.display = 'inline-block';
    projectSaveButton.style.display = 'none';
    updateProjectButton.style.background = 'red';
    updateProjectButton.style.color = 'white';

    projectNameInput.value = projectNameFromData || '';

    editProjectModal.showModal();
};


export default function handleProjectEvents() {
    const allProjectsDOMList = document.querySelectorAll(".project");

    allProjectsDOMList.forEach((projectElement) => {
        projectElement.removeEventListener('click', handleProjectClick);
        projectElement.addEventListener('click', handleProjectClick);
    });
}