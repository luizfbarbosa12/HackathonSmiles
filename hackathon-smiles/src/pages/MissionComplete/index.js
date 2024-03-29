import React from 'react'
import { useHistory } from "react-router-dom";
import {
  PurpleBackground,
  TopBar,
  ImagemPerfil,
  StarImg,
  StarSpan,
  MainContainer,
  WelcomeP,
  StarDiv,
  Footer,
  ImagePng,
  CloseButton,
  Level,
  NumberOne,
  GreenBorder,
  NomePerfil, 
  StarsIcon, 
  Descricao,
  Continuar,
  Pontos
} from "./styles";
import star from "../../assets/img/star 1.png";
import profile from "../../assets/img/profile-pic.png";
import numberOne from "../../assets/img/numberOne.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import menu from '../../assets/img/menu.png';
import stars from '../../assets/img/stars.png'
import closeButton from '../../assets/img/closeButton.png'

const MissionComplete = () => {
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

const goToMap = () => {
        history.replace("/map")
    }
  const voltar = () => {
    history.replace("/")
  }
  const completeMission = () => {
    history.push("/complete-missions-two")
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
              <StarImg src={star} alt={'star'}/>
            </div>
            <StarSpan>150</StarSpan>
          </StarDiv>
        </TopBar>
        <GreenBorder>
          <Level><NumberOne src={numberOne} alt={'numberone'}/></Level>
        </GreenBorder>
      </PurpleBackground>
      <MainContainer>
        <CloseButton onClick={voltar} className="cursorPointer">
          <img src={closeButton} alt={'arrow'}/>
        </CloseButton>
        <WelcomeP>Missão completa</WelcomeP>
        <StarsIcon><img src={stars} alt={''}/></StarsIcon>
        <Descricao>
        <Pontos><strong>Você ganhou 100 pontos</strong></Pontos>
        <p>Você ganhou o DOBRO de pontos por ter fechado acomodação com a Smiles!</p>
        <Continuar onClick={completeMission} className="cursorPointer">Continuar</Continuar>
        </Descricao>
      </MainContainer>
      <Footer>
        <ul>
          <li onClick={goToHomepage}>
            <div className="options">
              <img width="13px" src={menu} alt={'icon'}/> <br />
              Fases
            </div>
          </li>
          <li onClick={goToRewardsList}>
            <div className="options">
              <FontAwesomeIcon icon={faStar} alt={'icon'}/><br />
              Prêmios
            </div>
          </li>
          <li onClick={goToMap}>
            <div className="options">
              <FontAwesomeIcon icon={faMap} alt={'icon'}/><br />
              Mapa
            </div>
          </li>
          <li onClick={goToProfile}>
            <div className="options">
              <FontAwesomeIcon icon={faUser} alt={'icon'}/><br />
              Perfil
            </div>
          </li>
        </ul>
      </Footer>
    </div>
    )
}


export default MissionComplete;