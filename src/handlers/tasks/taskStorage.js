let savedTaskState = [];

export default function taskStorage(mode, currentTaskState, taskUUID) {
  if (mode === "w") {
    // Overwrite the entire state
    savedTaskState = currentTaskState;
  } else if (mode === "u") {
    // Append new tasks to existing state
    savedTaskState = [...savedTaskState, ...currentTaskState];
  } else if (mode === "d") {
    // Delete task(s) based on OperateTask
    savedTaskState = savedTaskState.filter((task) => task.uuid !== taskUUID);
  } else if (mode === "r" || mode === undefined) {
    // Return current state
    return savedTaskState;
  } else {
    throw new Error(
      "Invalid mode passed to taskStorage. Use 'r', 'w', 'u', or 'd'."
    );
  }

  return savedTaskState;
}
