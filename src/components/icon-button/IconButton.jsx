import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Icon from "../icon";

const IconButton = ({ style, onClick, ...others }) => (
  <Button style={style} onClick={onClick}>
    {/* eslint-disable-next-line */}
    <Icon {...others} />
  </Button>
);
IconButton.defaultProps = {
  style: undefined,
  onClick: undefined,
};

IconButton.propTypes = {
  style: PropTypes.object, // eslint-disable-line
  onClick: PropTypes.func,
};

export default IconButton;
