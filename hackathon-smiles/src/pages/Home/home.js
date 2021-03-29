import {useHistory, history} from "react-router-dom";
import { PurpleBackground, TopBar, ImagemPerfil, StarImg, StarSpan, MainContainer, WelcomeP, Card, CardImage, Footer } from "./styles";
import profile from '../../assets/img/profile-pic.png';
import star from '../../assets/img/star 1.png';

import profileGlobe from '../../assets/img/profile-globe.png';
import profileKey from '../../assets/img/profile-key.png';
import profileList from '../../assets/img/profile-list.png';
import profilePassport from '../../assets/img/profile-passport.png';
import profileSignPost from '../../assets/img/profile-signpost.png';
import profileTicket from '../../assets/img/profile-ticket.png';
import menu from '../../assets/img/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
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

  const escolhas = ()=>{
    history.push("/choices")
  }
  
  return (
    <div className="App">
      <PurpleBackground>
        <TopBar>
          <div><StarImg src={star} alt={''}/></div>
          <div><StarSpan>150</StarSpan></div>
        </TopBar>
        <ImagemPerfil>
          <img src={profile} alt={''}/>
        </ImagemPerfil>
      </PurpleBackground>
      <MainContainer>
        <WelcomeP>Bem-vinda, Maria!</WelcomeP>
        <Card>
          <div className="border-left-card-first">
            <CardImage src={profileList} alt={''}/>
          </div>
          <p className="color-text-card-first">Definição</p>
        </Card>
        <Card onClick={escolhas}>
          <div className="border-left-card-second">
            <CardImage src={profileSignPost} alt={''}/>
          </div>
          <p className="color-text-card-second">Escolhas</p>
        </Card>
        <Card>
          <div className="border-left-card-third">
            <CardImage src={profileGlobe} alt={''}/>
          </div>
          <p className="color-text-card-third">Roteiro</p>
        </Card>
        <Card>
          <div className="border-left-card-fourth">
            <CardImage src={profileKey} alt={''}/>
          </div>
          <p className="color-text-card-fourth">Segurança</p>
        </Card>
        <Card>
          <div className="border-left-card-fifth">
            <CardImage src={profilePassport} alt={''}/>
          </div>
          <p className="color-text-card-fifth">Documentos</p>
        </Card>
        <Card>
          <div className="border-left-card-sixth">
            <CardImage src={profileTicket} alt={''}/>
          </div>
          <p className="color-text-card-sixth">Bônus</p>
        </Card>
      </MainContainer>
      <Footer>
        <ul>
          <li onClick={goToHomepage}>
            <div className="options">
              <img width="13px" src={menu} alt={''}/> <br/>
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
}

export default Home;
