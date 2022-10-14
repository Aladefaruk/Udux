import React from "react";


const AlbumCover = ({image,name, artists,ind}:{image:string,name:string, artists:string[], ind:number}) => {
    const stye1 = {
      bg1: "linear-gradient(89.79deg, #DDAE45 123.38%, #AB491C -19.39%)",
      bg2: "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
    };
    const style2 = {
      bg1: "linear-gradient(89.79deg, #030304 123.38%, #C61522 -19.39%)",
      bg2: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
    };

    const style3 = {
      bg1: "linear-gradient(89.79deg, #ADC0D1 123.38%, #204F9D -19.39%)",
      bg2: "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
    };
   
  return (
    <div
      style={{
        width: "226px",
        height: "285px",
        position: "relative",
        border: "1px solid #707070",
        margin: "10px",
      }}
    >
      <div style={{ height: "34px", background: "black" }}></div>
      <div
        style={{
          height: "161px",
          background:
            ind === 1 ? stye1.bg1 : ind === 2 ? style2.bg1 : style3.bg1,
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "74px",
          background:
            ind === 1 ? stye1.bg2 : ind === 2 ? style2.bg2 : style3.bg2,
          paddingTop: "15px",
        }}
      >
        <div style={{ width: "80%", padding:"0 20px", marginRight:"20px" }}>
          <div
            style={{
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.04em",
              color: "#fff",
            }}
          >
            {name}
          </div>
          <div
            style={{
              width: "90%",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "12px",
                letterSpacing: "0.04em",
                color: "rgba(255, 255, 255, 0.6)",
                display: "flex",
              }}
            >
              {`${artists.slice(0, 6)} , `}
              {artists.length > 6 ? "..." : ""}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "15px",
          background: "black",
          border: "1px solid #707070",
        }}
      ></div>
      <div
        style={{
          height: "180px",
          width: "185px",
          background: "black",
          position: "absolute",
          top: "15px",
          left: "18.5px",
          border: " 1px solid #707070",
        }}
      >
        <img
          src={image}
          alt=""
          width="162px"
          height="162px"
          style={{ position: "absolute", top: "5px", left: "12px" }}
        />
      </div>
    </div>
  );
};
export default AlbumCover;
