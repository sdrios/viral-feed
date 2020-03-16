// React imports
import React, { Component } from 'react';

import SideNav, {
    SideNavTitle,
    SideNavLink
  } from 'calcite-react/SideNav'


class Sidebar extends Component {
  render() {
    return (
      <div>
            <SideNav>
            <SideNavTitle>Test</SideNavTitle>
            </SideNav>
      </div>
    );
  }
}

export default Sidebar;