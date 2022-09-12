import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCard from '../buttonCard/ButtonCard';
import { CtCard, ImgCard } from './Card.styled';

function Card({animal}) {

    const {name, image_link} = animal;


  return (
    <>
        <CtCard>
            <Link to="/animal-card" state={{ animal: animal }}><ButtonCard rotation='0deg' bottom='15px' right='15px'/></Link>
            <ImgCard src={image_link} alt={name}/>
        </CtCard>
    </>
  )
}

export default Card