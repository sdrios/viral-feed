// // React imports
import React, { Component } from 'react';
// import { Timeline } from 'react-twitter-widgets';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Tweets extends Component {
    render() {
        return (
            <div>
                <Timeline
                    dataSource={{
                        sourceType: "https://platform.twitter.com/widgets.js",
                        screenName: 'twitterdev'
                    }}
                    options={{
                        username: 'TwitterDev',
                        height: '400',
                        width: '100'
                    }}
                    // onLoad={() => console.log('Timeline is loaded!')}
                />
            </div>
        );
    }
}

export default Tweets;