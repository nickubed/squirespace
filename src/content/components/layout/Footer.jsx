// dependencies
import React from 'react';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => (
    <div className='footer'>
        <FontAwesomeIcon className='footer-icon' icon={faSearch} size='2x' />
        <FontAwesomeIcon className='footer-icon' icon={faFortAwesomeAlt} size='3x' />
        <FontAwesomeIcon className='footer-icon' icon={faSearchDollar} size='2x' />
    </div>
);