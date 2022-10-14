import styled from "styled-components";
import { devices } from "./Devices";
import HeroSM from "../assets/HeroSM.svg";
import HeroLG from "../assets/HeroLG.svg";
import Mobile from "../assets/MobileNav.svg"

export const LitleHeader = styled.div`
  text-align: center;
  width: 100%;
  position: "fixed";
  top: 0;
  left: 0;
  background-color: rgba(15, 15, 15, 0.9);
  display: flex;
  justify-content: evenly;
  align-items: center;
  padding: 18px 0;
  @media ${devices.laptop} {
    position: sticky;
    width: 231px;
    padding: 18px 32px;
    background: rgba(15, 15, 15, 0.9);
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #d9d9d9;
`;

export const ProfileImage = styled.img`
  width: 62px;
  height: 62px;
  margin-right: 21px;
  borderradius: 100%;
`;

export const OtherS = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgba(15, 15, 15, 1);
  @media ${devices.laptop} {
    width: (100%- 231px);
    height: 100%;
    background: black;
  }
`;

export const SideNav = styled.div`
  width: 227px;
  height: 100%;
  display: none;
  @media ${devices.laptop} {
    width: (295px);
    position: fixed;
    height: 100%;
    display: block;
    overflow-y: scroll;
    padding: 38px 34px;
    margin-bottom: 50px;
    &::-webkit-scrollbar {
      width: 3px;
      outline: none;
    }

    &::-webkit-scrollbar-thumb {
      background: #fbba12;
      width: 3px;
      outline: none;
    }
  }
`;
export const HeroImage = styled.div`
  width: 100%;
  background-image: url(${HeroSM});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 175px;
  
  @media ${devices.laptop} {
    background-image: url(${HeroLG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 255px;
  }
`;

export const LayOut = styled.div`
  width: 100%;
  display: block;

  @media ${devices.laptop} {
    width: (100%-232px);
    display: flex;
  }
`;

export const ResponsiveLaptop = styled.div`
  display: none;
  @media ${devices.laptop} {
    display: block;
  }
`;

export const ResponsiveMobile = styled.div`
  display: block;
  @media ${devices.laptop} {
    display: none;
  }
`;

export const Template = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const NoFlex = styled.div`
  display: flex;
  overflow:hidden;
  @media ${devices.laptop} {
    width:"100%"
    display: flex;
    flex-wrap:wrap;
    overflow-y:hidden;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow:hidden;
  width:100%;
  background-image: url(${Mobile});
  background-color:black;
  padding:20px 0;
  position:fixed;
  bottom:0;

  
  @media ${devices.laptop} {
    display: none;
  }
`;

export const Titles = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color:#FFFFFF;
  @media ${devices.laptop} {
    font-size: 20px;
    line-height: 34px;
  }
`;