import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import FaQ from '../Components/FaQ';
import BookDemo from '../Components/bookDemo';
import Sign from '../Components/Sign';
import Home from '../Components/Home';
// import Uniqueid from '../Components/utility/uniqueid';
import Signup from '../Components/Signup';
import Bussiness from '../Components/Bussiness';
import About from '../Components/Footer/About';
import Contact from '../Components/Footer/Contact';
import Career from '../Components/Footer/Career';
import TermsAnd from '../Components/Footer/TermsAnd';
import Faq from '../Components/FAQs';






const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> } />
     
        <Route path='/business' element={<Bussiness /> } />
        <Route path='/faq' element={ <Faq />} />
        <Route path='/bookdemo' element={<BookDemo />} />
        <Route path='/login' element={<Sign />} />
        <Route path='/signup' element={<Signup />} />
       
         <Route path='/about' element={<About />} />
        
         <Route path='/contact' element={<Contact  />} />
        
         <Route path='/career' element={<Career  />} />
         <Route path='/tnc' element={<TermsAnd />} />
        
        
      {/* <Route path='/#business/${id}'/> */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;