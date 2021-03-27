import styled from 'styled-components'


export const PurpleBackground = styled.header`
    background-color: #AF69C8;
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
    position:relative;
    
    .arrow{
        position: absolute;
        top:20px;
        left:20px;
    }

    .button{
        border: 1px solid #663399;
        box-sizing: border-box;
        border-radius: 8px;
        margin: 20px 10px;
        display:inline-block;
        color: #663399;
        width: 120px;
        padding-top:9px;
        height: 38px;
        font-size: 13px;
    }

     .active{
        font-weight: 600;
        color: #FFFFFF;
        background: #663399;
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

export const MainImage = styled.img`
   margin-top: 30px;
`

export const MainText = styled.p`
   text-align: left;
   font-size: 14px;
   margin:10px;
   color: #363636;
`

export const Footer = styled.footer`
    background-color: #F6F6F6;
    bottom:0;
    padding:10px;
    margin-top: 20px;
    position: fixed;
    width:100vw;
    z-index:12;
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
    }
`