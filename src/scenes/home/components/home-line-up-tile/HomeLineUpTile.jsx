import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../../components/container";
import Text from "../../../../components/text";
import ToggleButton from "../../../../components/toggle-button";
import HomeTileContainer from "../home-tile-container";
import HomeTileTitle from "../home-tile-title";
import TilePlayer from "./components/tile-player";

const TileFilterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const TileArtistsContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const TileArtistsSquare = styled(Container)`
  width: 8px;
  height: 8px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #fd309a;
`;

const TitleFilterText = styled(Text)`
  margin-right: 10px;
`;

const MIN_TEXT_SIZE = 12;

const MAX_TEXT_SIZE = 18;

const HomeLineUpTile = ({ eventTracks }) => {
  const [eventTracksLiked, setEventTracksLiked] = React.useState(false);
  const [eventTracksLikeable, setEventTracksLikable] = React.useState(false);

  const eventArtists = React.useMemo(
    () =>
      _.chain(eventTracks)
        .map((eventTrack) => eventTrack.track.artists)
        .flatten()
        .value(),
    [eventTracks]
  );

  const eventArtistsWithSize = React.useMemo(
    () =>
      _.map(eventArtists, (eventArtist) => ({
        ...eventArtist,
        size: Math.floor(Math.random() * (MAX_TEXT_SIZE + 1 - MIN_TEXT_SIZE)) + MIN_TEXT_SIZE,
      })),
    [eventArtists]
  );

  const toggleEventTracksLiked = () => {
    setEventTracksLiked((prevEventTracksLiked) => !prevEventTracksLiked);
  };

  return (
    <HomeTileContainer>
      <HomeTileTitle>
        {/* eslint-disable-line */}
        Line Up
      </HomeTileTitle>
      <TileArtistsContainer>
        {_.chain(eventArtistsWithSize)
          .map((eventArtistWithSize) => (
            <Text size={eventArtistWithSize.size}>
              {/* eslint-disable-line */}
              {eventArtistWithSize.name}
            </Text>
          ))
          .reduce(
            (eventArtistsOthers, eventArtist) =>
              !eventArtistsOthers ? (
                eventArtist
              ) : (
                <>
                  {eventArtistsOthers}
                  <TileArtistsSquare />
                  {eventArtist}
                </>
              ),
            undefined
          )
          .value()}
      </TileArtistsContainer>
      <TileFilterContainer>
        <TitleFilterText size={12}>
          {/* eslint-disable-line */}
          Show liked tracks only :
        </TitleFilterText>
        <ToggleButton
          checked={eventTracksLiked}
          checkedColor="#fc0082"
          uncheckedColor="grey"
          onClick={toggleEventTracksLiked}
          disabled={!eventTracksLikeable}
        />
      </TileFilterContainer>
      <TilePlayer
        // eslint-disable-line
        eventTracks={eventTracks}
        eventTracksLiked={eventTracksLiked}
        setEventTracksLiked={setEventTracksLiked}
        setEventTracksLikable={setEventTracksLikable}
      />
    </HomeTileContainer>
  );
};

HomeLineUpTile.propTypes = {
  eventTracks: PropTypes.array.isRequired, // eslint-disable-line
};

export default HomeLineUpTile;
