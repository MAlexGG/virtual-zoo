import React from 'react';
import {Link} from 'react-router-dom';
import { CtHome, CtImg, Logo, MainImg, MainSection, MainTxt, Txt } from './Home.styled';
import mainImg from '../../assets/homeImage.jpg';
import Separator from '../../components/separator/Separator';
import Button from '../../components/button/Button';
import logo from '../../assets/logo.svg';

function Home() {

  return (
    <>
        <CtHome>
            <CtImg>
                <MainImg src={mainImg} alt='Main image of a dog'/>
                <MainTxt>Welcome to Virtual Zoo</MainTxt>
            </CtImg>
            <MainSection>
              <Separator/>
              <Txt>Find different animals randomly</Txt>
              <Logo src={logo} alt='virtual zoo logo'/>
              <Link to="/list"><Button text='Start'/></Link>
            </MainSection>
        </CtHome>
    </>
  )
}

export default Home