import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ButtonCard from '../../components/buttonCard/ButtonCard';
import Feature from '../../components/feature/Feature';
import { CtImgShow, CtShow, CtTxtShow, ImgShow, TxtTitle } from './Show.styled';

function Show() {

  const location = useLocation();
  const {animal} = location.state;

  return (
    <>
      <CtShow>
      <Link to="/list" state={{ animal: animal }}><ButtonCard rotation='180deg' bottom='82%' right='82%'/></Link>
        <CtImgShow>
          <ImgShow src={animal.image_link} alt={animal.name}/>
        </CtImgShow>
        <CtTxtShow>
          <TxtTitle>{animal.name}</TxtTitle>
          <Feature animal={animal}/>
        </CtTxtShow>
        
      </CtShow>
      <p>{animal.name}</p>
    </>
  )
}

export default Show