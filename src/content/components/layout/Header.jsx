// dependencies
import React from 'react';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

export const Header = () => (
    <div className='header'>
        <FontAwesomeIcon className='header-logo' icon={faUserShield} size='3x' />
        <div className='header-title'>
            <h2 className='layout-content'>SquireSpace</h2>
        </div>
    </div>
);