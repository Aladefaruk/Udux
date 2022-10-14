import React from "react";
import Template from "./Template";
import Left from "../assets/Left.svg";
import Righ from "../assets/Right.svg";
import { Tabs } from "../assets/Tabs";
import { HeroImage, ResponsiveLaptop, ResponsiveMobile,NoFlex } from "../style/Styles";
import AlbumCover from "../componenets/AlbumCover";
import Burna from "../assets/Album/brnaBoy.svg";
import Lo from "../assets/Album/lojay.svg";
import Koffee from "../assets/Album/koffee.svg";

const App = () => {
  const artistList = [
    "Burna Boy",
    "Oxlade",
    "Davido",
    "Tems",
    "Wizkid",
    "Tiwa Savage",
    "Skepta",
  ];
  return (
    <div
      style={{
        padding: "0 10px",
      }}
    >
      <ResponsiveLaptop>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            height: "100px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={Left} alt="" width="40px" height="40px" />
            <img
              src={Righ}
              alt=""
              width="40px"
              height="40px"
              style={{ padding: "0px 8px" }}
            />
          </div>

          <img src={Tabs.Search} alt="" style={{ marginLeft: "10%" }} />
        </div>
      </ResponsiveLaptop>
      <HeroImage />
      <div style={{ cursor: "pointer" }}>
        <h1 style={{ color: "white" }}>Welcome Back!</h1>
        {/* <div style={{ display: "flex", flexWrap: "wrap" }}> */}
          <NoFlex>
          {[1, 2, 3, 1, 2, 3].map((ind, index) => (
            <AlbumCover
              key={ind}
              name={`Daily Mix ${ind}`}
              image={ind === 1 ? Burna : ind === 2 ? Lo : Koffee}
              artists={artistList}
              ind={ind}
            />
          ))}
        </NoFlex>
      </div>

      <div style={{ marginTop: "40px", cursor: "pointer" }}>
        <h1 style={{ color: "white" }}>Cheers to the Weekend </h1>
        <NoFlex>
          {[1, 2, 3, 1, 2, 3].map((ind, index) => (
            <AlbumCover
              key={ind}
              name={`Daily Mix ${ind}`}
              image={ind === 1 ? Burna : ind === 2 ? Lo : Koffee}
              artists={artistList}
              ind={ind}
            />
          ))}
        </NoFlex>
      </div>
    </div>
  );
};
const Dashboard = () => {
  return <Template App={App} />;
};
export default Dashboard;
