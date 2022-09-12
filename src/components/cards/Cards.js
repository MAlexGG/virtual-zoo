import React, { useEffect, useState } from 'react';
import {animalsService} from '../../services/animalsService';
import Card from '../card/Card';
import Loader from '../loader/Loader';
import { CtCards } from './Cards.styled';

function Cards({counter}) {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const api = animalsService();
        setLoader(true);
        api.getList(10).then(res => {
            setLoader(false);
            setData(res.data);
        }).catch(error => {
            console.log(error)
        });
    }, [counter]);

  return (
    <>
        {loader && <Loader/>}
        <CtCards>
            {
                data.map((animal, index) => (
                    <Card key={index} animal={animal}/>
                ))
            }
        </CtCards>
    </>
  )
}

export default Cards