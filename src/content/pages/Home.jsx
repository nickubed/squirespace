// dependencies
import React from 'react';

export const Home = () => {
    return (
        <div className='page home'>
            <div className='home-top'>
                <img className='profile-img' src='https://vignette.wikia.nocookie.net/heroes-of-camelot/images/7/79/Squire.jpg/revision/latest?cb=20140202173246' alt='image of user' />
                <h3>User</h3>
            </div>
            <hr className='home-hr' />
            <div className='home-main'>
                <h4>Bio</h4>
                <p>Just returned from crusade. Lost my master to an arrow to the knee.</p>
                <p>Not sure what I'm looking for, but companionship and glory are always welcome.</p>
            </div>
            <hr className='home-hr' />
            <div className='home-bottom'>
                <h4>Preferences</h4>
                <p>Squires</p>
                <p>Knights</p>
            </div>
        </div>
    )
};