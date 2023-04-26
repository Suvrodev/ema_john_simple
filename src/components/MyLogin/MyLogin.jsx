import React, { useContext, useState } from 'react';
import './MyLogin.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvide';

const MyLogin = () => {

    const [show,setShow]=useState(false)

    const [error,setError]=useState("")
    const {signIn}=useContext(AuthContext)
    const location=useLocation();
    console.log('location')
    console.log(location)

    const from=location.state?.from?.pathname || '/'
    console.log('From: ',from)

    const navigate=useNavigate()
  
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password)

        signIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            form.reset()
            setError("")
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.error(error.message)
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
           <h2 className='form-title'>Login</h2>
           <form onSubmit={handleLogin}>
               <div className="form-control">
                   <label htmlFor="email">Email</label>
                   <input type="email" name="email" id="" placeholder='Your Email' required />
               </div>
               <div className="form-control">
                   <label htmlFor="password">Password</label>
                   <input type={show? "text": "password" } name="password" id="" placeholder='Your Password' required />
                   <p onClick={()=>setShow(!show)}> <small>
                    {
                        show ? <span>Hide Password</span>: <span>Show Password</span>
                    }
                    </small> </p>
               </div>

               <input className='btn-submit' type="submit" value="Login" />
           </form>
           <p><small>New to Ema-john <Link to="/signup">Create New Account</Link> </small></p>
           <p> {error} </p>
        </div>
    );
};

export default MyLogin;