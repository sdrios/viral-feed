// React imports
import React from "react";
// Redux imports
import { useSelector } from "react-redux";
import { mapLoaded } from "../redux/reducers/map";
// Component imports
import Map from "./esri/map/Map";
import LoadScreen from "./LoadScreen";
import Nav from "./Nav";
import TweetSidebar from './Sidebar'
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


const RightPanel = styled.div`
height: 100%; 
width: 20%; 
float:right;
position: fixed; 
z-index: 1; 
top: 0; 
right: 0;
background-color: #0000; 
overflow-x: hidden;
padding-top: 60px;
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
        <Map onMapLoaded={mapLoaded} mapConfig={config.mapConfig} />
      <RightPanel>
        <TweetSidebar>
        </TweetSidebar>
      </RightPanel>
    </Container>

  );
};

export default Main;



