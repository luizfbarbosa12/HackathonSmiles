import styled from 'styled-components'


export const PurpleBackground = styled.header`
    background-color: #663399;
    height: 27.2vh;
    padding: 20px;
    border-radius: 0px 0px 26px 26px; 
`

export const TopBar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
`
export const StarImg = styled.img`
    margin-right: 5px;
`

export const StarSpan = styled.span`
    color: #F4F2F2;
`

export const ImagemPerfil = styled.div`
    position: absolute;
    left: 25%;
    right: 25%;
    border-radius: 50%;
    background-color: #F4F2F2;
    display: flex;
    place-content: center;
    place-items: center;
    width: 145px;
    height: 145px;
    margin: 0 auto;
    z-index: 10;
`

export const ImagePng = styled.img`
    border-radius: 50%;
`

export const MainContainer = styled.main`
    background-color: #FCFCFC;
    height: 639px;
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: -80px;
    border-radius: 26px;
    z-index: 9;
    padding-top: 70px;
    text-align: center;
`

export const WelcomeP = styled.p`
    text-align: center;
    font-size: 20px;
    color: #363636;
    
`

export const Card = styled.div`
    width: 140px;
    height: 149px;
    background-color: #000000;
    display: inline-block;
    p {
        height: 10px;
        background-color: red;
    }
`