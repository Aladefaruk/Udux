import styled from "styled-components";
import { devices } from "./Devices";
import HeroSM from '../assets/HeroSM.svg';
import HeroLG from '../assets/HeroLG.svg'
import { constants } from "fs/promises";


export const LitleHeader = styled.div`
  text-align: center;
  width: 100%;
  position: "fixed";
  top: 0;
  left: 0;
  background-color: rgba(15, 15, 15, 0.9);
  display: flex;
  justify-content: evenly;
  padding: 18px 32px;
  align-items: center;
  @media ${devices.laptop} {
    width: 231px;
    // position: fixed;
    // height: 100%;
    // top: 0;
    // left: 0;

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
  height:100%;
  display:block;
  background-color: rgba(15, 15, 15, 1);
  @media ${devices.laptop} {
    width: (100%- 231px);
    height:100%;
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
    margin-bottom:50px;

    &::-webkit-scrollbar {
      width: 3px;
      outline:none;
    }    
    
    &::-webkit-scrollbar-thumb {
      background: #fbba12;
      width: 3px;
      outline:none;
    }
  }
`;
export const HeroImage = styled.div`
  width: 100%;
  background-image: url(${HeroSM});
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
  display:block;
 
  @media ${devices.laptop} {
    width:(100%-232px);
    display:flex;
  }
`;

export const ResponsiveLaptop = styled.div`
  display: none;
   @media ${devices.laptop} {
    display:block
  }
`;

export const ResponsiveMobile = styled.div`
  display: block;
   @media ${devices.laptop} {
    display:none
  }
`


