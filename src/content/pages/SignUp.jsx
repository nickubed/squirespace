// dependencies
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

export const SignUp = props => {
    const [age, setAge] = useState(15);
    const [bio, setBio] = useState('');
    const [name, setName] = useState('');
    const [pic, setPic] = useState('');
    const [phase, setPhase] = useState(0);
    const [pigeon, setPigeon] = useState('');
    const [pigeon_cage_key, setPigeonCageKey] = useState('');
    const [message, setMessage] = useState('');
    const [seeking, setSeeking] = useState('Squire');
    const [type, setType] = useState('Squire');

    useEffect(() => {
        setMessage('');
    }, [age, bio, name, pic, pigeon, pigeon_cage_key, seeking, type])

    const signup = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_URL}auth/signup`, {
            method: 'POST',
            body: JSON.stringify({
                age,
                bio,
                name,
                pic,
                pigeon,
                pigeon_cage_key,
                seeking,
                type
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

    const updatePhase = () => {
        setPhase(phase + 1)
    }

    let content;
    if (phase === 0) {
        content = (
            <div>
                <label className='auth-input'>
                    <h4>Thy Name: </h4>
                    <input 
                        className='auth-input-field' 
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                </label>
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
                <button className='cta-btn' onClick={updatePhase}>Next</button>
            </div>
        )
    } else if (phase === 1) {
        content = (
            <div>
            <label className='auth-input'>
                <h4>Thou art a: </h4>
                <select 
                    className='auth-input-field' 
                    onChange={e => setType(e.target.value)}>
                    <option value="Squire">Squire</option>
                    <option value="Knight">Knight</option>
                    <option value="Adventurer">Adventurer</option>
                </select> 
            </label>
            <label className='auth-input'>
                <h4>Thou Seeketh: </h4>
                <select 
                    className='auth-input-field' 
                    onChange={e => setSeeking(e.target.value)}>
                    <option value="Squire">Squire</option>
                    <option value="Knight">Knight</option>
                    <option value="Adventure">Adventure</option>
                </select> 
            </label>
            </div>
        )
    } else {
        content = (
            <div>
            <label className='auth-input'>
                <h4>Thy Biography: </h4>
                <textarea 
                    className='auth-input-field' 
                    value={bio}
                    onChange={e => setBio(e.target.value)} 
                ></textarea>
            </label>
            <label className='auth-input'>
                <h4>Thy Self-Portrait: </h4>
                <input 
                    className='auth-input-field' 
                    type="url"
                    value={pic}
                    onChange={e => setPic(e.target.value)} 
                />
            </label>
            <label className='auth-input'>
                <h4>Thy Age: </h4>
                <input 
                    className='auth-input-field' 
                    type="number"
                    value={age}
                    onChange={e => setAge(e.target.value)} 
                />
            </label>
            </div>
        )
    }

    return (
        <div className='sign-up'>
                <div className='auth-main'>
                    <form onSubmit={signup}>
                        <FontAwesomeIcon className='logo-shield' icon={faUserShield} size='5x' />
                        <p>You must first register for a pigeon in order to apply to our adventurer services.</p>
                        <p className="danger">{message}</p>
                        {/* <label className='auth-input'>
                            <h4>Thy Name: </h4>
                            <input 
                                className='auth-input-field' 
                                value={name}
                                onChange={e => setName(e.target.value)} 
                            />
                        </label>
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
                        <label className='auth-input'>
                            <h4>Thou art a: </h4>
                            <select 
                                className='auth-input-field' 
                                onChange={e => setType(e.target.value)}>
                                <option value="Squire">Squire</option>
                                <option value="Knight">Knight</option>
                                <option value="Adventurer">Adventurer</option>
                            </select> 
                        </label>
                        <label className='auth-input'>
                            <h4>Thou Seeketh: </h4>
                            <select 
                                className='auth-input-field' 
                                onChange={e => setSeeking(e.target.value)}>
                                <option value="Squire">Squire</option>
                                <option value="Knight">Knight</option>
                                <option value="Adventure">Adventure</option>
                            </select> 
                        </label>
                        <label className='auth-input'>
                            <h4>Thy Biography: </h4>
                            <textarea 
                                className='auth-input-field' 
                                value={bio}
                                onChange={e => setBio(e.target.value)} 
                            ></textarea>
                        </label>
                        <label className='auth-input'>
                            <h4>Thy Self-Portrait: </h4>
                            <input 
                                className='auth-input-field' 
                                type="url"
                                value={pic}
                                onChange={e => setPic(e.target.value)} 
                            />
                        </label>
                        <label className='auth-input'>
                            <h4>Thy Age: </h4>
                            <input 
                                className='auth-input-field' 
                                type="number"
                                value={age}
                                onChange={e => setAge(e.target.value)} 
                            />
                        </label>
                        <button type="submit" className='cta-btn'>Obtain Pigeon</button> */}
                        { content }
                    </form>
                </div>
        </div>
    )
};