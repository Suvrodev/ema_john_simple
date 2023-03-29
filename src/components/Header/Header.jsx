import React from 'react';
import './Header.css'
import Header_Logo from '../../Copy/images/Logo.svg'

const Header = () => {
    return (
        <div>
            <nav className="header">
                <img src={Header_Logo} alt="" />
                <div>
                    <a href="/Shop">Shop</a>
                    <a href="/Order">Order</a>
                    <a href="/Inventory">Inventory</a>
                    <a href="Login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;