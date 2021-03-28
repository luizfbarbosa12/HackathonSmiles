import { PurpleBackground, TopBar, ImagemPerfil, StarImg, StarSpan, MainContainer, WelcomeP, Footer, MainImage, MainText, SignPost, ImagePng, NomePerfil, StarDiv, WhiteBorder, SignPostImage } from "./styles";
import profile from "../../assets/img/profile-pic.png";
import signpost from "../../assets/img/signpost.png";

import arrow from '../../assets/img/arrow.png';
import imageReservation from '../../assets/img/reservation.png';
import star from '../../assets/img/star 1.png';

import profileGlobe from '../../assets/img/profile-globe.png';
import profileKey from '../../assets/img/profile-key.png';
import profileList from '../../assets/img/profile-list.png';
import profilePassport from '../../assets/img/profile-passport.png';
import profileSignPost from '../../assets/img/profile-signpost.png';
import profileTicket from '../../assets/img/profile-ticket.png';
import menu from '../../assets/img/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
    return (
        <div className="App">
            <PurpleBackground>
                <TopBar>
                    <ImagemPerfil>
                        <ImagePng src={profile} />
                    </ImagemPerfil>
                    <NomePerfil>
                        Maria
                    </NomePerfil>
                    <StarDiv>
                        <div>
                            <StarImg src={star} />
                        </div>
                        <StarSpan>150</StarSpan>
                    </StarDiv>
                </TopBar>
                <WhiteBorder>
                    <SignPost><SignPostImage src={signpost} /></SignPost>
                </WhiteBorder>
            </PurpleBackground>
            <MainContainer>
                <img className="arrow" src={arrow} />
                <WelcomeP>Reserva de hospedagem</WelcomeP>
                <MainImage width="196.73px" src={imageReservation} />
                <MainText>
                    Nessa etapa, vamos te ajudar a encontrar qual tipo de hospedagem é mais a sua cara e não deixar você esquecer de nada importante.
                </MainText>
                <div className="button"><p>Já encontrei</p></div>
                <div className="button active">Vamos!</div>
            </MainContainer>
            <Footer>
                <ul>
                    <li>
                        <div className="options">
                            <img width="13px" src={menu} /> <br />
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
}

export default Home;
