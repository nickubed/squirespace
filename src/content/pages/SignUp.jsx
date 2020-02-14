// dependencies
import React from 'react';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

export const SignUp = props => {
    return (
        <div className='sign-up'>
            <div className='auth-header'></div>
                <div className='auth-main'>
                    <FontAwesomeIcon className='logo-shield' icon={faUserShield} size='10x' />
                    <h1 className='logo-text'>SquireSpace</h1>
                    <label className='auth-input'>
                        <h4>Username: </h4>
                        <input className='auth-input-field' type='text' name='username' />
                    </label>
                    <label className='auth-input'>
                        <h4>Email: </h4>
                        <input className='auth-input-field auth-email' type='text' name='username' />
                    </label>
                    <label className='auth-input'>
                        <h4>Password: </h4>
                        <input className='auth-input-field auth-password' type='password' name='password' />
                    </label>
                    <button className='cta-btn'>Sign Up</button>
                </div>
            <div className='auth-footer'></div>
        </div>
    )
};