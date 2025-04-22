export default function drawProject() {
  // lists the projects as a li
  const projectNameEle = document.getElementById("projectName");
  const projectNameVal = projectNameEle.value.trim();
  const projectList = document.querySelector(".projects ul");
  const aProject = document.createElement("li");
  aProject.dataset.name = projectNameVal;
  aProject.textContent = projectNameVal;
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
  projectNameEle.value = "";
}
