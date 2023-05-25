import React, { useContext } from 'react';
import './Header.css'
import Header_Logo from '../../Copy/images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvide';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
   // console.log('Header logout')
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
            <div className="header">
                <img src={Header_Logo} alt="" />
                <div>
                    <ActiveLink  to="/">Shop</ActiveLink>
                    <ActiveLink  to="/Orders">Order</ActiveLink>
                    <ActiveLink  to="/Inventory">Inventory</ActiveLink>
                    <ActiveLink  to="/login">Login</ActiveLink>
                    <ActiveLink  to="/signup">Sign Up</ActiveLink>
                    {user && <span className='header-mail'><span className='wlc'>Welcome</span> <span className='mail'>{user.email} </span> <button onClick={handleLogout}>Logout</button> </span> }

                    {/* <NavLink className={({isActive})=> isActive? 'activeness':''} to="/">Shop</NavLink>
                    <NavLink className={({isActive})=> isActive? 'activeness':'' } to="/Orders">Order</NavLink>
                    <NavLink  className={({isActive})=>isActive? 'activeness' : ''} to="/Inventory">Inventory</NavLink>
                    <NavLink  className={({isActive})=>isActive? 'activeness' : ''} to="/login">Login</NavLink>
                    <NavLink  className={({isActive})=>isActive? 'activeness' : ''} to="/signup">Sign Up</NavLink>
                    {user && <span className='header-mail'><span className='wlc'>Welcome</span> <span className='mail'>{user.email} </span> <button onClick={handleLogout}>Logout</button> </span> } */}
                </div>
            </div>
        </div>
    );
};

export default Header;