import React, { useEffect, useState } from 'react'
import { useHistory, history } from "react-router-dom";
import { PurpleBackground, TopBar, ImagemPerfil, StarImg, StarSpan,Link, MainContainer, WelcomeP, Footer, MainImage, SignPost, ImagePng, EditImage, StarDiv, Card, CardImage } from "./styles";
import profile from "../../assets/img/profile-pic.png";
import configImage from "../../assets/img/config.png";
import editImage from "../../assets/img/edit.png";
import arrow from '../../assets/img/arrow.png';
import progressTravel from '../../assets/img/progress-travel.png';
import palmTree from '../../assets/img/palm-tree.png';
import arrowPurple from '../../assets/img/purpleArrow.png';
import star from '../../assets/img/star 1.png';
import check from '../../assets/img/check.png';
import cadeado from '../../assets/img/cadeado.png';
import hat from '../../assets/img/hat.png';

import oneImage from '../../assets/img/1.png';
import twoImage from '../../assets/img/2.png';
import threeImage from '../../assets/img/3.png';
import forImage from '../../assets/img/4.png';
import fiveImage from '../../assets/img/5.png';
import sixImage from '../../assets/img/6.png';
import menu from '../../assets/img/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faUser } from '@fortawesome/free-regular-svg-icons'

const YourTravels = () => {
    const history = useHistory();



    const voltar = () => {
        history.replace("/mission-complete")
    }

    return (
        <div className="App">
            <PurpleBackground>
                <TopBar>
                    <ImagemPerfil>
                        <ImagePng src={configImage} alt={''} />
                    </ImagemPerfil>
                    <StarDiv>
                        <div>
                            <StarImg src={star} alt={''} />
                        </div>
                        <StarSpan>150</StarSpan>
                    </StarDiv>
                </TopBar>
                <SignPost>
                    <img src={profile} alt={''} />
                    <EditImage src={editImage} alt={''} />
                </SignPost>
            </PurpleBackground>
            <MainContainer>
                <WelcomeP>Maria</WelcomeP>
                <p className="email">maria@email.com</p>
                <p className="title-sub">Suas Viagens</p>
                <div className="statusTravel">
                    <div className="subStatus">
                        <img height="69px" width="69px" src={palmTree} alt={''} />
                    </div>
                    <div className="subStatus">
                        <p>Praia do Forte - BA<br />10/07/2021</p>
                        <img src={progressTravel} alt={''} />
                    </div>
                    <div className="subStatus">
                        <img src={arrowPurple} alt={''} />
                    </div>
                </div>
                <Link>ver anteriores</Link>
                <p className="title-sub">Conquistas</p>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <img src={hat} width="70px" alt={''}/>
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
                </Card>
                <Card>
                    <CardImage src={cadeado} alt={''} />
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
        </div>
    );
}

export default YourTravels;
