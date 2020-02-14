// dependencies
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

export const SignIn = props => {
    const [pigeon, setPigeon] = useState('');
    const [pigeon_cage_key, setPigeonCageKey] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage('');
    }, [pigeon, pigeon_cage_key])

    const login = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_URL}auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                pigeon,
                pigeon_cage_key
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response);
            response.json().then(result => {
                if (response.ok) {
                    props.updateUser(result.token);
                }
                else {
                    setMessage(`${response.status} ${response.statusText}: ${result.message}`);
                }
            })
            .catch(err => {
                console.log('Parse JSON failed');
                setMessage('Error: Pigeon is mightily confused');
            })
        })
        .catch(err => {
            console.log(err);
            setMessage('Error: Pigeon is afraid');
        })
    }

    if (props.user && props.user.name) {
        return <Redirect to="/profile" />
    }

    return (
        <div className='sign-in'>
            <div className='auth-main'>
                <form className='sign-in-form' onSubmit={login}>
                    <FontAwesomeIcon className='logo-shield' icon={faUserShield} size='10x' />
                    <h1 className='logo-text'>SquireSpace</h1>
                    <p className="danger">{message}</p>
                    <label className='auth-input'>
                        <h4>Thy Noble Pigeon's Name: </h4>
                        <input 
                            className='auth-input-field' 
                            value={pigeon}
                            onChange={e => setPigeon(e.target.value)} 
                        />
                    </label>
                    <label className='auth-input'>
                        <h4>Thy Pigeon Cage Key: </h4>
                        <input 
                            className='auth-input-field auth-password' 
                            type='password' 
                            value={pigeon_cage_key}
                            onChange={e => setPigeonCageKey(e.target.value)} 
                        />
                    </label>
                    <button className='cta-btn'>Open Pigeon Cage</button>
                </form>
            </div>
        </div>
    )
};
