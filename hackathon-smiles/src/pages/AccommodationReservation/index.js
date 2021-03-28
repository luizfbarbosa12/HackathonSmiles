import {useHistory, history} from "react-router-dom";
import { PurpleBackground, TopBar, ImagemPerfil, StarImg, StarSpan, MainContainer, WelcomeP, Footer, MainImage, MainText, SignPost, ImagePng, NomePerfil, StarDiv, WhiteBorder, SignPostImage } from "./styles";
import profile from "../../assets/img/profile-pic.png";
import signpost from "../../assets/img/signpost.png";

import arrow from '../../assets/img/arrow.png';
import imageReservation from '../../assets/img/reservation.png';
import star from '../../assets/img/star 1.png';


import menu from '../../assets/img/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
    const history = useHistory();
    const voltar = ()=>{
        history.replace("/choices")
      } 
      const completeMissao = ()=>{
        history.push("/complete-missions")
      } 

      const goToHomepage = () => {
        history.replace("/")
    }

    return (
        <div className="App">
            <PurpleBackground>
                <TopBar>
                    <ImagemPerfil>
                        <ImagePng src={profile} alt="profile"/>
                    </ImagemPerfil>
                    <NomePerfil>
                        Maria
                    </NomePerfil>
                    <StarDiv>
                        <div>
                            <StarImg src={star} alt="star"/>
                        </div>
                        <StarSpan>150</StarSpan>
                    </StarDiv>
                </TopBar>
                <WhiteBorder>
                    <SignPost><SignPostImage src={signpost} alt="signpost"/></SignPost>
                </WhiteBorder>
            </PurpleBackground>
            <MainContainer>
                <img onClick={voltar} className="arrow cursorPointer" src={arrow} alt="arrow"/>
                <WelcomeP>Reserva de hospedagem</WelcomeP>
                <MainImage width="196.73px" src={imageReservation} alt="reservation"/>
                <MainText>
                    Nessa etapa, vamos te ajudar a encontrar qual tipo de hospedagem é mais a sua cara e não deixar você esquecer de nada importante.
                </MainText>
                <div className="button"><p>Já encontrei</p></div>
                <div onClick={completeMissao} className="button active cursorPointer">Vamos!</div>
            </MainContainer>
            <Footer>
                <ul>
                    <li onClick={goToHomepage}>
                        <div className="options">
                            <img width="13px" src={menu} alt="menu"/> <br />
            Fases
            </div>
                    </li>
                    <li>
                        <div className="options">
                            <FontAwesomeIcon icon={faStar} alt="faStar"/><br />
              Prêmios
            </div>
                    </li>
                    <li>
                        <div className="options">
                            <FontAwesomeIcon icon={faMap} alt="faMap"/><br />
            Mapa
            </div>
                    </li>
                    <li>
                        <div className="options">
                            <FontAwesomeIcon icon={faUser} alt="faUser"/><br />
            Perfil
            </div>
                    </li>
                </ul>
            </Footer>
        </div>
    );
}

export default Home;
