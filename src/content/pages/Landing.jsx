// dependencies
import React from 'react';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

export const Landing = () => {
    return (
        <div className='landing'>
            <div className='landing-header'></div>
            <div className='landing-main'>
                <FontAwesomeIcon className='logo-shield' icon={faUserShield} size='10x' />
                <h1 className='logo-text'>SquireSpace</h1>
                <button className='cta-btn'>Sign In</button>
                <h4>Don't have an account? <u>Sign up!</u></h4>
            </div>
            <div className='landing-footer'></div>
        </div>
    )
};