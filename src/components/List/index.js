import React, {
  createRef,
  useContext,
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";
import { TaskListContext } from "context/taskList.context";
import Task from "components/Task";

import { StyledHeight, StyledList } from "./styles";

const List = () => {
  const contextValues = useContext(TaskListContext);
  const [height, setHeight] = useState(0);
  const { removeTask, mutateTaskText, taskList } = contextValues;

  const listRef = useRef();

  const computeHeight = () => {
    return listRef.current ? listRef.current.offsetHeight : 0;
  };

  useEffect(() => {
    setHeight(computeHeight());
  }, [taskList]);

  return (
    <StyledList ref={listRef}>
      {taskList.map(({ text, id, isCompleted }) => (
        <Task
          key={id}
          onDelete={removeTask}
          onSave={mutateTaskText}
          isCompleted={isCompleted}
          id={id}
        >
          {text}
        </Task>
      ))}
      <StyledHeight>List height: {height}px</StyledHeight>
    </StyledList>
  );
};

export default List;
