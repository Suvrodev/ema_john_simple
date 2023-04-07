import React from 'react';
import './Header.css'
import Header_Logo from '../../Copy/images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="header">
                <img src={Header_Logo} alt="" />
                <div>
                    <Link to="/Shop">Shop</Link>
                    <Link to="/Orders">Order</Link>
                    <Link to="/Inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;