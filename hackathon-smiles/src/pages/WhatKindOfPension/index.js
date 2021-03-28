import React from 'react'
import {useHistory, history} from "react-router-dom";
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
import allInclusiveImage from '../../assets/img/all-inclusive.png'
import breakfastImage from '../../assets/img/breakfast.png'
import withoutMealImage from '../../assets/img/without-meal.png'
import lunchImage from '../../assets/img/lunch.png'

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

  const voltar = ()=>{
    history.replace("/which-accomodation")
  } 
  const valorMaximo = ()=>{
    history.push("/max-value")
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
        <LeftArrow onClick={voltar} className="cursorPointer">
          <img src={arrow} alt={'arrow'} />
        </LeftArrow>
        <WelcomeP>Você prefere qual tipo <br/> de pensão?</WelcomeP>
        <Card onClick={valorMaximo} className="cursorPointer"> 
          <img src={allInclusiveImage} alt={''}/>
          <p>Café da manhã</p>
        </Card>
        <Card onClick={valorMaximo} className="cursorPointer"> 
          <img src={breakfastImage} alt={''}/>
          <p>All inclusive</p>
        </Card>
        <Card onClick={valorMaximo} className="cursorPointer"> 
          <img src={withoutMealImage} alt={''}/>
          <p>Sem refeição</p>
        </Card>
        <Card onClick={valorMaximo} className="cursorPointer"> 
          <img src={lunchImage} alt={''}/>
          <p>Almoço</p>
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