// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

export const Landing = () => {
    return (
        <div className='landing'>
            <FontAwesomeIcon className='logo-shield' icon={faUserShield} size='10x' />
            <h1 className='logo-text'>SquireSpace</h1>
            <Link to='/signin'><button className='cta-btn'>Sign In</button></Link>
            <h4>Don't have an account? <Link to='/signup'><u>Sign up!</u></Link></h4>
        </div>
    )
};