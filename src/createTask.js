import drawTask from "./drawTask.js";

const modelToggle = document.querySelector(".newNoteModal");
const newNoteBtn = document.querySelector(".newNoteBtn");
const closeBtn = document.querySelector(".closeBtn");
newNoteBtn.addEventListener("click", () => {
  modelToggle.showModal();
});
closeBtn.addEventListener("click", () => {
  modelToggle.close();
});
document
  .getElementById("newNoteForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    drawTask();
    modelToggle.close();
  });
