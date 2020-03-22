// React imports
import React, { Component } from 'react';
import Panel, {
  PanelTitle,
  PanelText
} from 'calcite-react/Panel'


import { TwitterTimelineEmbed, TwitterHashtagButton } from 'react-twitter-embed';

class TweetSidebar extends Component {
  render() {
    return (
      <Panel>
        <PanelTitle>WHO Updates</PanelTitle>       
         <TwitterHashtagButton tag="COVID19" options={{ size: 'large', screenName: null, buttonHashtag: null }} />
        <TwitterTimelineEmbed
          sourceType="timeline"
          screenName="WHO"
          theme='dark'
          noHeader
          noFooter
          noScrollbar
          options={{ height: 600, tweetLimit:50 }}
        />
      </Panel>

    );
  }
}

export default TweetSidebar;
