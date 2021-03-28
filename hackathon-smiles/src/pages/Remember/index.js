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
import hotel from '../../assets/img/hotel.png'
import clock from '../../assets/img/clock.png'
import notebookAndPencil from '../../assets/img/notebookAndPencil.png'
import moneyBag from '../../assets/img/moneyBag.png'
import flatMap from '../../assets/img/flatMap.png'
import purpleArrow from '../../assets/img/purpleArrow.png'

const Remember = () => {
  const history = useHistory();

  const goToHomepage = () => {
    history.replace("/")
}

    const voltar = () => {
        history.replace("/complete-missions")
    }
    const voceViajar = () => {
        history.push("/you-will-travel")
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
        <LeftArrow onClick={voltar} className="cursorPointer">
          <img src={arrow} alt={'arrow'}/>
        </LeftArrow>
        <WelcomeP>Lembre-se de:</WelcomeP>
        <Card>
          <CardIcon>
            <img src={clock} alt={'clock'}/>
          </CardIcon>
          <p>Verificar o horário de check-in e check-out do hotel.</p>
        </Card>
        <Card>
          <CardIcon>
            <img src={moneyBag} alt={'moneybag'}/>
          </CardIcon>
           <MoneyBagText>Fique atento às taxas extras.</MoneyBagText> 
        </Card>
        <Card>
          <CardIcon>
            <img src={flatMap} alt={'map'}/>
          </CardIcon>
          <p>Veja se tem todas as comodidades que você quer.</p>
        </Card>
        <Card>
          <CardIcon>
            <img src={notebookAndPencil} alt={'ntbpencil'}/>
          </CardIcon>
          <p>Verifique a distância dos lugares que você quer visitar.</p>
        </Card>
        <Card>
          <CardIcon>
            <img src={hotel} alt={'hoteç'}/>
          </CardIcon>
          <p>Considere as avaliações dos outros hóspedes.</p>
        </Card>
        <PurpleArrow onClick={voceViajar} className="cursorPointer"><img src={purpleArrow} alt={'arrow'}/></PurpleArrow>
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


export default Remember;