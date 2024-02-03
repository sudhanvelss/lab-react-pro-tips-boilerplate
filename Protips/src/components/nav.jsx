import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Kalvium 💖</Link>
            </div>
            <div id='flexx'>
                <div><Link to="/form">Registration Form</Link></div>
                <div><Link to="/contacts">Contacts</Link></div>
            </div>
            
        </nav>
    );
};

export default Navbar;