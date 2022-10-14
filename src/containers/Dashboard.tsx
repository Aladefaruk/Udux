import React from "react";
import Template from "./Template";
import Left from "../assets/Left.svg";
import Righ from "../assets/Right.svg";
import { Tabs } from "../assets/Tabs";
import { HeroImage, ResponsiveLaptop, ResponsiveMobile,NoFlex, Titles } from "../style/Styles";
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
        <div
          style={{
            display: "flex",
            margin: "20px 10px",
            justifyContent: "space-between",
          }}
        >
          <Titles>Welcome Back!</Titles>
          <ResponsiveMobile>
            <span
              style={{
                color: "rgba(217, 217, 217, 0.9)",
                paddingTop: "10px",
                fontSize: "12px",
              }}
            >
              See More
            </span>
          </ResponsiveMobile>
        </div>
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

      <div style={{ cursor: "pointer" }}>
        <div
          style={{
            display: "flex",
            margin: "20px 10px",
            justifyContent: "space-between",
          }}
        >
          <Titles>Cheers to the Weekend </Titles>
          <ResponsiveMobile>
            <span
              style={{
                color: "rgba(217, 217, 217, 0.9)",
                paddingTop: "10px",
                fontSize: "12px",
              }}
            >
              See More
            </span>
          </ResponsiveMobile>
        </div>
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
