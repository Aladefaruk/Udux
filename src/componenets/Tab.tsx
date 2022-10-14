import {  Text } from "../style/Styles";
import {Tabs} from "../assets/Tabs/index"

const Tab = ({ image, name }: { image: string; name: string }) => {
  return (
    <div style={{ display: "flex", justifyItems: "center", cursor: "pointer" }}>
      <img src={image} alt={name} style={{ padding: "0px 10px" }} />
      <Text style={{ color: (name === "Liked Songs")? "#FBBA12":"" }}>{name}</Text>
      {(name === "Liked Songs" || name === "My Playlists") && (
        <img
          src={
            name === "Liked Songs"
              ? Tabs.LikedSpeaker
              : name === "My Playlists"
              ? Tabs.Search
              : ""
          }
          alt=""
          style={{
            marginLeft:
              name === "Liked Songs"
                ? "10px"
                : name === "My Playlists"
                ? "80px"
                : "0",
          }}
        />
      )}
    </div>
  );
};

export default Tab;
