import React from 'react'
import '../Style/style.css';
import { Link } from 'react-router-dom';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
const Footer = () => {
  return (
    <div className='footermain'>
      <div className='footer'>
          <div className='footer1'>
              <h1>
                  Connect with us
              </h1>
             <div className='a'>
              <a href='https://www.facebook.com/OnGridIndia/' target='_blank' rel="noreferrer" ><i class="fa-brands fa-instagram"></i> </a>
                <a href='https://twitter.com/On_grid' > <i class="fa-brands fa-facebook"  target='_blank' rel="noreferrer" ></i></a>
                  <a href='https://www.linkedin.com/company/ongrid.in/?trk=top_nav_home'  target='_blank' rel="noreferrer"  > <i class="fa-brands fa-twitter"></i></a>
                    <a  href='https://www.instagram.com/ongrid_bgv/'  target='_blank' rel="noreferrer"  ><i class="fa-brands fa-linkedin"></i></a>
                    
              </div>
          </div>
          <div className='footer2'>  <h1>company</h1>
        
          <Link to={'/about'}>Aboutus</Link>
          <Link to={'/career'}>Careers</Link>
          <Link to={'/contact'}>Contactus</Link>
          <Link to={'/tnc'}>Term and Conditions</Link>
         
    
              
      </div>
      </div>
      <div>
        <hr />
      <span>© 2023 ONGRID - Praven Chandra Ravuri</span></div>
    </div>
  )
}

export default Footer;