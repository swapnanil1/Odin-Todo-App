//
const handleProjectClick = (e) => {
  const clickedProject = e.currentTarget;
  const projectNameFromData = clickedProject.dataset.projectname;
  const projectIDFromData = clickedProject.dataset.id;
  const editProjectModal = document.getElementById("project-modal");
  const editProjectModalHeading = document.getElementById(
    "project-modal-heading"
  );

  const updateProjectButton = document.getElementById("update-project-btn");
  const projectSaveButton = document.getElementById("project-save-btn");
  const projectNameInput = document.getElementById("project-name-input");
  const deleteProjectBtn = document.getElementById("delete-project-btn");

  editProjectModalHeading.textContent = `Edit Project: ${projectNameFromData}`;
  editProjectModal.dataset.id = projectIDFromData;
  projectSaveButton.style.display = "none";
  updateProjectButton.style.display = "inline-block";
  updateProjectButton.style.background = "lightskyblue";
  updateProjectButton.style.color = "white";
  deleteProjectBtn.style.display = "inline-block";
  deleteProjectBtn.style.background = "red";

  projectNameInput.value = projectNameFromData || "";

  editProjectModal.showModal();
};

export default function handleProjectEvents() {
  const allProjectsDOMList = document.querySelectorAll(".project span");

  allProjectsDOMList.forEach((projectElement) => {
    projectElement.removeEventListener("click", handleProjectClick);
    projectElement.addEventListener("click", handleProjectClick);
  });
}
