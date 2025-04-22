import addNewProject from "./addProject";
export default function newProject() {
  const newProjectBtn = document.getElementById("newProjectBtn");
  const newProjectFormEle = document.getElementById("newProjectForm");
  const newProjectModal = document.querySelector(".newProjectModal");

  newProjectBtn.addEventListener("click", () => {
    newProjectModal.showModal();
  });
  const newProjectCloseBtn = document.querySelector(".newProjectCloseBtn");
  newProjectCloseBtn.addEventListener("click", () => {
    newProjectModal.close();
  });
  newProjectFormEle.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      addNewProject();
      newProjectModal.close();
    } catch (error) {
      console.error("Error occurred during project creation:", error);
      alert(
        "An error occurred while adding the task. Please check the console."
      );
    }
  });
}
