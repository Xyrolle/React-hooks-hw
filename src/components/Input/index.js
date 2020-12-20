import React, { useCallback } from "react";
import { StyledLabel, StyledInput } from "./styles";

const Input = (props) => {
  const onInputChange = useCallback(
    ({ currentTarget: { value } }) => props.onChange(value),
    []
  );

  const { value, placeholder, label, disabled = false, type = "text" } = props;

  return (
    <StyledLabel>
      {label && <span>{label}</span>}
      <StyledInput
        autoFocus={true}
        {...{ value, placeholder, type, disabled, onChange: onInputChange }}
      />
    </StyledLabel>
  );
};

export default Input;
