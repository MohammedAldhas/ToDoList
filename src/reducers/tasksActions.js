export const tasksReducer = (prevValue, actions) => {
  //   console.log(action);

  switch (actions.type) {
    case "added": {
      const newTasks = [...prevValue, actions.payload.newTaskd];
      console.log(newTasks);

      return newTasks;
    }
    case "edited": {
      const newTasks = prevValue.map((task) => {
        if (task.id == actions.payload.chosenTask.id) {
          return actions.payload.chosenTask;
        } else return task;
      });
      return newTasks;
    }
    case "checked": {
      const newTasks = prevValue?.map((task) =>
        task.id != actions.payload.taskID
          ? task // No change
          : { ...task, checked: !task.checked }
      );
      return newTasks;
    }
    case "deleted": {
      const newTasks = prevValue.filter((t) => t.id !== actions.payload.id);
      return newTasks;
    }
  }
  throw Error("Unknown action: " + actions.type);
};
