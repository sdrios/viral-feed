// React imports
import React from "react";
// Redux imports
import { useSelector } from "react-redux";
import { mapLoaded } from "../redux/reducers/map";
// Component imports
import Map from "./esri/map/Map";
import LoadScreen from "./LoadScreen";
import Nav from "./Nav";
import TweetSidebar from './Sidebar';
import Visualizations from './Visualizations';
import PieChart from './PieChart';
// Styled Components
import styled from "styled-components";

import Panel, {

} from 'calcite-react/Panel'



const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow:hidden;
`;

const RightPanel = styled.div`
 display:flex;
 float: right;
width: 20%;
height: 100%;
padding: 1em;
background-color:black;
overflow:hidden;
`;

const LeftPanel = styled.div`
 display:flex;
 float: left;
width: 30%;
height: 100%;
padding: 1em;
background-color:black;
overflow:hidden;

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
      <ContentContainer>
        <LeftPanel>
          <Panel>
          <Visualizations/>
          <PieChart/>
          </Panel>
        </LeftPanel>
        <Map onMapLoaded={mapLoaded} mapConfig={config.mapConfig} />
        <RightPanel>
          <TweetSidebar>
          </TweetSidebar>
        </RightPanel>
      </ContentContainer>
    </Container>

  );
};

export default Main;



