// dependencies
import React, { useEffect, useState } from 'react';
// components
import { Card } from '../components';
// test data
import { testData } from '../data/cardTestData';

export const Search = () => {
    let content = testData.map((item, i) => {
        console.log(i)
        return <Card key={i} 
                    name={item.name}
                    age={item.age}
                    bio={item.bio}
                    index={i} />
    })

    

    return (
        <div className='page search'>
            {content}
        </div>
    )
};