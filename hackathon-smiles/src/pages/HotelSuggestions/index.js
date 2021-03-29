import React from 'react'
import { useHistory } from "react-router-dom";
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
  AreaPreco,
  Arrow,
  Level,
  NumberOne,
  GreenBorder,
  MilhasPorDiaria,
  PorDiaria,
  NomePerfil,
  Card,
  Descricao,
  Continuar,
  AloBahia,
  HotelName,
  Diarias,
  FotoHotelEsquerda,
  FotoHotelDireita,
  Preco,
  MilhasText,
  Cards,
  Link
} from "./styles";
import star from "../../assets/img/star 1.png";
import profile from "../../assets/img/profile-pic.png";
import numberOne from "../../assets/img/numberOne.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import menu from '../../assets/img/menu.png';
import arrow from '../../assets/img/arrow.png'
import primeiroHotel from '../../assets/img/hotelIberostar.png'
import segundoHotel from '../../assets/img/segundoHotel.png'

const HotelSuggestions = () => {
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
  const voltar = () => {
    history.replace("/you-use-miles")
  }
  const carregar = () => {
    history.push("/loading")
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
            <div>
              <StarImg src={star} alt={'star'} />
            </div>
            <StarSpan>150</StarSpan>
          </StarDiv>
        </TopBar>
        <GreenBorder>
          <Level><NumberOne src={numberOne} alt={'numberone'} /></Level>
        </GreenBorder>
      </PurpleBackground>
      <MainContainer>
        <Arrow onClick={voltar} className="cursorPointer">
          <img src={arrow} alt={'arrow'} />
        </Arrow>
        <WelcomeP>Oba! Temos algumas sugestões de hotéis conforme suas preferências: </WelcomeP>
        <Cards>
          <Card>
            <Descricao className="clickHover">
              <div>
                <FotoHotelEsquerda src={primeiroHotel} alt="" />
                <AloBahia><strong>Alô, Bahia!</strong></AloBahia>
                <HotelName>Hotel Iberostar</HotelName>

                <Diarias>Diárias a partir de:</Diarias>
                <AreaPreco>
                  <Preco><strong>17.000</strong></Preco>
                  <MilhasPorDiaria>
                    <MilhasText>Milhas</MilhasText>
                    <PorDiaria>por diária</PorDiaria>
                  </MilhasPorDiaria>
                </AreaPreco>
                <Link>Ver oferta</Link>
              </div>
            </Descricao>
          </Card>
          <Card>
            <Descricao>
              <div>
                <FotoHotelDireita src={segundoHotel} alt="" />
                <AloBahia><strong>Alô, Bahia!</strong></AloBahia>
                <HotelName>Catussaba Resort Hotel</HotelName>

                <Diarias>Diárias a partir de:</Diarias>
                <AreaPreco>
                  <Preco><strong>15.000</strong></Preco>
                  <MilhasPorDiaria>
                    <MilhasText>Milhas</MilhasText>
                    <PorDiaria>por diária</PorDiaria>
                  </MilhasPorDiaria>
                </AreaPreco>
                <Link>Ver oferta</Link>
              </div>
            </Descricao>
          </Card>
        </Cards>
        <Continuar onClick={carregar} className="cursorPointer">Confirmar</Continuar>
      </MainContainer>
      <Footer>
        <ul>
          <li onClick={goToHomepage}>
            <div className="options">
              <img width="13px" src={menu} alt={'icon'} /> <br />
              Fases
            </div>
          </li>
          <li onClick={goToRewardsList}>
            <div className="options">
              <FontAwesomeIcon icon={faStar} alt={'icon'} /><br />
              Prêmios
            </div>
          </li>
          <li onClick={goToMap}>
            <div className="options">
              <FontAwesomeIcon icon={faMap} alt={'icon'} /><br />
              Mapa
            </div>
          </li>
          <li onClick={goToProfile}>
            <div className="options">
              <FontAwesomeIcon icon={faUser} alt={'icon'} /><br />
              Perfil
            </div>
          </li>
        </ul>
      </Footer>
    </div>
  )
}


export default HotelSuggestions;