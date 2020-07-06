import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ size, ...others }) => (
  <FontAwesomeIcon
    // eslint-disable-next-line
    {...others}
    style={{
      width: size,
      height: size,
    }}
  />
);

// This should defined standard values!

Icon.defaultProps = {
  size: undefined,
};

Icon.propTypes = {
  size: PropTypes.number,
};

export default Icon;
