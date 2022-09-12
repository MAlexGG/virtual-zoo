import React from 'react'
import { CtButton } from './Button.styled'

function Button({text, handleClick}) {
  return (
    <>  
        <CtButton onClick={handleClick}>{text}</CtButton>
    </>
  )
}

export default Button