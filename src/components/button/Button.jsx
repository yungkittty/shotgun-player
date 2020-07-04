import styled from "styled-components";

const Button = styled.button`
  display: flex;
  margin: 0px;
  padding: 0px;
  border: unset;
  border-radius: 8px;
  outline: unset;
  cursor: pointer;
  background-color: unset;

  &:hover {
    filter: brightness(105%);
  }
`;

export default Button;
