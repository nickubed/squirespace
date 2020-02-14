// dependencies
import React from 'react';

export const Home = () => {
    return (
        <div className='page home'>
            <div className='home-top'>
                <img className='home-top-img' src='https://www.placecage.com/200/300' alt='home pic' />
                <div className='home-top-stats'>
                    <h2>Name</h2>
                    <h3>Age</h3>
                </div>
            </div>
            <div className='home-bot'>
                <div className='home-bio-container'>
                    <h2>Bio</h2>    
                    <h4>Looking for love, life and indentured servitude.</h4>
                </div>
            </div>
        </div>
    )
};