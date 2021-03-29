import React from 'react'
import { useHistory, history } from "react-router-dom";
import {
  PurpleBackground,
  TopBar,
  ImagemPerfil,
  MainContainer,
  WelcomeP,
  StarDiv,
  Card,
  PrecoEstrelas,
  Footer,
  ImagePng,
  LeftArrow,
  Level,
  ProfileStar,
  GreenBorder,
  NomePerfil, 
  CardIcon,
  InstrucoesP, 
  BotaoQuero,
  Cadeado
} from "./styles";
import star from "../../assets/img/star 1.png";
import profile from "../../assets/img/profile-pic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import menu from '../../assets/img/menu.png';
import uber from '../../assets/img/uber.png'
import profileStar from '../../assets/img/profileStar.png'
import cadeado from '../../assets/img/cadeado.png'
import uberEats from '../../assets/img/uberEats.png'
import shell from '../../assets/img/shell.png'
import voucherRestaurante from '../../assets/img/voucherRestaurante.png'
import voucherLocaliza from '../../assets/img/voucherLocaliza.png'
import smiles from '../../assets/img/smiles.png'
import wifiGol from '../../assets/img/wifiGol.png'
import milhasSmiles from '../../assets/img/milhasSmiles.png'
import ingressosAtracao from '../../assets/img/ingressosAtracao.png'


const RewardsList = () => {
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
      history.push("/map")
    }

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
          </StarDiv>
        </TopBar>
        <GreenBorder>
          <Level><ProfileStar src={profileStar} alt={'numberone'}/></Level>
        </GreenBorder>
      </PurpleBackground>
      <MainContainer>
        <LeftArrow >
        </LeftArrow>
        <WelcomeP>Prêmios</WelcomeP>
        <InstrucoesP>Acumule estrelas e troque seus pontos por prêmios</InstrucoesP>
        <Card>
          <CardIcon>
            <img src={uber} alt={'clock'}/>
          </CardIcon>
          <PrecoEstrelas>
          <p>Cupom de R$10 no Uber</p>
          <span><img src={star}/><span>100</span></span>
          </PrecoEstrelas>
          <BotaoQuero>Quero!</BotaoQuero>
        </Card>
        <Card>
          <CardIcon>
            <img src={uberEats} alt={'clock'}/>
          </CardIcon>
          <PrecoEstrelas>
          <p>Cupom de R$15 no Uber Eats</p>
          <span><img src={star}/><span>500</span></span>
          </PrecoEstrelas>
          <Cadeado src={cadeado}/>
        </Card>
        <Card>
          <CardIcon>
            <img src={shell} alt={'uber'}/>
          </CardIcon>
          <PrecoEstrelas>
          <p>R$15 para usar no posto Shell</p>
          <span><img src={star}/><span>1.000</span></span>
          </PrecoEstrelas>
          <Cadeado src={cadeado}/>
        </Card>
        <Card>
          <CardIcon>
            <img src={voucherRestaurante} alt={'clock'}/>
          </CardIcon>
          <PrecoEstrelas>
          <p>Voucher de restaurante</p>
          <span><img src={star}/><span>1.000</span></span>
          </PrecoEstrelas>
          <Cadeado src={cadeado}/>
        </Card>
        <Card>
          <CardIcon>
            <img src={voucherLocaliza} alt={'clock'}/>
          </CardIcon>
          <PrecoEstrelas>
          <p>5% de desconto na localiza</p>
          <span><img src={star}/><span>1.200</span></span>
          </PrecoEstrelas>
          <Cadeado src={cadeado}/>
        </Card>
        <Card>
          <CardIcon>
            <img src={smiles} alt={'clock'}/>
          </CardIcon>
          <PrecoEstrelas>
          <p>1000 milhas da Smiles</p>
          <span><img src={star}/><span>3.000</span></span>
          </PrecoEstrelas>
          <Cadeado src={cadeado}/>
        </Card>
        <Card>
          <CardIcon>
            <img src={wifiGol} alt={'clock'}/>
          </CardIcon>
          <PrecoEstrelas>
          <p>15 min de Wi-Fi no avião</p>
          <span><img src={star}/><span>5.000</span></span>
          </PrecoEstrelas>
          <Cadeado src={cadeado}/>
        </Card>
        <Card>
          <CardIcon>
            <img src={ingressosAtracao} alt={'clock'}/>
          </CardIcon>
          <PrecoEstrelas>
          <p>Par de ingressos para atração</p>
          <span><img src={star}/><span>10.000</span></span>
          </PrecoEstrelas>
          <Cadeado src={cadeado}/>
        </Card>
        <Card>
          <CardIcon>
            <img src={milhasSmiles} alt={'clock'}/>
          </CardIcon>
          <PrecoEstrelas>
          <p>5.000 milhas da Smiles</p>
          <span><img src={star}/><span>50.000</span></span>
          </PrecoEstrelas>
          <Cadeado  src={cadeado}/>
        </Card>
        
        
      </MainContainer>
      <Footer>
        <ul>
          <li onClick={goToHomepage}>
            <div className="options">
              <img width="13px" src={menu} alt={'icon'}/> <br />
              Fases
            </div>
          </li>
          <li onClick={goToRewardsList}>
            <div className="options">
              <FontAwesomeIcon icon={faStar} alt={'icon'}/><br />
              Prêmios
            </div>
          </li>
          <li onClick={goToMap}>
            <div className="options">
              <FontAwesomeIcon icon={faMap} alt={'icon'}/><br />
              Mapa
            </div>
          </li>
          <li onClick={goToProfile}>
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


export default RewardsList;