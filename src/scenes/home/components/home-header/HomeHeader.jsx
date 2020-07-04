import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../../components/container";
import Text from "../../../../components/text";

// This shouldn't have to worry of not getting images!

const HeaderContainer = styled(Container)`
  ${({ eventImages }) => {
    const backgroundStyle = `
      background-image: linear-gradient(rgba(26, 27, 38, 0.2), rgb(26, 27, 38)), url(${
        ((eventImages || [])[0] || {}).url
      });
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    `;

    return `
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      height: 300px;
      padding-left: 10%;
      padding-right: 10%;
      ${eventImages ? backgroundStyle : ""}
      background-color: #1a1b26;
  `;
  }}
`;

const HeaderFooter = styled(Container)`
  flex-shrink: 0;
  width: 100vw;
  height: 100px;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #1a1b26;
`;

const HomeHeader = ({ eventName, eventImages }) => {
  return (
    <>
      <HeaderContainer eventImages={eventImages}>
        <Text size={32} weight={700}>
          {/* eslint-disable-line */}
          {eventName}
        </Text>
        <Text size={16} color="grey">
          {/* eslint-disable-line */}
          Mon 6 July
        </Text>
      </HeaderContainer>
      <HeaderFooter />
    </>
  );
};

HomeHeader.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventImages: PropTypes.array.isRequired, // eslint-disable-line
};

export default HomeHeader;
