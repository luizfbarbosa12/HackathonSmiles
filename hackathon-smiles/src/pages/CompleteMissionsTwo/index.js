import React, { useEffect, useState } from 'react'
import { useHistory, history } from "react-router-dom";
import { PurpleBackground, TopBar, ImagemPerfil, StarImg, StarSpan, MainContainer, WelcomeP, Footer, MainImage, SignPost, ImagePng, NomePerfil, StarDiv, Card, CardImage } from "./styles";
import profile from "../../assets/img/profile-pic.png";
import signpost from "../../assets/img/signpost.png";
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

const CompleteMissionsTwo = () => {
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

    useEffect(() => {
        setTimeout(() => {
            history.push("/achievement-unlocked")
        }, 2000)
    }, [])

    const voltar = () => {
        history.replace("/mission-complete")
    }

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
                    <img src={signpost} alt={''} />
                </SignPost>
            </PurpleBackground>
            <MainContainer>
                <img onClick={voltar} className="arrow cursorPointer" src={arrow} alt={''} />
                <WelcomeP>Complete as missões</WelcomeP>
                <div>
                    <MainImage width="196.73px" src={progressBar} alt={''} />
                </div>
                <Card>
                    <div className="border-left-card-first">
                        <img className="check" src={check} alt={''} />
                        <CardImage src={oneImage} alt={''} />
                    </div>
                    <p className="color-text-card-first"><StarImg width="20px" src={star} alt={''} /> 50 pontos</p>
                </Card>
                <Card>
                    <div className="border-left-card-second">
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
                    <li onClick={goToHomepage}>
                        <div className="options">
                            <img width="13px" src={menu} alt={''} /> <br />
            Fases
            </div>
                    </li>
                    <li onClick={goToRewardsList}>
                        <div className="options">
                            <FontAwesomeIcon icon={faStar} alt={''} /><br />
              Prêmios
            </div>
                    </li>
                    <li onClick={goToMap}>
                        <div className="options">
                            <FontAwesomeIcon icon={faMap} alt={''} /><br />
            Mapa
            </div>
                    </li>
                    <li onClick={goToProfile}>
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

export default CompleteMissionsTwo;
