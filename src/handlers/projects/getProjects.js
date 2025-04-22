export default function refreshProjects() {
  const projectList = document.querySelectorAll(".projects ul li");
  const projectNames = Array.from(projectList).map(
    (project) => project.dataset.name
  );
  return projectNames;
}
