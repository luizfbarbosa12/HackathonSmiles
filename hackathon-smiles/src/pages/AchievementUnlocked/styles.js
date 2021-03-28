import styled from 'styled-components'

export const FrontOpacity = styled.div`
position: fixed; 
top: 0%; 
left: 0%; 
width: 100%; 
height: 100%; 
background: rgba(17, 17, 17, 0.5);
-moz-opacity: 0.30; 
filter: alpha(opacity=30);
z-index: 13; 
-webkit-animation: animateBackground 1s;
animation: animateBackground 1s ;
`

export const PurpleBackground = styled.header`
    background-color: #AF69C8;
    height: 27.2vh;
    padding: 20px;
    border-radius: 0px 0px 26px 26px; 
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
`;
export const StarImg = styled.img`
  margin-right: 5px;
`;

export const StarSpan = styled.span`
  color: #f4f2f2;
`;

export const StarDiv = styled.div`
  display: flex;
`;

export const ImagemPerfil = styled.div`
  border-radius: 50%;
  background-color: #f4f2f2;
  width: 45px;
  height: 45px;
  display: flex;
  place-items: center;
  place-content: center; 
`;

export const NomePerfil = styled.div`
margin-right:130px;
color: #FFFFFF;
font-size:24px;
`;

export const ImagePng = styled.img`
  border-radius: 50%;
  width: 26px;
  height: 41px;
`;
export const SignPost = styled.div`
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
    z-index: 15;
`
export const Achievement = styled.main`
    background-color: #FCFCFC;
    width: 85vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: -80px;
    border-radius: 26px;
    padding-top: 90px;
    left: 0;
    right: 0;
    text-align: center;
    padding-bottom: 20px;
    text-align: center;
    position:relative;
    z-index: 14;
    position: absolute;
    
    .nameAchievement{
        font-size: 14px;
        color: #363636;
        margin-top: 20px;
        margin-bottom: 25px;
    }

    .button{
        border: 1px solid #663399;
        box-sizing: border-box;
        border-radius: 8px;
        margin: 8px auto;
        display:block;
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

    .border-left-card-first{
        border-left:4px solid #79CC52;
        position: relative;
    }

    .check{
        position: absolute;
        top:-20px;
        right: 0;
        width:30px;
    }

    .color-text-card-first{
        color:#79CC52;
    }

    .border-left-card-second{
        border-left:4px solid #FF9F40;
        position: relative;
    }

    .color-text-card-second{
        color:#FF9F40;
    }

    .border-left-card-third{
        border-left:4px solid #AA80FF;
    }

    .color-text-card-third{
        color:#AA80FF;
    }

    .border-left-card-fourth{
        border-left:4px solid #F25A3C;
    }

    .color-text-card-fourth{
        color:#F25A3C;
    }

    .border-left-card-fifth{
        border-left:4px solid #59ABFF;
    }

    .color-text-card-fifth{
        color:#59ABFF ;
    }

    .border-left-card-sixth{
        border-left:4px solid #79CC52;
    }

    .color-text-card-sixth{
        color:#79CC52;
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
    width: 22.5px;
    height: 32px;
    margin: 20px 0;
`

export const MainImage = styled.img`
   margin-top: 30px;
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
        cursor: pointer;
    }
`