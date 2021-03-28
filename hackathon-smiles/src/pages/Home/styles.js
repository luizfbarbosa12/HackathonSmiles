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
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: -80px;
    border-radius: 26px;
    z-index: 9;
    padding-top: 90px;
    padding-bottom: 70px;
    text-align: center;
    
    .border-left-card-first{
        border-left:4px solid #20D0C2;
    }

    .color-text-card-first{
        color:#20D0C2;
    }

    .border-left-card-second{
        border-left:4px solid #AF69C8;
    }

    .color-text-card-second{
        color:#AF69C8;
    }

    .border-left-card-third{
        border-left:4px solid #FF757C;
    }

    .color-text-card-third{
        color:#FF757C;
    }

    .border-left-card-fourth{
        border-left:4px solid #3282AF;
    }

    .color-text-card-fourth{
        color:#3282AF;
    }

    .border-left-card-fifth{
        border-left:4px solid #1E9682;
    }

    .color-text-card-fifth{
        color:#1E9682;
    }

    .border-left-card-sixth{
        border-left:4px solid #FF7020;
    }

    .color-text-card-sixth{
        color:#FF7020;
    }
`

export const WelcomeP = styled.p`
    text-align: center;
    font-size: 20px;
    color: #363636;
    
`

export const Card = styled.div`
    width: 139px;
    display: inline-block;
    margin:30px 5px;
    p {
        font-size:18px;
        text-align: left;
        margin-left: 5px;
        font-weight: bold;
    }
`

export const CardImage = styled.img`
    width: 40%;
`

export const Footer = styled.footer`
    background-color: #F6F6F6;
    bottom:0;
    padding:10px;
    margin-top: 20px;
    position: fixed;
    width:100vw;
    ul{
        display:flex;
        justify-content: space-evenly;
        
    }
    ul li { 
        display: inline-block; 
        color: #828282;
        text-align:center;
        font-size: 14px;
    }

    .options{
        display: inline-block;
        margin-right:17px;
        cursor: pointer;
    }
`