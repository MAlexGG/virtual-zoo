import React from 'react';
import {CtBtCard, ImgArrow} from './ButtonCard.styled';
import arrow from '../../assets/arrow.svg';

function ButtonCard({rotation, bottom, right}) {
  return (
    <>
        <CtBtCard bottom={bottom} right={right}>
            <ImgArrow src={arrow} alt='arrow image' rotation={rotation}/>
        </CtBtCard>
    </>
  )
}

export default ButtonCard