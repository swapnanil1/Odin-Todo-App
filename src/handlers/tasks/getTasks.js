export default function refreshTasks() {
  const taskListItems = document.querySelectorAll("#content section ul li");

  if (!taskListItems || taskListItems.length === 0) {
    return [];
  }

  const taskObjects = Array.from(taskListItems).map((taskListItem) => {
    return {
      name: taskListItem.dataset.name,
      due: taskListItem.dataset.due,
      priority: taskListItem.dataset.priority,
      description: taskListItem.dataset.description,
      project: taskListItem.dataset.project,
    };
  });

  return taskObjects;
}
