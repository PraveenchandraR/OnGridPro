import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Style/style.css';

const Section4 = () => {
    
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }

     const [popup2,setPop2]=useState(false)
    const handleClickOpen2=()=>{
        setPop2(!popup2)
    }
     const [popup3,setPop3]=useState(false)
    const handleClickOpen3=()=>{
        setPop3(!popup3)
    }
    // const handleclose = () => {
    //     setPop2(popup2);
    // }
   
    
  return (
      <div>
           <section className='section4'  >
          <div className='section4head'>
            <h1 className=' sectionheading'>Our Offerings</h1>
              <hr id='hr'></hr> <br />
                  <p className='sectionintro'>We offer identity and background verifications for various candidates - covering employees and contractors, new users, customers, merchants,
                      loan applicants, etc.</p>
          </div>
              <div className='section4box'>
        
            <button id='btn1' className='btn' onClick={handleClickOpen}>
              <div className='sec4box1'><h4>OnGrid Background verification with choice of 50+ checks</h4>
                      </div>
                   
                  </button>  
                  {/* popup box1 */}
             {popup && (<div className='pop1'>
              <div className='popupheader'><h1>Digital, Real-Time or Near Real-Time</h1>
                          <Link className='demolink' to={'/bookdemo'} >BookDemo</Link>
                             <button className='closebtn' onClick={handleClickOpen} >X</button>
                      </div>      
                      
                      <hr className='popuphr'></hr>
                      <div className='popbody'>
                <div className='pop1body1'>
                          <ul className='popbody1'>
                              <li>OnGrid background verification serving 2000+ organizations for higher trust and accountability</li>
                              <li><p>Employee / contractor / provider / partner / user background verification with choice of 50+ checks - ID verification,
                                  address verification, education check, employment check, reference checks, CV validation, global database checks (world check), credit checks,
                                  bank account verification, vehicle registration verification, traffic violation check, police / court record checks, etc.</p></li>
                              <li><p>Provision to integrate HRMS or employee / contractor / provider / partner / user onboarding platform with OnGrid APIs</p></li>
                          </ul>
                           </div>
                  <div className='pop1body2'>
                               <ul>
                              <li><p>Provision for self-registration by candidate, facilitating digital collection of details, documents and consent, thereby
                                     reducing effort of the HR / Operations team</p></li>
                              <li><p>Data and document security ensured through encryption methodologies, role based access, and adherence to regulatory requirements.
</p></li>
                              <li><p>Basic checks require no document, with bulk verification format and options for large-scale hiring</p></li>
                              <li><p>Prior employment verification</p></li>
                              <li><p>Real-time status through reports and dashboards. Interim reports available as and when checks get completed.</p></li>
                          </ul>
                     </div>
                           </div>
               
              </div>)
                
                  }
                  
                  
                  <button id='btn2' className='btn' onClick={handleClickOpen2} >
                      <div className='sec4box2'>
              <h5>Gridlines APIs for instant ID verification, KYC and onboarding</h5>
                  </div></button>
                  {popup2 && (<div className='pop1'>
              <div className='popupheader'><h1>Gridlines APIs for instant ID verification, KYC and onboarding</h1>
                          <Link className='demolink' to={'/bookdemo'} >BookDemo</Link>
                             <button className='closebtn' onClick={handleClickOpen2} >X</button>
                      </div>      
                      
                      <hr className='popuphr'></hr>
                        <p className='pop2text'>Integrate Gridlines APIs in your mobile and web applications to instantly onboard users,
                                  customers, service providers, staff, merchants, etc.</p>
                      <div className='popbody'>
                          
                          <div className='pop1body1'>
                            
                          <ul className='popbody1'>
                             <li><p>Instant ID verification and KYC APIs (Passport, PAN, Aadhaar, Voter ID, Driving Licence)</p></li>
                                  <li><p>Other onboarding APIs (Instant Bank account verification, Face match, Vehicle RC verification,
                                      Credit Check, COVID vaccination verification, GST verification)</p></li>
                          </ul>
                           </div>
                  <div className='pop1body2'>
                               <ul>
                              <li><p>Simplify user onboarding, validate user details, automate trust establishment decisions such as establishing user identity,
                                      complete candidate KYC etc.</p></li>
                                  <li><p>Across all APIs, Gridlines APIs ensure high accuracy, uptime, redundancy and fault tolerance</p></li>
                              </ul>
                             
                          </div>
                           
                           </div>
                <p className='pop2footer'>To learn more, or to get a quote, please write to<a href="mailto:partner@ongrid.in" class="active" >partner@ongrid.in</a> </p>
              </div>)
                
              }


        <button id='btn3' className='btn' onClick={handleClickOpen3}> <div className='sec4box3'>
             <h5>eLockr for issuing employment credentials to ex-employees</h5>
            </div>
                  </button>
                  {popup3 && (<div className='pop1'>
              <div className='popupheader'><h1>Digital, Real-Time or Near Real-Time</h1>
                          <Link className='demolink' to={'/bookdemo'} >BookDemo</Link>
                             <button className='closebtn' onClick={handleClickOpen3} >X</button>
                      </div>      
                      
                      <hr className='popuphr'></hr>
                      <p className='pop2text'>eLockr is a free platfrom for employers to issue employment credentials to ex-employees and ex-contractors</p>
                      <div className='popbody'>
                <div className='pop1body1'>
                          <ul className='popbody1'>
                                  <li><p>Empower your ex-employees and ex-contractors by issuing digital employment credentials</p></li>
                                  <li><p>Outsource your ex-employee verification process while earning credits!</p></li>
                                   <li><p>Gain useful insights into attrition</p></li>
                          </ul>
                           </div>
                  <div className='pop1body2'>
                               <ul>
                                  <li><p>Facilitate instant verification, done digitally</p></li>
                                   <li><p>Build accountability through 65+ standardized reference tags</p></li>
                          </ul>
                     </div>
                           </div>
                <p className='pop2footer'>To learn more, visit <a href="https://elockr.io/#/" target="_blank" class="active">eLockr</a></p>
              </div>)
                
              }
           
          </div>


        </section>

    </div>
  )
}

export default Section4;