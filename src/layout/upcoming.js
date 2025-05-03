import { drawAllTasksLayout } from "./layoutManager.js";

const upcomingTaskLayoutHTML = `
  <header class="main-content-header">
    <h1 id="main-content-title">Upcoming Tasks</h1>
    <button id="mobile-menu-toggle" class="button-icon" aria-label="Toggle Menu">
      <i class="fas fa-bars"></i>
    </button>
  </header>
  <section class="due-in-days">
    <div class="task-area">
      <h2>due in this week</h2>
      <ul class="upcoming-task-list" id="upcoming-due-in-days"></ul>
    </div>
  </section>
  <section class="due-in-weeks">
    <div class="task-area">
        <h2> due in next weeks</h2>
        <ul class="upcoming-task-list" id="upcoming-due-in-weeks"></ul>
    <div>
  </section>

  <section class="due-in-months">
    <div class="task-area">
        <h2> due in next months</h2>
        <ul class="upcoming-task-list" id="upcoming-due-in-weeks"></ul>
    <div>
  </section>

`;

export function setupUpcomingLayout() {
  drawAllTasksLayout("n");
  const mainContentArea = document.querySelector("main.app-content");
  if (!mainContentArea) {
    console.error("Main content area not found.");
    return;
  }
  mainContentArea.innerHTML = upcomingTaskLayoutHTML;
  console.log("Upcoming Tasks view layout drawn.");
}
