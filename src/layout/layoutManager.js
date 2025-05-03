const baseLayoutHTML = `
  <div class="app-container">
    <aside class="app-sidebar">
      <div class="sidebar-sticky-content">
        <div class="sidebar-header">
          <i class="fas fa-check-double app-logo"></i>
          <h1>ToDo Visions</h1>
        </div>
        <section class="sidebar-section sidebar-navigation">
          <h2><i class="fas fa-eye"></i> View Tasks</h2>
          <nav>
            <ul>
              <li>
                <button
                  class="nav-button active"
                  data-view="all"
                  type="button"
                  id="view-all-tasks-btn"
                >
                  <i class="fas fa-tasks"></i> All Tasks
                </button>
              </li>
              <li>
                <button class="nav-button" data-view="upcoming" type="button" id="view-upcoming-tasks-btn">
                  <i class="fas fa-calendar-alt"></i> Upcoming Tasks
                </button>
              </li>
            </ul>
          </nav>
        </section>
        <section class="sidebar-section sidebar-projects">
          <header class="section-header">
            <h2><i class="fas fa-project-diagram"></i> Projects</h2>
            <div class="header-buttons">
              <button
                id="add-project-btn"
                title="Add New Project"
                class="button-icon button-primary"
                type="button"
              >
                <i class="fas fa-plus"></i>
              </button>
              <button
                id="delete-all-project-btn"
                class="button-icon button-danger"
                title="Delete All Projects"
                type="button"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </header>
          <ul id="project-list"></ul>
        </section>
        <section class="sidebar-section sidebar-actions">
          <h2><i class="fas fa-bolt"></i> Actions</h2>
          <button
            class="button-primary full-width"
            id="add-task-btn"
            type="button"
          >
            <i class="fas fa-plus-circle"></i> Add New Task
          </button>
          <button
            class="button-danger full-width"
            id="delete-all-task-btn"
            type="button"
          >
            <i class="fas fa-dumpster-fire"></i> Delete All Tasks
          </button>
        </section>
      </div>
    </aside>
    <main class="app-content"></main>
  </div>
  <div class="overlay" id="overlay"></div>
  <dialog class="modal" id="task-modal">
    <form id="task-form" method="dialog">
      <button type="button" class="modal-close-btn" aria-label="Close dialog">×</button>
      <h2 id="task-modal-title">Add New Task</h2>
      <input id="task-id-input" name="taskId" type="hidden" />
      <div class="form-group">
        <label for="task-name-input">Task Name:</label>
        <input
          id="task-name-input"
          name="taskName"
          required
          type="text"
          placeholder="What needs to be done?"
        />
      </div>
      <div class="form-group">
        <label for="task-desc-input">Description:</label>
        <textarea
          id="task-desc-input"
          name="taskDescription"
          rows="3"
          placeholder="Add more details..."
        ></textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="task-due-input">Due Date:</label>
          <input id="task-due-input" name="taskDueDate" type="date" />
        </div>
        <div class="form-group">
          <label for="task-priority-select">Priority:</label>
          <select id="task-priority-select" name="taskPriority">
            <option value="low">Low (Plant)</option>
            <option value="medium">Medium (Sandcastle)</option>
            <option value="high">High (Cloud)</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="task-project-select">Project:</label>
        <select id="task-project-select" name="taskProject"></select>
      </div>
      <div class="modal-controls">
        <button class="button-secondary" id="task-cancel-btn" type="button">Cancel</button>
        <button class="button-danger" id="task-delete-btn" style="display: none" type="button">Delete Task</button>
        <button class="button-primary" id="task-update-btn" style="display: none" type="button">Update Task</button>
        <button class="button-primary" id="task-submit-btn" type="submit">Save Task</button>
      </div>
    </form>
  </dialog>
  <dialog class="modal" id="project-modal">
    <form id="project-form" method="dialog">
      <button type="button" class="modal-close-btn" aria-label="Close dialog">×</button>
      <h2 id="project-modal-heading">Add New Project</h2>
      <div class="form-group">
        <label for="project-name-input">Project Name:</label>
        <input
          id="project-name-input"
          name="projectName"
          required
          type="text"
          placeholder="e.g., Home Renovation"
        />
      </div>
      <input id="project-original-name-input" type="hidden" />
      <div class="modal-controls">
        <button class="button-secondary" id="add-project-cancel-btn" type="button">Cancel</button>
        <button class="button-danger" id="delete-project-btn" style="display: none" type="button">Delete Project</button>
        <button class="button-primary" id="update-project-btn" style="display: none" type="button">Update Project</button>
        <button class="button-primary" id="project-save-btn" type="submit">Add Project</button>
      </div>
    </form>
  </dialog>
`;

const allTasksLayoutHTML = `
  <header class="main-content-header">
    <h1 id="main-content-title">All Tasks</h1>
    <button id="mobile-menu-toggle" class="button-icon" aria-label="Toggle Menu">
      <i class="fas fa-bars"></i>
    </button>
  </header>
  <section class="task-priority-section environment-sky" id="priority-high">
    <h2 class="priority-title">
      <i class="fas fa-cloud"></i> High Priority
    </h2>
    <div class="task-area">
      <ul class="task-list" id="high-priority-tasks"></ul>
    </div>
  </section>
  <section class="task-priority-section environment-beach" id="priority-medium">
    <h2 class="priority-title">
      <i class="fas fa-umbrella-beach"></i> Medium Priority
    </h2>
    <div class="task-area">
      <ul class="task-list" id="medium-priority-tasks"></ul>
    </div>
  </section>
  <section class="task-priority-section environment-ground" id="priority-low">
    <h2 class="priority-title">
      <i class="fas fa-seedling"></i> Low Priority
    </h2>
    <div class="task-area">
      <ul class="task-list" id="low-priority-tasks"></ul>
    </div>
  </section>
`;

export function drawBaseLayout() {
  if (!document.body) {
    console.error("DOM body not found.");
    return;
  }
  document.body.innerHTML = baseLayoutHTML;
  console.log("Base layout, overlay, and modals drawn successfully.");
}

export function drawAllTasksLayout(yn) {
  const mainContentArea = document.querySelector("main.app-content");
  if (!mainContentArea) {
    if (yn === "y") {
      console.error(
        "<main class='app-content'> element not found. Ensure base layout is drawn first."
      );
    }
    return;
  }
  if (yn === "y") {
    mainContentArea.innerHTML = allTasksLayoutHTML;
    console.log("All Tasks view layout drawn successfully.");
  } else if (yn === "n") {
    mainContentArea.innerHTML = "";
    console.log("Main content area cleared.");
  } else {
    console.error(
      "Invalid parameter passed to drawAllTasksLayout. Expected 'y' or 'n'."
    );
    return;
  }
}
