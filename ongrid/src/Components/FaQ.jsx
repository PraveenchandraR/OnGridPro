import React from 'react'
import Nav from '../Header/Nav';
import '../Style/faq.css';
import Footer from './Footer';

const FaQ = () => {
  return (
    <div>
      <div>
         <Nav />
      </div>
      <div className='faqimage'>
<h1>Frequently Asked Questions (FAQs)</h1>
      </div>
      <div className='faqs'>
        <h3>FAQs by client organizations</h3>
        <ol>
          <li><h3>What is background verification (BGV)?</h3><div>
            <p>
              Background verification (BGV), also referred to as Background check (BGC) or background screening is a process
              that validates the credentials claimed by an individual going through the BGV process. The individual can be an employee,
              contractor, user, loan applicant, merchant, or a candidate requesting to access any product or service. The BGV process is
              a combination of checks, and the organization requesting BGV generally selects the list of checks. Some common checks include                     identity verification, address verification, criminal record check, prior employment verification, highest education verification,                     professional reference checks, credit history checks, etc.
            </p>
            </div></li>
          <li><div><h3>What is the potential impact of not doing background verification?</h3>
            <p>
              Not running background checks can lead to various risks for an organization such as ending up with a bad hire,
              non-compliance to ISO requirements, organization brand value, and reputational risk, safety risks, as well as financial
              liability risks.<br />
              In context of employment, not doing Background verification (BGV) can lead to induction of a wrong hire (or a hire with
              a malicious past), that can in turn adversely impact the team culture, or even result in modern-day threats related to data security.<br />
              According to a 2014 survey, a wrong hire can single-handedly bring down the team productivity by 15% and can cause negative financial impact
              accounting for 10 times the cost to the company (CTC).
            </p>
            </div></li>
          <li><div><h3>How can we start BGV of our employees?</h3>
            <ol>
              <li>OnGrid team will demonstrate the platform. You can request for a demo <a href="#/bookDemo"><u>here</u></a>.</li>
              <li>Agreement between OnGrid and client organization, indicating the list of checks and mode of secure information exchange.</li>
              <li>There are four options of information (data, documents, consent) exchange, and the client can choose one. These options include:
                <ol type="i">
                  <li>API integration,</li>
                  <li>Self-registration by the candidate,</li>
                  <li>Registration and request by authorized user, or</li>
                  <li>Bulk data format shared by the client</li>
                </ol>                        </li>                    </ol>
            </div></li>
          <li><div><h3>What checks can be conducted under BGV? Do you have fixed packages, or can we</h3>
            <p>
              Most verifications that are primarily digital in nature, such as ID verification, criminal record verification, credit score check, 
               bank account verification, eLockr reference check (proprietary check only offered by OnGrid) get completed in 
            </p>
            </div></li>
          <li><div><h3></h3>
            <p>
              The checks include ID verification (National IDs such as Aadhaar, PAN, Driving License, Voter ID, Passport), Court/criminal record verification, Address
              verification (physical visit), Address verification (postal method), Education record verification, Employment record verification, Professional reference checks,
              Police verification through law firm, Police verification through State department, Global database check, Credit check, Drug test, Traffic violation check, Curriculum Vitae
              (CV) validation, Vehicle registration check, Directorship check, Bank account verification, GST verification, Vendor due diligence, Medical registration checks.
            </p>
            </div></li>
        </ol>
       
      </div>
      <Footer />
      </div>
  )
}

export default FaQ;