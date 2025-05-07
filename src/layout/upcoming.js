import { drawAllTasksLayout } from './layoutManager';

const upcomingTaskLayoutHTML = `
  <header class="main-content-header">
    <h1 id="main-content-title">Upcoming Tasks</h1>
    <button id="mobile-menu-toggle" class="button-icon" aria-label="Toggle Menu">
      <i class="fas fa-bars"></i>
    </button>
  </header>

  <section class="upcoming-task-section importance-high" id="due-in-days">
    <h2 class="importance-title">
      <i class="fas fa-exclamation-circle"></i> Due This Week
    </h2>
    <div class="task-area">
      <ul class="task-list" id="up-in-days"></ul>
    </div>
  </section>

  <section class="upcoming-task-section importance-medium" id="due-in-weeks">
    <h2 class="importance-title">
      <i class="fas fa-hourglass-half"></i> Due in Upcoming Weeks
    </h2>
    <div class="task-area">
      <ul class="task-list" id="up-in-weeks"></ul>
    </div>
  </section>

  <section class="upcoming-task-section importance-low" id="due-in-months">
    <h2 class="importance-title">
      <i class="fas fa-calendar-alt"></i> Due in Upcoming Months
    </h2>
    <div class="task-area">
      <ul class="task-list" id="up-in-months"></ul>
    </div>
  </section>
`;

export default function setupUpcomingLayout() {
  drawAllTasksLayout('n');
  const mainContentArea = document.querySelector('main.app-content');
  if (!mainContentArea) {
    console.error('Main content area not found.');
    return;
  }
  mainContentArea.innerHTML = upcomingTaskLayoutHTML;
  console.log('Upcoming Tasks view layout drawn.');
}
