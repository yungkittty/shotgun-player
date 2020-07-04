import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import HomeHeader from "./components/home-header";
import HomeTicketTile from "./components/home-ticket-tile";
import HomeLineUpTile from "./components/home-line-up-tile";
import useEvent from "../../hooks/use-event";

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const HomeBodyContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 50px;
  padding-left: 10%;
  padding-right: 10%;
`;

const Home = () => {
  const {
    // eslint-disable-line
    loading,
    name: eventName,
    images: eventImages,
    tracks: eventTracks,
  } = useEvent("7Cy3wdbRlZqW22fUDGWpwk");

  if (loading) return null;

  return (
    <HomeContainer>
      <HomeHeader
        // eslint-disable-line
        eventName={eventName}
        eventImages={eventImages}
      />
      <HomeBodyContainer>
        <HomeTicketTile />
        <HomeLineUpTile eventTracks={eventTracks} />
      </HomeBodyContainer>
    </HomeContainer>
  );
};

export default Home;
