import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import'../../Style/style.css';

 import { HashLink as Link } from 'react-router-hash-link';
const Uniqueid = () => {

const Location = useLocation();
  const [display, setDisplay] = useState(false);
  
  const handleclick = () => {
    setDisplay(!display);
  }

  return (
      <div>uniqueid
          
      <div className='popups' >
        
              <div className='details' onClick={handleclick}>
          <div> <Link smooth to={'/#business'}><span className='unqbtn'>x</span></Link>
             </div> 
                   <h1>
             {Location?.state?.details?.title}
                  </h1>
                   <p>{Location?.state?.details?.Discription} </p>
          <hr />
          
      </div>
          <div className='uniquepopup'>
        <h3>Who to verify :</h3>
        <p>{Location?.state?.details?.para}</p>
          <h3>Most opted verifications</h3>
          <ul>
            <li>ID Verification</li>
            <li>Address verification</li>
            <li>Criminal and court record verification</li>
            <li>Prior employment verification</li>
            <li>Highest Education verification (for the white-collar workforce)</li>
            <li>eLockr reference check (for the blue-collar and grey-collar workforce)</li>
            <li>Drug test (5/7/9 panel) (for workforce handling food and other edible inventory)</li>
            </ul>
            </div>
           
   
    </div>


    </div>
  )
}

export default Uniqueid;