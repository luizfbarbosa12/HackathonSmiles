import "./App.css";
import { PurpleBackground, TopBar, ImagemPerfil, StarImg, StarSpan, MainContainer, WelcomeP, Card } from "./styles";
import profile from './assets/img/profile-pic.png'
import star from './assets/img/star 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <PurpleBackground>
        <TopBar>
          <div><StarImg src={star}/></div>
          <div><StarSpan>150</StarSpan></div>
        </TopBar>
        <ImagemPerfil>
          <img src={profile}/>
        </ImagemPerfil>
      </PurpleBackground>
      <MainContainer>
        <WelcomeP>Bem-vinda, Maria!</WelcomeP>
        <Card>
          <img/>
          <p></p>
        </Card>
        <Card>
        <img/>
          <p></p>
        </Card>
        <Card>
        <img/>
          <p></p>
        </Card>
        <Card>
        <img/>
          <p></p>
        </Card>
        <Card>
        <img/>
          <p></p>
        </Card>
        <Card>
        <img/>
          <p></p>
        </Card>
      </MainContainer>
    </div>
  );
}

export default App;
