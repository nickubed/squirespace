// dependencies
import React, { useEffect, useState } from 'react';
// components
import { Card } from '../components';
// test data
import { testData } from '../data/cardTestData';

export const Search = () => {
    let content = testData.map((item, i) => {
        return <Card />
    })

    

    return (
        <div className='page search'>
            {content}
        </div>
    )
};