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

export const Arrow = styled.div`
  position: relative;
  z-index: 50;
  height: 12vh;
  padding-right: 80%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomeP = styled.p`
  text-align: center;
  font-size: 24px;
  color: #363636;
  padding-top: 20px;
  margin: 0 15px;
`;

export const StarsIcon = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  margin-top: 20px;
  
`
export const AloBahia = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
  font-size: 14px;
`
export const Descricao = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  flex-direction: column;
  width: 100%;
  text-align: left;
  font-size: 15px;
`

export const HotelName = styled.p`
  font-size: 12px;
  padding-bottom: 10px;
`

export const Diarias = styled.p`
  font-size: 11px;
  padding-bottom: 5px;
`

export const Preco = styled.p`
  font-size:18px;
  color: #FF7020;
  margin-left: 5px;
`
export const MilhasText = styled.span`
  font-size: 8px;
  color: #FF7020;
  display: block;
`
export const PorDiaria = styled.span`
  font-size: 8px;
  display: block;
`
export const AreaPreco = styled.div`
  display: flex;
`
export const MilhasPorDiaria = styled.div`
  margin-left: 5px;
`

export const Continuar = styled.button`
  width: 257px;
  height: 38px;
  border-radius: 8px;
  background-color: #663399;
  border: 0;
  color: #FFFFFF;
  margin-top: 10px;
  font-size: 14px;
`
export const Card = styled.div`
    width: 136px;
    height: 255px;
    display: flex;;
    margin: 30px 5px;
    justify-content: center;
    border-radius: 5px;
    padding:2px;
    cursor: pointer;

    &:hover{
      background: linear-gradient(to top, #dbd9d9, white);
  transition:1s all;
    }

    &:checked{
      background: linear-gradient(to top, #dbd9d9, white);
  transition:1s all;
    }
`

export const Cards = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center
`
export const FotoHotelEsquerda = styled.img`
  width: 100%;
  height: 93px;
  margin: -1;
  /* border: 1px solid black; */
`

export const FotoHotelDireita = styled.img`
  width: 100%;
  height: 89px;
  /* border: 1px solid black; */
  padding: 2px;
`

export const Link = styled.a`
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
  text-decoration: underline;
  cursor: pointer;
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
    cursor: pointer;
  }
`;
