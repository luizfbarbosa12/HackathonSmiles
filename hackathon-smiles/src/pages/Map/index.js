import {useHistory, history} from "react-router-dom";
import { PurpleBackground, TopBar, ImagemPerfil, StarImg, StarSpan, MainContainer, WelcomeP, Footer, MainImage, MainText, SignPost, ImagePng, NomePerfil, StarDiv, WhiteBorder, SignPostImage } from "./styles";
import profile from "../../assets/img/profile-pic.png";

import arrow from '../../assets/img/arrow.png';
import brazil from '../../assets/img/brazil.png';
import star from '../../assets/img/star 1.png';


import menu from '../../assets/img/menu.png';
import geography from '../../assets/img/geography.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
    const history = useHistory();
      const completeMissao = ()=>{
        history.push("/complete-missions")
      } 

      const goToHomepage = () => {
        history.replace("/")
    }

    const goToRewardsList = () => {
        history.replace('/rewards-list')
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
                    <SignPost><SignPostImage src={geography} alt="signpost"/></SignPost>
                </WhiteBorder>
            </PurpleBackground>
            <MainContainer>
                <WelcomeP>Seu Mapa</WelcomeP>
                <MainText>
                Desbloqueie o mapa com os lugares que já visitou!
                </MainText>
                <MainImage width="196.73px" src={brazil} alt="reservation"/>
            </MainContainer>
            <Footer>
                <ul>
                    <li onClick={goToHomepage}>
                        <div className="options">
                            <img width="13px" src={menu} alt="menu"/> <br />
            Fases
            </div>
                    </li>
                    <li onClick={goToRewardsList}>
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
