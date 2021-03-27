import React from "react";
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
  CardImage,
  Footer,
  ImagePng,
  LeftArrow, 
  SignPost,
  SignPostImage,
  WhiteBorder
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
  return (
    <div className="App">
      <PurpleBackground>
        <TopBar>
          <ImagemPerfil>
            <ImagePng src={profile} />
          </ImagemPerfil>
          <StarDiv>
            <div>
              <StarImg src={star} />
            </div>
            <StarSpan>150</StarSpan>
          </StarDiv>
        </TopBar>
        <WhiteBorder>
            <SignPost><SignPostImage src={signpost}/></SignPost>
        </WhiteBorder>
      </PurpleBackground>
      <MainContainer>
        <LeftArrow>
          <img src={arrow} />
        </LeftArrow>
        <WelcomeP>Escolhas</WelcomeP>
        <Card>
          <div>
              <img src={brain}/>
          </div>
          <p>Compra de Passagem</p>
          <div><img src={check}/></div>
        </Card>
        <Card>
          <div>
              <img src={notebook}/>
          </div>
          <p>Compra de Passagem</p>
          <div><img src={rightArrow}/></div>
        </Card>
      </MainContainer>
      <Footer>
        <ul>
          <li>
            <div className="options">
              <img width="13px" src={menu}/> <br/>
              Fases
            </div>
          </li>
          <li>
            <div className="options">
              <FontAwesomeIcon icon={faStar} /><br />
              Prêmios
            </div>
          </li>
          <li>
            <div className="options">
              <FontAwesomeIcon icon={faMap} /><br />
              Mapa
            </div>
          </li>
          <li>
            <div className="options">
              <FontAwesomeIcon icon={faUser} /><br />
              Perfil
            </div>
          </li>
        </ul>
      </Footer>
    </div>
  );
};

export default Escolhas;
