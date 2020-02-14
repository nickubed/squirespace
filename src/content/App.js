// dependencies
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
// pages
import { Home, Landing, Search, SignIn, SignUp } from './pages';
import { Footer, Header } from './components';
// styling
import './style.scss';
import './pages/style.scss';
import './components/style.scss';

export const App = () => {

    const [user, setUser] = useState(null);

    // Define any onload actions (e.g., to look for the token)
    useEffect(() => {
        console.log('check for token!')
        decodeToken();
    }, [])

    // Helper function to update the user (login, signup, and logout use this)
    const updateUser = newToken => {
        if (newToken) {
            // Save the token 
            localStorage.setItem('userToken', newToken);

            // Update the user with the token's info
            decodeToken(newToken);
        }
        else {
            setUser(null);
        }
    }

    // Helper function to decode existing tokens
    const decodeToken = existingToken => {
        let token = existingToken || localStorage.getItem('userToken');
        console.log('The token is:', token);

        // Decode token
        if (token) {
            let decoded = jwtDecode(token);

            // If the token is not decoded or it is expired, NO USER!
            if (!decoded || Date.now() > decoded.exp * 1000) {
                console.log('Expired or bad token?');
                setUser(null);
            }
            else {
                // This is the user data - YAY
                console.log('YAY! Good token!');
                setUser(decoded);
            }
        } 
        else {
            setUser(null);
        }
    }

    let content;
    if (user) {
        content = ( 
            <>
                <Route exact path='/' component={Landing} />
                <Route path='/signin' render={() => <SignIn updateUser={updateUser} user={user} />} />
                <Route path='/signup' render={() => (
                    <SignUp updateUser={updateUser} user={user} />
                )} />
                <Route path="/profile" component={Landing} />
            </>
        )
    } else {
        content = (
            <>
                <Header />
                <Route exact path='/' component={Home} />
                <Route path='/search' component={Search} />
                <Footer />
            </>
        )
    }

    return (
        <div className='app'>
            <Router>
                <Header />
                    {content}
                <Footer />
            </Router>
        </div>
    )
};