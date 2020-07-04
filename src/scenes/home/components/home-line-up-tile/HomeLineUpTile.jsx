import React from "react";
import PropTypes from "prop-types";
import HomeTileContainer from "../home-tile-container";
import HomeTileTitle from "../home-tile-title";
import TilePlayer from "./components/tile-player";

const HomeLineUpTile = ({ eventTracks }) => (
  <HomeTileContainer>
    <HomeTileTitle>
      {/* eslint-disable-line */}
      Line Up
    </HomeTileTitle>
    <TilePlayer eventTracks={eventTracks} />
  </HomeTileContainer>
);

HomeLineUpTile.propTypes = {
  eventTracks: PropTypes.array.isRequired, // eslint-disable-line
};

export default HomeLineUpTile;
