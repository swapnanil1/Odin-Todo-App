export default function drawProject(name) {
  // lists the projects as a li and getProject hooks into this list to fetch updated projects
  const projectNameVal = name.value.trim();
  const projectList = document.querySelector(".projects ul");
  const aProject = document.createElement("li");
  aProject.dataset.name = projectNameVal;
  aProject.textContent = projectNameVal;
  aProject.style.paddingBottom = "10px";
  const delProject = document.createElement("span");
  delProject.style.marginLeft = "10px";

  const delProjectBtn = document.createElement("button");
  delProjectBtn.addEventListener("click", () => {
    aProject.remove();
  });
  delProjectBtn.textContent = "X";
  delProject.appendChild(delProjectBtn);
  aProject.appendChild(delProject);
  projectList.appendChild(aProject);
}
