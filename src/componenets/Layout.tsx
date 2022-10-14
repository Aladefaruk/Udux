import React from 'react'
import { LayOut } from '../style/Styles'
import LittleHeader from './LittleHeader';
import Nav from './Nav';
import OtherSide from './OtherSide';
import { Template } from '../style/Styles';
import MobileNav from './MobileNav';

export default function Layout({App}:{App:any}) {
  return (
    <LayOut >
     
      <div style={{ display: "block" }}>
        <LittleHeader />
        <Nav/>
      </div>
    
      <div style={{display:"block"}}>
        <OtherSide App={App} />
      </div>
      <MobileNav/>
      </LayOut>
    
  );
}




