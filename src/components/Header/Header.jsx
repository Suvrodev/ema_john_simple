import React, { useContext } from 'react';
import './Header.css'
import Header_Logo from '../../Copy/images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvide';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log('Header logout')
   // console.log(user.email)


    const handleLogout=()=>{
        console.log('Logout')
        logOut()
        .then(result=>{

        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <nav className="header">
                <img src={Header_Logo} alt="" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/Orders">Order</Link>
                    <Link to="/Inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    {user && <span className='header-mail'><span className='wlc'>Welcome</span> <span className='mail'>{user.email} </span> <button onClick={handleLogout}>Logout</button> </span> }
                </div>
            </nav>
        </div>
    );
};

export default Header;