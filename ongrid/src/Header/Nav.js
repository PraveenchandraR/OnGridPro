// import React from 'react'
// // import { Link } from 'react-router-dom';

// import {HashLink as Link} from  "react-router-hash-link";


// import '../Style/style.css';

// const Nav = () => {
//   return (
//     <div className='navbody'>
//       <div className='nav'>
//        <div> <img className='logo' src='https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png' alt='logo' /></div>
//       <Link className='link' smooth to={'/'}>Home</Link >
//         <Link className='link' smooth to={'/#whygrid'} >WhyGrid</Link>
       
//         <Link className='link' smooth to={'/#business'}>Business</Link>
//         <Link className='link' smooth to={'/faq'}>FaQ</Link>
         
        
//         <div className='nav2'>
//           <Link className='link' to={'/signup'}>Signup</Link>
//           <Link className='link' to={'/bookdemo'}>BookDemo</Link>
//           <Link className='link' smooth to={'/signin'}>Signin</Link></div>
     
    
// </div>
//     </div>
//   )
// }

// export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useAuth } from "../HOOK/Auth";

const Header = () => {

  // const ref= useRef(null);

  // const handelClick = (e)=>{
  //   e.preventDefault();
  //   ref.current?.scrollIntoView({behaviour: 'smooth'})
  // }
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: " ",
      
    });
    console.log(auth);
    localStorage.removeItem("auth");
    // toast.success("Logout Successfully");
  };
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png"
              alt="Bootstrap"
              width="100"
              height="50"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#whygrid" >
                  Why OnGrid
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#ourOfferings">
                  Our Offerings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#business" >
                  Businesses
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQs
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/bookdemo">
                  Book a Demo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  SignUp
                </NavLink>
              </li>
              <li className="nav-item">

             {!auth.user ? (
            <>
              <Link to="/login" className="nav-profile">
                {/* <div className="profileLogo">
                  <img src='' alt="User Profile" />
                </div> */}
                <div className="nav-link">Login</div>
              </Link>
            </>
          ) : (
            <>
              <ul>
                <div class="dropdown">
                  <button class="dropbtn">
                    <Link className="draplink">{auth?.userFound?.name}</Link>
                  </button>
                  <ul class="dropdown-content">
                    <li><Link className="draplink" to={`/${auth?.userFound?.role === 1 ? 'admin' : 'user'}`}>Dashboard</Link></li>
                    <li><Link
                      to="/login"
                      className="draplink"
                      onClick={handleLogout}
                    >
                    Logout
                    </Link></li>
                  </ul>
                </div>
              </ul>
            </>
          )}

                {/* <NavLink className="nav-link" to="/login">
                  LogIn
                </NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
