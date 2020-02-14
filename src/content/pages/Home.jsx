// dependencies
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import MatchesDialog from '../components/MatchesDialog'

export const Home = props => {
    const [open, setOpen] = useState(false);

    if (!props.user || !props.user.name) {
        return <Redirect to="/signin" />
    }

    let icon = <img className="large-icon" alt="Squire Icon" src="https://res.cloudinary.com/briezh/image/upload/v1581714265/squire-icon_abw7aa.jpg" />
    if (props.user.type == 'Knight') {
        icon = (<img className="large-icon" alt="Knight Icon" src="https://res.cloudinary.com/briezh/image/upload/v1581714265/knight_icon_pfbz7f.png" />)
    }

    const backgroundColor = {backgroundColor:'#A162E8',color:'#F7F8F5'}

    return (
        <div className='page home'>
            <div className='home-top'>
                <img className='home-top-img' src={props.user.pic} alt='home pic' />
                <div className='home-top-stats'>
                    {icon}
                    <h2>{props.user.type == 'Knight' ? 'Ser': 'Squire'} {props.user.name}</h2>
                    <h3>{props.user.age} years old</h3>
                    <h3>Seeking {props.user.seeking}</h3>
                </div>
            </div>
            <div>
                <MatchesDialog user={props.user} />
            </div>
            <div className='home-bot'>
                <div className='home-bio-container'>
                    <h2>About {props.user.name} {icon}</h2>
                    <h4>{props.user.bio}</h4>
                    <button className="contact-button" style={backgroundColor}>
                        <h3>
                            <img 
                                src="https://res.cloudinary.com/briezh/image/upload/v1581713634/clipart-pigeon-silhouette_iryng6.png" 
                                alt="Pigeon Icon"
                                className="icon" /> {props.user.pigeon}
                        </h3> 
                    </button>
                    <h4>Contact Me Via Carrier Pigeon!</h4>
                </div>
            </div>
        </div>
    )
};