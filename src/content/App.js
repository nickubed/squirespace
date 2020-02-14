// dependencies
import React from 'react';
// pages
import { Home, Landing, SignIn, SignUp } from './pages';
import { Footer, Header } from './components';
// styling
import './style.scss';
import './pages/style.scss';
import './components/style.scss';

export const App = () => {

    const [user, setUser] = useState();

    let content;
    if (user) {
        content = (
            
        )
    }

    return (
        <div className='app'>
            {/* <Landing /> */}
            {/* <SignIn /> */}
            {/* <SignUp /> */}
            <Header />
            <Home />
            <Footer />
        </div>
    )
};