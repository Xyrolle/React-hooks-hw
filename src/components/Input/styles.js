import styled from 'styled-components';
import { palette } from 'styled-theme';

export const StyledInput = styled.input.attrs(() => ({ type: 'text' }))`
    appearance: none;
    border: 1px solid gray;
    border-radius: 2px;
    background-color: ${palette('grayscale', 5)};
    box-shadow: none;
    outline: none;
    padding: 4px 12px;
    margin: 0;
`;

export const StyledLabel = styled.label`
    min-width: 220px;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font: 14px/16px Arial, sans-serif;
    color: gray;
    cursor: pointer;

    & span {
        padding-left: 12px;
    }

    & + input {
        margin-top: 4px;
    }
`;