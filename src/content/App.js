// dependencies
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// pages
import { Home, Landing, SignIn, SignUp } from './pages';
import { Footer, Header } from './components';
// styling
import './style.scss';
import './pages/style.scss';
import './components/style.scss';

export const App = () => {

    const [user, setUser] = useState(null);

    let content;
    if (user) {
        content = ( 
            <>
                <Route exact path='/' component={Landing} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
            </>
        )
    } else {
        content = (
            <>
                <Header />
                <Route path='/' component={Home} />
                <Footer />
            </>
        )
    }

    return (
        <div className='app'>
            <Router>
                {content}
            </Router>
        </div>
    )
};