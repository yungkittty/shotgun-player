import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.div`
  ${({ size, weight, color }) => {
    return `
      margin: 0px;
      padding: 0px;
      font-family: Roboto;
      font-size: ${size}px;
      font-weight: ${weight};
      line-height: 1.5;
      color: ${color};
    `;
  }}
`;

Text.defaultProps = {
  size: 16,
  weight: 400,
  color: "white",
};

Text.propTypes = {
  size: PropTypes.oneOf([
    // eslint-disable-line
    10,
    12,
    16,
    18,
    24,
    32,
  ]),
  weight: PropTypes.oneOf([
    // eslint-disable-line
    400,
    700,
  ]),
  color: PropTypes.oneOf([
    // eslint-disable-line
    "white",
    "grey",
  ]),
};

export default Text;
