import React from 'react'
import LittleHeader from '../componenets/LittleHeader'
import Nav from '../componenets/Nav' 
import OtherSide from '../componenets/OtherSide'
import Layout from '../componenets/Layout'

const Template=({App}:{App:any})=> {
  return (
    <div >
      <Layout App={App}/>
    </div>
  );
}
export default Template 