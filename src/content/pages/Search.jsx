// dependencies
import React, { useEffect, useState } from 'react';
// components
import Cards, { Card } from 'react-swipe-card';
// test data
import { testData } from '../data/cardTestData';

export const Search = () => {

    return (
        <div className='page search'>
            <div className='search-container'>
                <Cards onEnd={action('end')} className='cards'>
                    {testData.map(item =>
                        <Card
                            onSwipeLeft={action('swipe left')}    
                            onSwipeRight={action('swipe right')}>
                                <h2>{item.name}</h2>
                        </Card>
                    )}
                </Cards>
            </div>
        </div>
    )
};