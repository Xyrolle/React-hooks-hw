import React from "react";

import { getState } from "utils/localStorage";

import List from "components/List";
import Form from "components/Form";

import { TaskListProvider } from "../../../context/taskList.context";

import { StyledWrapper } from "./styles";

const HomePage = () => {
  return (
    <TaskListProvider>
      <StyledWrapper>
        <Form />
        <List />
      </StyledWrapper>
    </TaskListProvider>
  );
};

export default HomePage;
