// React imports
import React from "react";

// ESRI ArcGIS API
import { loadMap } from "../../../utils/map";

// Styled Components
import styled from "styled-components";

// const Container = styled.div`
//   height: 100%;
//   width: 100%;
// `;


const Container =styled.div`
height: 100%;
margin-right: 160px
`;

// Component
const Map = props => {
  // set an ID for the map to attach to
  const containerID = "map-view-container";

  // load map with config properties
  loadMap(containerID, props.mapConfig).then(() => {
    // call the map loaded event when we get the map view back
    props.onMapLoaded();
  });

  // Comopnent template
  return <Container id={containerID}>
  </Container>
};

export default Map;
