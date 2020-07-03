import styled from "styled-components";

const Button = styled.button`
  margin: 0px;
  padding: 0px;
  border: unset;
  border-radius: 8px;
  outline: unset;
  cursor: pointer;

  &:hover {
    filter: brightness(105%);
  }
`;

Button.defaultProps = {};

Button.propTypes = {};

export default Button;
