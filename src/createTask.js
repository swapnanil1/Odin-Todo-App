import drawTask from "./drawTask.js";

const NEW_TASK_MODAL_SELECTOR = ".newNoteModal";
const SHOW_MODAL_BUTTON_SELECTOR = ".newNoteBtn";
const CLOSE_MODAL_BUTTON_SELECTOR = ".closeBtn";
const NEW_TASK_FORM_ID = "newNoteForm";

function initializeCreateTaskModal() {
  const newTaskModalElement = document.querySelector(NEW_TASK_MODAL_SELECTOR);
  const showModalButton = document.querySelector(SHOW_MODAL_BUTTON_SELECTOR);
  const closeModalButton = document.querySelector(CLOSE_MODAL_BUTTON_SELECTOR);
  const newTaskFormElement = document.getElementById(NEW_TASK_FORM_ID);

  if (!newTaskModalElement) {
    console.error(
      `Error: Could not find modal element with selector "${NEW_TASK_MODAL_SELECTOR}".`
    );
    return;
  }
  if (!showModalButton) {
    console.error(
      `Error: Could not find show modal button element with selector "${SHOW_MODAL_BUTTON_SELECTOR}".`
    );
  }
  if (!closeModalButton) {
    console.warn(
      `Warning: Could not find close modal button element with selector "${CLOSE_MODAL_BUTTON_SELECTOR}".`
    );
  }
  if (!newTaskFormElement) {
    console.error(
      `Error: Could not find form element with ID "${NEW_TASK_FORM_ID}". Task creation will not work.`
    );
    return;
  }

  if (showModalButton) {
    showModalButton.addEventListener("click", () => {
      newTaskModalElement.showModal();
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener("click", () => {
      newTaskModalElement.close();
    });
  }

  newTaskFormElement.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
      drawTask();
      newTaskModalElement.close();
    } catch (error) {
      console.error("Error occurred during task creation:", error);
      alert(
        "An error occurred while adding the task. Please check the console."
      );
    }
  });
}

export default initializeCreateTaskModal;
