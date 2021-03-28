import { PurpleBackground, TopBar, ImagemPerfil, StarImg, StarSpan, MainContainer, WelcomeP, Footer, MainImage, SignPost, ImagePng, NomePerfil, StarDiv, Card, CardImage, FrontOpacity, Achievement } from "./styles";
import profile from "../../assets/img/profile-pic.png";
import hat from "../../assets/img/hat.png";
import arrow from '../../assets/img/arrow.png';
import progressBar from '../../assets/img/progress-bar-two.png';
import star from '../../assets/img/star 1.png';
import check from '../../assets/img/check.png';

import oneImage from '../../assets/img/1.png';
import twoImage from '../../assets/img/2.png';
import threeImage from '../../assets/img/3.png';
import forImage from '../../assets/img/4.png';
import fiveImage from '../../assets/img/5.png';
import sixImage from '../../assets/img/6.png';
import menu from '../../assets/img/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
    return (
        <div className="App">
            <PurpleBackground>
                <TopBar>
                    <ImagemPerfil>
                        <ImagePng src={profile} alt={''} />
                    </ImagemPerfil>
                    <NomePerfil>
                        Maria
                    </NomePerfil>
                    <StarDiv>
                        <div>
                            <StarImg src={star} alt={''} />
                        </div>
                        <StarSpan>150</StarSpan>
                    </StarDiv>
                </TopBar>
                <SignPost>
                    <img src={hat} alt={''} />
                </SignPost>
            </PurpleBackground>
            <Achievement>
                <WelcomeP>Conquista desbloqueada!</WelcomeP>
                <p className="nameAchievement">“O turista”</p>
                <div className="button active"><p>Ver conquistas</p></div>
                <div className="button">Sair</div>
            </Achievement>
            <MainContainer>
                <img className="arrow" src={arrow} alt={''} />
                <WelcomeP>Complete as missões</WelcomeP>
                <div>
                    <MainImage width="196.73px" src={progressBar} alt={''} />
                </div>
                <Card>
                    <div className="border-left-card-first">
                        <img class="check" src={check} alt={''} />
                        <CardImage src={oneImage} alt={''} />
                    </div>
                    <p className="color-text-card-first"><StarImg width="20px" src={star} alt={''} /> 50 pontos</p>
                </Card>
                <Card>
                    <div className="border-left-card-second">
                        <img class="check" src={check} alt={''} />
                        <CardImage src={twoImage} alt={''} />
                    </div>
                    <p className="color-text-card-second"><StarImg width="20px" src={star} alt={''} /> 80 pontos</p>
                </Card>
                <Card>
                    <div className="border-left-card-third">
                        <CardImage src={threeImage} alt={''} />
                    </div>
                    <p className="color-text-card-third"><StarImg width="20px" src={star} alt={''} /> 60 pontos</p>
                </Card>
                <Card>
                    <div className="border-left-card-fourth">
                        <CardImage src={forImage} alt={''} />
                    </div>
                    <p className="color-text-card-fourth"><StarImg width="20px" src={star} alt={''} /> 40 pontos</p>
                </Card>
                <Card>
                    <div className="border-left-card-fifth">
                        <CardImage src={fiveImage} alt={''} />
                    </div>
                    <p className="color-text-card-fifth"><StarImg width="20px" src={star} alt={''} /> 30 pontos</p>
                </Card>
                <Card>
                    <div className="border-left-card-sixth">
                        <CardImage src={sixImage} alt={''} />
                    </div>
                    <p className="color-text-card-sixth"><StarImg width="20px" src={star} alt={''} /> 70 pontos</p>
                </Card>
            </MainContainer>
            <Footer>
                <ul>
                    <li>
                        <div className="options">
                            <img width="13px" src={menu} alt={''} /> <br />
            Fases
            </div>
                    </li>
                    <li>
                        <div className="options">
                            <FontAwesomeIcon icon={faStar} alt={''} /><br />
              Prêmios
            </div>
                    </li>
                    <li>
                        <div className="options">
                            <FontAwesomeIcon icon={faMap} alt={''} /><br />
            Mapa
            </div>
                    </li>
                    <li>
                        <div className="options">
                            <FontAwesomeIcon icon={faUser} alt={''} /><br />
            Perfil
            </div>
                    </li>
                </ul>
            </Footer>
            <FrontOpacity />
        </div>
    );
}

export default Home;
