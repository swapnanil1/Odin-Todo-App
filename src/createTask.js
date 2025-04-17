const modelToggle = document.querySelector(".newNoteModal");
const newNoteBtn = document.querySelector(".newNote");
const closeBtn = document.querySelector(".closeBtn");
newNoteBtn.addEventListener("click", () => {
  modelToggle.showModal();
});
closeBtn.addEventListener("click", () => {
  modelToggle.close();
});
