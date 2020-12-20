import { ACTIONS } from "./actions";
import { v4 } from "uuid";
import { saveState } from "./utils/localStorage";

export const reducer = (tasks, action) => {
  let newTasks;
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      const newTask = {
        text: action.payload.text,
        id: v4(),
        isCompleted: false,
      };
      // if there is task with such title don't add it
      if (!tasks.find((task) => task.text === newTask.text)) {
        newTasks = [newTask, ...tasks];
        saveState(newTasks);
        return newTasks;
      }

      // else return tasks unmodified
      return tasks;
    case ACTIONS.CHANGE_TITLE:
      newTasks = tasks
        .map((task) =>
          task.id === action.payload.id
            ? {
                id: task.id,
                text: action.payload.text,
                isCompleted: action.payload.isCompleted,
              }
            : task
        )
        .sort((a, b) =>
          a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
        );

      saveState(newTasks);
      return newTasks;
    case ACTIONS.REMOVE_TASK:
      newTasks = tasks.filter((task) => task.id !== action.payload.id);
      saveState(newTasks);
      return newTasks;
    default:
      return tasks;
  }
};
