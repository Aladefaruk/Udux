
import { SideNav } from "../style/Styles";
import Bg from "../assets/leftBackground.svg";
import Tab from "./Tab";
import { Tabs } from "../assets/Tabs/index";

const Nav = () => {
  const Genres = [
    "Riffs & Runs",
    "African Heat",
    "Gidi Nights",
    "Running out of Playlists name",
    "Saturday was a Good Day",
    "Riffs & Runs",
    "African Heat",
    "Gidi Nights",
    "Running out of Playlists name",
    "Saturday was a Good Day",
    "Riffs & Runs",
    "African Heat",
    "Gidi Nights",
    "Running out of Playlists name",
    "Saturday was a Good Day",
  ];
  return (
    <SideNav
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundColor: "rgba(15, 15, 15, 1)",
      }}
    >
       
      <div style={{ marginBottom: "20px" }}>
        <Tab image={Tabs.Home} name="Home" />
        <Tab image={Tabs.Discover} name="Discover" />
      </div>

      <div
        style={{
          marginBottom: "20px",
          border: "0.5px solid #282828",
          borderRight: "0",
          borderLeft: "0",
        }}
      >
        <Tab image={Tabs.Lib} name="Your Library" />
        <Tab image={Tabs.Liked} name="Liked Songs" />
        <Tab image={Tabs.Recent} name="Recently Played" />
        <Tab image={Tabs.CreatePlay} name="Create Playlist" />
        <div style={{ marginTop: "40px" }}>
          <Tab image={Tabs.MyPlay} name="My Playlists" />
        </div>
      </div>

      <div style={{marginBottom:"300px"}}>
        {Genres.map((gen, index) => (
          <p
            key={index}
            style={{
              color: "#D9D9D9",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "lighter",
              padding: "0 10px",
            }}
          >
            {gen.slice(0, 26)}
            {gen.length > 26 ? "..." : ""}
          </p>
        ))}
      </div>
    </SideNav>
  );
};

export default Nav;
