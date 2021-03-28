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

} from "./styles";
import star from "../../assets/img/star 1.png";
import profile from "../../assets/img/profile-pic.png";
import arrow from "../../assets/img/arrow.png";
import numberOne from "../../assets/img/numberOne.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import menu from '../../assets/img/menu.png';
import aloneImage from '../../assets/img/Alone.png'
import inFamilyImage from '../../assets/img/in-family.png'
import withFriendsImage from '../../assets/img/with-friends.png'
import withPartnerImage from '../../assets/img/with-partner.png'


const Remember = () => {
  const history = useHistory();

  const goToHomepage = () => {
    history.replace("/")
}

const goToRewardsList = () => {
  history.replace('/rewards-list')
}

const goToProfile = () => {
  history.push("/your-travels")
}

  const voltar = () => {
    history.replace("/remember")
  }
  const tipoAcomodacao = () => {
    history.push("/which-accomodation")
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
        <WelcomeP>Você vai viajar:</WelcomeP>
        <Card onClick={tipoAcomodacao} className="cursorPointer">
          <img src={aloneImage} alt={''} />
          <p>Sozinho</p>
        </Card>
         <Card onClick={tipoAcomodacao} className="cursorPointer">
          <img src={withFriendsImage} alt={''} />
          <p>Com amigos</p>
        </Card>
         <Card onClick={tipoAcomodacao} className="cursorPointer">
          <img src={withPartnerImage} alt={''} />
          <p>Com parceira (o)</p>
        </Card>
         <Card onClick={tipoAcomodacao} className="cursorPointer">
          <img src={inFamilyImage} alt={''} />
          <p>Em família</p>
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