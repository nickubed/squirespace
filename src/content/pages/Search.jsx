// dependencies
import React, { useEffect, useState } from 'react';
// components
import { Card } from '../components'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandMiddleFinger, faHeart } from '@fortawesome/free-solid-svg-icons';
// test data
import { testData } from '../data/cardTestData';

export const Search = () => {

    const [back, setBack] = useState()
    const [backStyle, setBackStyle] = useState({})
    const [matches, setMatches] = useState([])
    const [data, setData] = useState(testData)
    const [style, setStyle] = useState({})
    
    let handleLeft = e => {
        setBack(<FontAwesomeIcon icon={faHandMiddleFinger} size='5x' />)
        setBackStyle({
            backgroundColor: '#A162E8',
            color: '#F7F8F5'
        })
        setStyle({
            transform: 'rotateY(-180deg)',
            transition: '.8s'
        })
        setTimeout(returnLeft, 2000)
    } 
    const handleRight = () => {
        setBack(<FontAwesomeIcon icon={faHeart} size='5x' />) 
        setBackStyle({
            backgroundColor: '#A162E8',
            color: '#F7F8F5'
        })
        setMatches(matches => [...matches, data[0]])
        setStyle({
            transform: 'rotateY(180deg)',
            transition: '.8s'
        })
        setTimeout(returnRight, 2000)
    }
    let returnLeft = () => {
        testData.shift()
        setData(testData)
        setStyle({
            transform: 'rotateY(0deg)',
            transition: '.8s'
        })
    }

    let returnRight = () => {
        testData.shift()
        setData(testData)
        setStyle({
            transform: 'rotateY(0deg)',
            transition: '.8s'
        })
    }

    return (
        <div className='page search'>
            <Card 
                age={data[0].age}
                back={back}
                backStyle={backStyle}
                bio={data[0].bio}
                handleLeft={handleLeft}
                handleRight={handleRight}
                name={data[0].name}
                style={style}
            />
        </div>
    )
};