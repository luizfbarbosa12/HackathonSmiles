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
  PurpleArrow
} from "./styles";
import star from "../../assets/img/star 1.png";
import profile from "../../assets/img/profile-pic.png";
import arrow from "../../assets/img/arrow.png";
import numberOne from "../../assets/img/numberOne.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import menu from '../../assets/img/menu.png';
import purpleArrow from '../../assets/img/purpleArrow.png'

const WhichAccomodation = () => {
  const history = useHistory();

  const goToHomepage = () => {
    history.replace("/")
}


  const voltar = () => {
    history.replace("/you-will-travel")
  }
  const tipoPensao = () => {
    history.push("/what-kind-of-pension")
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
      <LeftArrow className="cursorPointer" onClick={voltar}>
          <img src={arrow} alt={'arrow'}/>
        </LeftArrow>
        <WelcomeP>Qual tipo de acomodação você vai escolher?</WelcomeP>
        <Card>
          <CardIcon>
          <input type="radio" name="radio"/>
          </CardIcon>
          <p>Hotel</p>
        </Card>
        <Card>
          <CardIcon>
          <input type="radio" name="radio"/>
          </CardIcon>
          <p>Casa de aluguel</p>
        </Card>
        <Card>
          <CardIcon>
          <input type="radio" name="radio"/>
          </CardIcon>
          <p>Casa de conhecidos</p>
        </Card>
        <Card>
          <CardIcon>
          <input type="radio" name="radio"/>
          </CardIcon>
          <p>Resorts</p>
        </Card>
        <Card>
          <CardIcon>
          <input type="radio" name="radio"/>
          </CardIcon>
          <p>Chalés</p>
        </Card>
        <PurpleArrow onClick={tipoPensao} className="cursorPointer"><img src={purpleArrow} alt={'arrow'}/></PurpleArrow>
      </MainContainer>
      <Footer>
        <ul>
          <li onClick={goToHomepage}>
            <div className="options">
              <img width="13px" src={menu} alt={'icon'}/> <br />
              Fases
            </div>
          </li>
          <li>
            <div className="options">
              <FontAwesomeIcon icon={faStar} alt={'icon'}/><br />
              Prêmios
            </div>
          </li>
          <li>
            <div className="options">
              <FontAwesomeIcon icon={faMap} alt={'icon'}/><br />
              Mapa
            </div>
          </li>
          <li>
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


export default WhichAccomodation;