import React, {useEffect} from 'react'
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
  Footer,
  ImagePng,
  LeftArrow,
  Level,
  NumberOne,
  GreenBorder,
  NomePerfil, 
  LoadingIcon
} from "./styles";
import star from "../../assets/img/star 1.png";
import profile from "../../assets/img/profile-pic.png";
import arrow from "../../assets/img/arrow.png";
import numberOne from "../../assets/img/numberOne.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import menu from '../../assets/img/menu.png';
import loading from '../../assets/img/loading.gif';

const Loading = () => {
  const history = useHistory();


  useEffect(() =>{
    const redirect = setTimeout( () => {
      history.push("/mission-complete")
    }, 2000)
  },[])
  
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
        <LeftArrow>
          <img src={arrow} alt={'arrow'}/>
        </LeftArrow>
        <WelcomeP>Aguardando confirmação da reserva</WelcomeP>
        <LoadingIcon><img src={loading} alt={''}/></LoadingIcon>
      </MainContainer>
      <Footer>
        <ul>
          <li>
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


export default Loading;