import React from 'react';
import './Header.css';
import logo from '../../images/Barcelona-logo.png';

const Header = () => {
    return (
        <div className="body">
            <img src={logo} alt="" />
            <h1>Team Barcelona Official</h1>
            <nav className="nav">
                <a href="/team">Team</a>
                <a href="/contact-us">Contact us</a>
                <a href="/management">ManageMent</a>

            </nav>
        </div>
    );
};

export default Header;