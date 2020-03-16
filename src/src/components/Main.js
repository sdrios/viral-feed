// React imports
import React from "react";

// Redux imports
import { useSelector } from "react-redux";
import { mapLoaded } from "../redux/reducers/map";

// Component imports
import Map from "./esri/map/Map";
import LoadScreen from "./LoadScreen";
import Nav from "./Nav";
import Sidebar from './Sidebar'
// import "../styles/index.css"

// Styled Components
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const MapWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  z-index: 0;
  overflow: hidden;
  margin-right:160px
`;

const RightPanel = styled.div`
height: 100%; 
width: 160px; 
position: fixed; 
z-index: 1; 
top: 0; 
right: 0;
background-color: #0000; 
overflow-x: hidden;
padding-top: 20px
`;

// Component definition
const Main = props => {
  const config = useSelector(state => state.config);
  const isMapLoaded = useSelector(state => state.map.loaded);

  return (
    <Container>
      <LoadScreen isLoading={!isMapLoaded} />
      <Nav>    
      </Nav>
      <MapWrapper>
        <Map onMapLoaded={mapLoaded} mapConfig={config.mapConfig} />
        </MapWrapper>
        <RightPanel>
          <Sidebar>
          </Sidebar>
          </RightPanel>
    </Container>
  );
};

export default Main;