import React from 'react'
import { useHistory, history } from "react-router-dom";
import {
  PurpleBackground,
  TopBar,
  ImagemPerfil,
  StarImg,
  StarSpan,
  MainContainer,
  WelcomeP,
  StarDiv,
  Card,
  Footer,
  ImagePng,
  LeftArrow,
  Level,
  NumberOne,
  GreenBorder,
  NomePerfil,
  CardIcon,
  MoneyBagText,
  PurpleArrow
} from "./styles";
import star from "../../assets/img/star 1.png";
import profile from "../../assets/img/profile-pic.png";
import arrow from "../../assets/img/arrow.png";
import numberOne from "../../assets/img/numberOne.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import menu from '../../assets/img/menu.png';
import PositiveImage from '../../assets/img/positive-vote.png'
import negativeImage from '../../assets/img/negative-vote.png'

const Remember = () => {
  const history = useHistory();

  const goToHomepage = () => {
    history.replace("/")
}

   const goToProfile = () => {
        history.push("/your-travels")
    }     

const goToMap = () => {
        history.replace("/map")
    }
const goToRewardsList = () => {
  history.replace('/rewards-list')
}
  const voltar = () => {
    history.replace("/max-value")
  }
  const hotelSugestao = () => {
    history.push("/hotel-suggestions")
  }
  return (
    <div className="App">
      <PurpleBackground>
        <TopBar>
          <ImagemPerfil>
            <ImagePng src={profile} alt={'profile'} />
          </ImagemPerfil>
          <NomePerfil>
            Maria
          </NomePerfil>
          <StarDiv>
            <div>
              <StarImg src={star} alt={'star'} />
            </div>
            <StarSpan>150</StarSpan>
          </StarDiv>
        </TopBar>
        <GreenBorder>
          <Level><NumberOne src={numberOne} alt={'numberone'} /></Level>
        </GreenBorder>
      </PurpleBackground>
      <MainContainer>
      <LeftArrow className="cursorPointer" onClick={voltar}>
          <img src={arrow} alt={'arrow'} />
        </LeftArrow>
        <WelcomeP>Vai utilizar milhas<br/>nas diárias?</WelcomeP>
        <Card onClick={hotelSugestao} className="cursorPointer">
          <img src={PositiveImage} />
          <p>Sim</p>
        </Card>
        <Card>
          <img src={negativeImage} />
          <p>Não</p>
        </Card>
        
      </MainContainer>
      <Footer>
        <ul>
          <li onClick={goToHomepage}>
            <div className="options">
              <img width="13px" src={menu} alt={'icon'} /> <br />
              Fases
            </div>
          </li>
          <li onClick={goToRewardsList}>
            <div className="options">
              <FontAwesomeIcon icon={faStar} alt={'icon'} /><br />
              Prêmios
            </div>
          </li>
          <li>
            <div className="options">
              <FontAwesomeIcon icon={faMap} alt={'icon'} /><br />
              Mapa
            </div>
          </li>
          <li onClick={goToProfile}>
            <div className="options">
              <FontAwesomeIcon icon={faUser} alt={'icon'} /><br />
              Perfil
            </div>
          </li>
        </ul>
      </Footer>
    </div>
  )
}


export default Remember;