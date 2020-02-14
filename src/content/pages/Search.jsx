// dependencies
import React, { useEffect, useState } from 'react';
// components
import { Card } from '../components'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandMiddleFinger, faHeart } from '@fortawesome/free-solid-svg-icons';
// test data
// import { testData } from '../data/cardTestData';

export const Search = () => {
    const [back, setBack] = useState()
    const [backStyle, setBackStyle] = useState({})
    const [matches, setMatches] = useState([])
    const [data, setData] = useState([])
    const [style, setStyle] = useState({})

    useEffect(() => {
        let token = localStorage.getItem('userToken')
        fetch(`${process.env.REACT_APP_SERVER_URL}matches/potentials`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log('result', result)
            setData(result.users)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    let handleLeft = (e, matchedId) => {
        setBack(<FontAwesomeIcon icon={faHandMiddleFinger} size='5x' />)
        setBackStyle({
            backgroundColor: '#A162E8',
            color: '#F7F8F5'
        })
        setStyle({
            transform: 'rotateY(-180deg)',
            transition: '.8s'
        })
        console.log('Id is', matchedId)
        let token = localStorage.getItem('userToken')
        fetch(`${process.env.REACT_APP_SERVER_URL}matches`, {
            method: 'POST',
            body: JSON.stringify({
                swipe: 'skipped',
                matchedUser: matchedId
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('YAY')
            } 
            else {
                console.log('Err', response)
            }
        })
        .catch(err => {
            console.log(err)
        })
        setTimeout(returnLeft, 2000)
    } 
    const handleRight = (e, matchedId) => {
        console.log('Id is', matchedId)
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
        let token = localStorage.getItem('userToken')
        fetch(`${process.env.REACT_APP_SERVER_URL}matches`, {
            method: 'POST',
            body: JSON.stringify({
                swipe: 'matched',
                matchedUser: matchedId
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('YAY')
            } 
            else {
                console.log('Err', response)
            }
        })
        .catch(err => {
            console.log(err)
        })
        setTimeout(returnRight, 2000)
    }
    let returnLeft = () => {
        setData(data.length? data.slice(1): [])
        setStyle({
            transform: 'rotateY(0deg)',
            transition: '.8s'
        })
    }

    let returnRight = () => {
        setData(data.length? data.slice(1): [])
        setStyle({
            transform: 'rotateY(0deg)',
            transition: '.8s'
        })
    }

    if (data.length) {
        return (
            <div className='page search'>
                <Card 
                    age={data[0].age}
                    back={back}
                    backStyle={backStyle}
                    bio={data[0].bio}
                    handleLeft={handleLeft}
                    handleRight={handleRight}
                    id={data[0]._id}
                    img={data[0].img}
                    name={data[0].name}
                    style={style}
                />
            </div>
        )
    }
    return (
        <div className="page search">
            Loading Matches...
        </div>
    )
    
};