// dependencies
import React, { useEffect, useState } from 'react';
// components
import { Card } from '../components'
// test data
import { testData } from '../data/cardTestData';

export const Search = () => {

    const [style, setStyle] = useState({})

    let data = testData[0];
    
    let handleLeft = e => {
        setStyle({
            transform: 'rotateY(180deg)',
            transition: '.5s'
        })
    } 
    
    const handleRight = () => {

    }

    return (
        <div className='page search'>
            <Card 
                name={data.name}
                age={data.age}
                bio={data.bio}
                style={style}
                handleLeft={handleLeft}
            />

        </div>
    )
};