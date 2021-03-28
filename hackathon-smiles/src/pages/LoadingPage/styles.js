import styled from "styled-components";

export const PurpleBackground = styled.header`
  background-color: #af69c8;
  height: 27.2vh;
  padding: 20px;
  border-radius: 0px 0px 26px 26px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
`;
export const StarImg = styled.img`
  margin-right: 5px;
`;

export const StarSpan = styled.span`
  color: #f4f2f2;
`;

export const StarDiv = styled.div`
  display: flex;
`;

export const ImagemPerfil = styled.div`
  border-radius: 50%;
  background-color: #f4f2f2;
  width: 45px;
  height: 45px;
  display: flex;
  place-items: center;
  place-content: center;
`;

export const NomePerfil = styled.div`
margin-right: 110px;
color: #FFFFFF;
font-size:24px;
`; 

export const ImagePng = styled.img`
  border-radius: 50%;
  width: 26px;
  height: 41px;
`;

export const Level = styled.div`
  border-radius: 50%;
  background-color: #f4f2f2;
  display: flex;
  place-content: center;
  place-items: center;
  width: 123px;
  height: 123px;
  z-index: 10;
  margin-right: auto;
  margin-left: auto;
`;

export const GreenBorder = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  border-radius: 50%;
  background-color: #79CC52;
  display: flex;
  place-content: center;
  place-items: center;
  width: 145px;
  height: 145px;
  margin: 0 auto;
  z-index: 10;
`;

export const NumberOne = styled.img`
  width: 22px;
  height: 32px;
  margin: 10px 10px 10px 4px;
`;

export const LeftArrow = styled.div`
  position: relative;
  top: 0;
  left: 5;
  z-index: 50;
  height: 12vh;
  padding-left: 15px;
`;

export const MainContainer = styled.main`
  background-color: #fcfcfc;
  width: 85vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: -80px;
  border-radius: 26px;
  z-index: 9;
  padding-top: 15px;
  padding-bottom: 70px;
`;

export const WelcomeP = styled.p`
  text-align: center;
  font-size: 20px;
  color: #363636;
  padding-top: 20px;
  margin: 0 15px;
`;

export const Alerta = styled.div`
  display: flex;
  place-content: center;
  text-align: center;
  margin-top: 10px;
`

export const AlertIcon = styled.img`
  margin: 0 10px 0 10px;
`;

export const LoadingIcon = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  margin: 0 auto;
  padding-top: 80px;
  width: 70px;
  height:70px;
`

export const Footer = styled.footer`
  background-color: #f6f6f6;
  bottom: 0;
  padding: 10px;
  margin-top: 20px;
  position: fixed;
  width: 100vw;
  ul {
    display: flex;
    justify-content: space-evenly;
  }
  ul li {
    display: inline-block;
    color: #828282;
    text-align: center;
    font-size: 14px;
  }

  .options {
    display: inline-block;
    margin-right: 17px;
  }
`;
