import { PurpleBackground, TopBar, ImagemPerfil, StarImg, StarSpan, MainContainer, WelcomeP, Card, CardImage, Footer } from "./styles";
import profile from '../assets/img/profile-pic.png';
import star from '../assets/img/star 1.png';

import profileGlobe from '../assets/img/profile-globe.png';
import profileKey from '../assets/img/profile-key.png';
import profileList from '../assets/img/profile-list.png';
import profilePassport from '../assets/img/profile-passport.png';
import profileSignPost from '../assets/img/profile-signpost.png';
import profileTicket from '../assets/img/profile-ticket.png';
import menu from '../assets/img/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
  return (
    <div className="App">
      <PurpleBackground>
        <TopBar>
          <div><StarImg src={star} /></div>
          <div><StarSpan>150</StarSpan></div>
        </TopBar>
        <ImagemPerfil>
          <img src={profile} />
        </ImagemPerfil>
      </PurpleBackground>
      <MainContainer>
        <WelcomeP>Bem-vinda, Maria!</WelcomeP>
        <Card>
          <div className="border-left-card-first">
            <CardImage src={profileList} />
          </div>
          <p className="color-text-card-first">Definição</p>
        </Card>
        <Card>
          <div className="border-left-card-second">
            <CardImage src={profileSignPost} />
          </div>
          <p className="color-text-card-second">Escolhas</p>
        </Card>
        <Card>
          <div className="border-left-card-third">
            <CardImage src={profileGlobe} />
          </div>
          <p className="color-text-card-third">Roteiro</p>
        </Card>
        <Card>
          <div className="border-left-card-fourth">
            <CardImage src={profileKey} />
          </div>
          <p className="color-text-card-fourth">Segurança</p>
        </Card>
        <Card>
          <div className="border-left-card-fifth">
            <CardImage src={profilePassport} />
          </div>
          <p className="color-text-card-fifth">Documentos</p>
        </Card>
        <Card>
          <div className="border-left-card-sixth">
            <CardImage src={profileTicket} />
          </div>
          <p className="color-text-card-sixth">Bônus</p>
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
}

export default Home;
