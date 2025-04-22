import addNewProject from "./addProject";
import refreshProjects from "./getProjects";
export default function newProject() {
  const newProjectBtn = document.getElementById("newProjectBtn");
  const newProjectFormEle = document.getElementById("newProjectForm");
  const newProjectModal = document.querySelector(".newProjectModal");
  const projectNameEle = document.getElementById("projectName");
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
      addNewProject(projectNameEle);
      newProjectModal.close();
      projectNameEle.value = "";
    } catch (error) {
      console.error("Error occurred during project creation:", error);
      alert(
        "An error occurred while adding the task. Please check the console."
      );
    }
  });

  const Personal = document.createElement("input");
  Personal.value = "Personal";
  addNewProject(Personal);
  const Work = document.createElement("input");
  Work.value = "Work";
  addNewProject(Work);
  const Hobbies = document.createElement("input");
  Hobbies.value = "Hobbies";
  addNewProject(Hobbies);
}
