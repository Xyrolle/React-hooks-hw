import React, { useState, useContext } from "react";
import Input from "components/Input";
import { TaskListContext } from "../../context/taskList.context";

import { StyledForm, StyledAddButton } from "./styles";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const contextValues = useContext(TaskListContext);
  const { addTask } = contextValues;

  const onChange = (value) => {
    setInputValue(value);
  };

  const addTaskFromForm = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTask(inputValue);
      setInputValue("");
    }
  };

  // const isTaskExists = this.props.taskList.some(
  //   ({ text }) => inputValue === text
  // );

  return (
    <StyledForm onSubmit={addTaskFromForm}>
      <Input value={inputValue} onChange={onChange} />
      <StyledAddButton disabled={!inputValue}>ADD TASK</StyledAddButton>
    </StyledForm>
  );
};

// export default (componentProps) => (
//   <TaskListConsumer>
//     {(props) => <Form {...props} {...componentProps} />}
//   </TaskListConsumer>
// );

export default Form;
