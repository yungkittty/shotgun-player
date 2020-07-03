import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../../components/container";
import Text from "../../../../components/text";

const TitleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;

const TitleOutline = styled(Container)`
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgb(108, 19, 221),
    rgb(253, 48, 154)
  );
`;

const HomeTileTitle = ({ children }) => (
  <TitleContainer>
    <Text size={24} weight={700}>
      {/* eslint-disable-line */}
      {children}
    </Text>
    <TitleOutline />
  </TitleContainer>
);

HomeTileTitle.propTypes = { children: PropTypes.node.isRequired };

export default HomeTileTitle;
