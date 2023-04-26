import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvide';

const SignUp = () => {
    const [error,setError]=useState("")

    const {createUser}=useContext(AuthContext)




    const handleSignup=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const Confirm_Password=form.confirm.value;
        console.log(email, password, Confirm_Password)

        setError('')
        if(password!=Confirm_Password){
            setError('Your Password did not match')
            return;
        }
        else if(password.length<6){
            setError('Password must be six character or longer')
            return;
        }

        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.error(error.message)
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
           <h2 className='form-title'>Sign Up</h2>
           <form onSubmit={handleSignup}>
               <div className="form-control">
                   <label htmlFor="email">Email</label>
                   <input type="email" name="email" id="" placeholder='Your Email' required  />
               </div>
               <div className="form-control">
                   <label htmlFor="password">Password</label>
                   <input type="password" name="password" id="" placeholder='Your Password' required  />
               </div>
               <div className="form-control">
                   <label htmlFor="confirm">Confirm Password</label>
                   <input type="password" name="confirm" id="" placeholder='Your Password' required  />
               </div>

               <input className='btn-submit' type="submit" value="Sign Up" />
           </form>
           <p><small>Already have an account? <Link to="/login">Login</Link> </small></p>
           <p className='text-error'> {error} </p>
        </div>
    );
};

export default SignUp;