// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => (
    <div className='footer'>
        <Link to='/search'><FontAwesomeIcon className='footer-icon' icon={faSearch} size='2x' /></Link>
        <Link to='/home'><FontAwesomeIcon className='footer-icon' icon={faFortAwesomeAlt} size='3x' /></Link>
        <FontAwesomeIcon className='footer-icon' icon={faSearchDollar} size='2x' />
    </div>
);