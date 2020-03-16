// React imports
import React, { Component } from 'react';

import SideNav, {
  SideNavTitle,
  SideNavLink
} from 'calcite-react/SideNav'

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <SideNav>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="CDCgov"
            theme='dark'
            options={{ height: 350 }}
          />
                    <TwitterTimelineEmbed
            sourceType="profile"
            screenName="WHO"
            theme='dark'
            options={{ height: 350 }}
          />
        </SideNav>
      </div>
    );
  }
}

export default Sidebar;

// // React imports
// import React, { Component } from 'react';

// import SideNav, {
//     SideNavTitle,
//     SideNavLink
//   } from 'calcite-react/SideNav'


// class Sidebar extends Component {
//   render() {
//     return (
//       <div>
//             <SideNav>
//             <SideNavTitle>Twitter</SideNavTitle>
//             </SideNav>
//       </div>
//     );
//   }
// }

// export default Sidebar;