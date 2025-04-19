import drawTask from "./drawTask.js";

const MODAL_SELECTOR = ".newNoteModal";
const OPEN_BUTTON_SELECTOR = ".newNoteBtn";
const CLOSE_BUTTON_SELECTOR = ".closeBtn";
const FORM_ID = "newNoteForm";

function initializeCreateTaskModal() {
  const newTaskModal = document.querySelector(MODAL_SELECTOR);
  const openModalButton = document.querySelector(OPEN_BUTTON_SELECTOR);
  const closeModalButton = document.querySelector(CLOSE_BUTTON_SELECTOR);
  const newTaskForm = document.getElementById(FORM_ID);

  if (!newTaskModal) {
    console.error(
      `Error: Could not find modal element with selector "${MODAL_SELECTOR}".`
    );
    return;
  }
  if (!openModalButton) {
    console.error(
      `Error: Could not find open button element with selector "${OPEN_BUTTON_SELECTOR}".`
    );
  }
  if (!closeModalButton) {
    console.warn(
      `Warning: Could not find close button element with selector "${CLOSE_BUTTON_SELECTOR}".`
    );
  }
  if (!newTaskForm) {
    console.error(
      `Error: Could not find form element with ID "${FORM_ID}". Task creation will not work.`
    );
    return;
  }

  if (openModalButton) {
    openModalButton.addEventListener("click", () => {
      newTaskModal.showModal();
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener("click", () => {
      newTaskModal.close();
    });
  }

  newTaskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
      drawTask();
      newTaskModal.close();
    } catch (error) {
      console.error("Error occurred during task creation:", error);
      alert(
        "An error occurred while adding the task. Please check the console."
      );
    }
  });
}

export default initializeCreateTaskModal;
