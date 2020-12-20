import React, { Fragment, useContext, useState, useMemo } from "react";
import Input from "components/Input";
import { TaskListContext } from "../../context/taskList.context";

import {
  StyledEdit,
  StyledTask,
  StyledDelete,
  StyledText,
  StyledButton,
  StyledEditForm,
  StyledButtonsWrapper,
} from "./styles";

const Task = ({ id, children, isCompleted, onDelete, onSave }) => {
  const [editValue, setEditValue] = useState(children);
  const contextValues = useContext(TaskListContext);
  const { taskList } = contextValues;
  const [isEdit, setIsEdit] = useState(false);

  const onEditChange = (value) => setEditValue(value);

  const onEditPress = () => {
    setIsEdit(true);
    setEditValue(children);
  };

  const isTaskExists = useMemo(
    () => taskList.some(({ text }) => editValue === text),
    [taskList, editValue]
  );

  const onSaveEdit = (e) => {
    e.preventDefault();

    if (!isTaskExists && editValue) {
      onSave({ id, text: editValue, isCompleted });
      setEditValue("");
      setIsEdit(false);
    }
  };

  const onCheck = () => {
    onSave({ id, text: children, isCompleted: !isCompleted });
  };

  return (
    <StyledTask>
      {isEdit ? (
        <StyledEditForm onSubmit={onSaveEdit} onBlur={onSaveEdit}>
          <Input
            onChange={onEditChange}
            value={editValue}
            placeholder="Task must contain title"
          />
        </StyledEditForm>
      ) : (
        <Fragment>
          <input type="checkbox" checked={isCompleted} onChange={onCheck} />
          <StyledText isCompleted={isCompleted}>{children}</StyledText>
          <StyledButtonsWrapper>
            <StyledButton onClick={onEditPress}>
              <StyledEdit />
            </StyledButton>
            <StyledButton onClick={() => onDelete(id)}>
              <StyledDelete />
            </StyledButton>
          </StyledButtonsWrapper>
        </Fragment>
      )}
    </StyledTask>
  );
};

export default Task;
