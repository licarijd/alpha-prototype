import React from "react";
import Notebook20 from "@carbon/icons-react/lib/notebook/20";
import HealthCross20 from "@carbon/icons-react/lib/health-cross/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";

import "carbon-components/css/carbon-components.css"

const NavHeader = () => (
  <div className="container">
    <Header aria-label="One Athlete [ALPHA]">
      <HeaderName href="#" prefix="One Athlete">
        ALPHA
      </HeaderName>
      <HeaderNavigation aria-label="One Athlete [ALPHA]">
      <HeaderMenu aria-label="Tests" menuLinkName="Tests">
          <HeaderMenuItem href="#">This Month</HeaderMenuItem>
          <HeaderMenuItem href="#">This Week</HeaderMenuItem>
          <HeaderMenuItem href="#">Today</HeaderMenuItem>
        </HeaderMenu>
        <HeaderMenuItem href="#">Custom Trends</HeaderMenuItem>
        <HeaderMenuItem href="#">Action Items</HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Tests" onClick={() => {}}>
          <Notebook20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Action Items" onClick={() => {}}>
          <HealthCross20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </div>
);

export default NavHeader
