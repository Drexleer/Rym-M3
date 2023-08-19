import React from 'react';
// import {Card, Tools, Circle, Box, RedBox, YellowBox, GreenBox, AboutImage} from './StyledAbout'
import { ContainerDiv, Card, Span, Info, Image, Share, LinkRedesSociales, Button} from './StyledAboutNew';
import aboutImage from '../img/Me.png'
import {BsFacebook, BsGithub, BsInstagram} from "react-icons/bs";
import { Link } from 'react-router-dom';

function About(){
    return(
      <ContainerDiv>
      <Card>
      <Span>ABOUT ME</Span>
      <Image src={aboutImage} alt="About Image"/>
      <Info>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nostrum non, itaque fugiat, illum eum sint ab voluptatibus reiciendis voluptate inventore voluptas, quasi asperiores officiis earum at tempore repudiandae autem!</Info>
      <Share>
        <LinkRedesSociales href="https://www.facebook.com/Ejar11" target="_blank"><BsFacebook/></LinkRedesSociales>
        <LinkRedesSociales href="https://github.com/Drexleer" target="_blank"><BsGithub/></LinkRedesSociales>
        <LinkRedesSociales href="https://www.instagram.com/edder.alvarez.01/" target="_blank"><BsInstagram/></LinkRedesSociales>
      </Share>
      <Link to="/home">
      <Button>Home</Button>
      </Link>
    </Card>
    </ContainerDiv>
  );
};
      //   <Card>
      //   <Tools>
      //     <Circle>
      //       <RedBox />
      //     </Circle>
      //     <Circle>
      //       <YellowBox />
      //     </Circle>
      //     <Circle>
      //       <GreenBox />
      //     </Circle>
      //   </Tools>
      //       <h1>ABOUT</h1>
      //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto, vero maiores mollitia quae tempore commodi ipsum adipisci voluptatibus? Excepturi modi accusantium consequatur explicabo minima laborum vel accusamus vero nesciunt?</p>
      //       <AboutImage src={aboutImage} alt="About Image" />
      // </Card>
    //)
//}

export default About;