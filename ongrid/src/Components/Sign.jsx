import React from 'react'
import Nav from '../Header/Nav';
import '../Style/sign.css';
import { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Sign = () => {

   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  
  
     const handleSubmit = async(event)=>{
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", { email,password})
      if (res && res.data.success) {
        console.log(res.data.name)
        alert(res.data.message);
      navigate(`/`)
      }
      else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error.message);
       }
      
  }
  return (
      <div>
          <Nav />

      <div className='signbody'>
        <div className='signbox'>
          <div className='signboxhead'>
          <h1> Sign-in on OnGrid</h1>    
         <h5>View, Add, Manage individuals in your community</h5> 
          
          </div>
          <hr />
          <br />
          <div className='form' onSubmit={handleSubmit}>
            <label>Email *</label>
            <input type='email'  required name='email' className='in' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <label>Password *</label>
            <input type='password' className='in' required name='passwword' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br ></br>
            <button onClick={handleSubmit} type='submit' className='sub'>Sign IN</button>
            <br />
            OR
            <br />
            <img className='google' src='https://ongrid.in/images/google-signin-button.png' alt='google'/>
          </div>
          </div>
               
      </div>
      <Footer />
    </div>
  )
}

export default Sign;