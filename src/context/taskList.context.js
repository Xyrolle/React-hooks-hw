import React, { createContext, useReducer } from "react";
import { getState } from "../utils/localStorage";

const TaskListContext = createContext({});

import { ACTIONS } from "../actions";
import { reducer } from "../rootReducer";

const { Provider } = TaskListContext;

const INITIAL_STATE = getState() || [];

const TaskListProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, INITIAL_STATE);

  const addTask = (text) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text } });
  };

  const mutateTaskText = ({ text, id, isCompleted }) => {
    dispatch({
      type: ACTIONS.CHANGE_TITLE,
      payload: { text, id, isCompleted },
    });
  };

  const removeTask = (id) => {
    dispatch({ type: ACTIONS.REMOVE_TASK, payload: { id } });
  };

  return (
    <Provider value={{ addTask, removeTask, mutateTaskText, taskList: tasks }}>
      {children}
    </Provider>
  );
};

export { TaskListContext, TaskListProvider };
