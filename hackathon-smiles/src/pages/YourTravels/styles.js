import styled from 'styled-components'


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
  width: 23px;
  height: 24px;
  display: flex;
  place-items: center;
  place-content: center;

`;

export const EditImage = styled.img`
    z-index: 15;
    width:34px;
    height:34px;
    position: absolute;
    right:10px;
    top:0px;
`;

export const NomePerfil = styled.div`
margin-right:130px;
color: #FFFFFF;
font-size:24px;
`; 

export const ImagePng = styled.img`
  border-radius: 50%;
  width: 23px;
  height: 24px;
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
    z-index: 10;
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

    .email{
        font-size: 14px;
    color: #363636;
    }

    .title-sub{
        margin-top: 20px;
        font-size: 24px;
        color: #363636;
    }

    .subStatus{
        display:inline-block;
        font-size: 16px;
        margin: 0 10px;
        color: #363636;
    }
    
    .statusTravel{
        justify-content:space-between;
        display: flex;
        align-items: center;
        margin-top: 30px; 
    }
`

export const WelcomeP = styled.p`
    text-align: center;
    font-size: 20px;
    color: #363636;
    
`

export const Card = styled.div`
    width: 90px;
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
    width: 22.96px;
    height: 30px;
    margin: 20px 0;
`

export const Link = styled.p`
    text-decoration-line: underline;
    color: #663399;
    text-align: right;
    font-size:14px;
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
    }
`