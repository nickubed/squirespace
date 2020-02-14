// dependencies
import React from 'react';

export const Card = props => {
    return (
        <div className='card'>
            <img className='card-img' src='https://www.placecage.com/200/300' alt='' />
            <div className='card-section'>
                <h4>Name: </h4>
                <h4 className='card-filler'>{props.name}</h4>
            </div>
            <div className='card-section'>
                <h4>Age: </h4>
                <h4 className='card-filler'>{props.age}</h4>
            </div>
            <div className='card-bio'>
                <h4>Bio</h4>
                <p>{props.bio}</p>
            </div>
        </div>
    )
};