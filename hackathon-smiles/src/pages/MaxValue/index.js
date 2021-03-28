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
  AlertIcon,
  Level,
  NumberOne,
  Alerta,
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
import alert from '../../assets/img/alert.png'

const MaxValue = () => {
  const history = useHistory();


  const goToHomepage = () => {
    history.replace("/")
}

const goToProfile = () => {
  history.push("/your-travels")
}

const goToRewardsList = () => {
  history.replace('/rewards-list')
}
  const voltar = () => {
    history.replace("/what-kind-of-pension")
  }
  const usaMilhas = () => {
    history.push("/you-use-miles")
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
        <WelcomeP>Valor máximo por diária:</WelcomeP>
        <Alerta>
          <div>
            <AlertIcon src={alert} />
          </div>
          <p>Não esqueça de se manter no seu orçamento!!</p>
        </Alerta>
        <Card>
          <CardIcon>
            <input type="radio" name="radio" />
          </CardIcon>
          <p>Até R$ 80</p>
        </Card>
        <Card>
          <CardIcon>
            <input type="radio" name="radio" />
          </CardIcon>
          <p>Até R$ 100</p>
        </Card>
        <Card>
          <CardIcon>
            <input type="radio" name="radio" />
          </CardIcon>
          <p>Até R$ 250</p>
        </Card>
        <Card>
          <CardIcon>
            <input type="radio" name="radio" />
          </CardIcon>
          <p>Até R$ 500</p>
        </Card>
        <Card>
          <CardIcon>
            <input type="radio" name="radio" />
          </CardIcon>
          <p>Qualquer valor</p>
        </Card>
        <PurpleArrow onClick={usaMilhas} className="cursorPointer"><img src={purpleArrow} alt={'arrow'} /></PurpleArrow>
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


export default MaxValue;