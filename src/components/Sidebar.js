// React imports
import React, { Component } from 'react';
import Panel, {
  PanelTitle
} from 'calcite-react/Panel'

import { TwitterTimelineEmbed, TwitterHashtagButton } from 'react-twitter-embed';

class TweetSidebar extends Component {
  render() {
    return (
     
        <Panel>  
        <PanelTitle>COVID-19 Feed</PanelTitle> 
        <TwitterHashtagButton tag="COVID19" options={{ size: 'large', screenName: null, buttonHashtag: null }} />
        <div className="selfCenter" style={{width: 250,height: 510}}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="WHO"
          theme='dark'
          noHeader
          noFooter
          noScrollbar
          autoHeight
        />
        </div>
    </Panel>
    );
  }
}

export default TweetSidebar;
