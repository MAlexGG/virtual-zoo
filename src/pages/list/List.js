import React, {useState} from 'react';
import Button from '../../components/button/Button';
import Cards from '../../components/cards/Cards';
import { CtList, Logo } from './List.styled';
import Separator from '../../components/separator/Separator';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function List() {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

  return (
    <>
        <CtList>
            <Link to="/"><Logo src={logo} alt='Virtual zoo logo'/></Link>
            <Button text='Next' handleClick={handleClick}/>
            <Separator />
            <Cards counter={counter}/>
        </CtList>
    </>
  )
}

export default List