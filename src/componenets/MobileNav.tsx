import React from 'react'
import { MobileNav as Nav} from '../style/Styles'
import {Tabs} from "../assets/Tabs/index"

export default function MobileNav() {
  return (
    <Nav>
      <img src={Tabs.Home} width="35px" height="39px" />
      <img src={Tabs.Discover} width="35px" height="39px" />
      <img src={Tabs.Lib} width="35px" height="39px" />
      <img src={Tabs.MyPlay} width="35px" height="39px" />
    </Nav>
  );
}
