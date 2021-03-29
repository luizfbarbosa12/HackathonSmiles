import React from "react";
import {useHistory} from "react-router-dom";
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
  SignPost,
  SignPostImage,
  WhiteBorder,
  NomePerfil
} from "./styles";
import star from "../../assets/img/star 1.png";
import profile from "../../assets/img/profile-pic.png";
import arrow from "../../assets/img/arrow.png";
import signpost from "../../assets/img/signpost.png";
import brain from '../../assets/img/brain.png';
import check from '../../assets/img/check.png';
import notebook from '../../assets/img/notebook.png';
import rightArrow from '../../assets/img/rightArrow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import menu from '../../assets/img/menu.png';

const Escolhas = () => {
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
  const voltar = ()=>{
    history.replace("/")
  } 
  const compraHospedagem = ()=>{
    history.push("/accommodation-reservation")
  } 
  return (
    <div className="App">
      <PurpleBackground>
        <TopBar>
          <ImagemPerfil>
            <ImagePng src={profile} alt={''}/>
          </ImagemPerfil>
          <NomePerfil>
            Maria
          </NomePerfil>
          <StarDiv>
            <div>
              <StarImg src={star} alt={''}/>
            </div>
            <StarSpan>150</StarSpan>
          </StarDiv>
        </TopBar>
        <WhiteBorder>
          <SignPost><SignPostImage src={signpost} alt={''}/></SignPost>
        </WhiteBorder>
      </PurpleBackground>
      <MainContainer>
        <LeftArrow onClick={voltar}>
          <img src={arrow} alt={''}/>
        </LeftArrow>
        <WelcomeP>Escolhas</WelcomeP>
        <Card>
          <div>
            <img src={brain} alt={''}/>
          </div>
          <p>Compra de Passagem</p>
          <div><img src={check} alt={''}/></div>
        </Card>
        <Card className="cursorPointer" onClick={compraHospedagem}>
          <div>
            <img src={notebook} alt={''}/>
          </div>
          <p>Reserva de hospedagem</p>
          <div><img src={rightArrow} alt={''}/></div>
        </Card>
      </MainContainer>
      <Footer>
        <ul>
          <li onClick={goToHomepage}>
            <div className="options">
              <img width="13px" src={menu} alt={''}/> <br />
              Fases
            </div>
          </li>
          <li onClick={goToRewardsList}>
            <div className="options">
              <FontAwesomeIcon icon={faStar} alt={''}/><br />
              Prêmios
            </div>
          </li>
          <li onClick={goToMap}>
            <div className="options">
              <FontAwesomeIcon icon={faMap} alt={''}/><br />
              Mapa
            </div>
          </li>
          <li onClick={goToProfile}>
            <div className="options">
              <FontAwesomeIcon icon={faUser} alt={''}/><br />
              Perfil
            </div>
          </li>
        </ul>
      </Footer>
    </div>
  );
};

export default Escolhas;
