import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button";
import Container from "../container";

const ButtonContainer = styled(Button)`
  ${({ checked, checkedColor, uncheckedColor, disabled }) => {
    return `
      display: flex;
      flex-direction: row;
      width: 35px;
      height: 20px;
      border-radius: 10px;
      ${disabled ? "cursor: unset;" : ""}
      background-color: ${checked ? checkedColor : uncheckedColor};
      transition: background-color 0.1s ease;
    `;
  }}
`;

const ButtonDot = styled(Container)`
  ${({ checked }) => {
    return `
      position: relative;
      left: ${!checked ? "0" : "15"}px;
      transition: left 0.1s ease;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: white;
    `;
  }}
`;

const ToggleButton = ({
  // eslint-disable-next-line
  className,
  checked,
  checkedColor,
  uncheckedColor,
  style,
  onClick,
  ...others
}) => (
  <ButtonContainer
    // eslint-disable-next-line
    {...others}
    checked={checked}
    checkedColor={checkedColor}
    uncheckedColor={uncheckedColor}
    onClick={onClick}
  >
    <ButtonDot checked={checked} />
  </ButtonContainer>
);

ToggleButton.defaultProps = {
  className: undefined,
  style: undefined,
};

ToggleButton.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  checkedColor: PropTypes.string.isRequired,
  uncheckedColor: PropTypes.string.isRequired,
  style: PropTypes.object, // eslint-disable-line
  onClick: PropTypes.func.isRequired,
};

export default ToggleButton;
