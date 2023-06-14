import React from "react";
import "./Style.css";
import Footer from "../Footer";
import Nav from '../../Header/Nav';


function About() {
  return (
    <>
<Nav />
      <div className="aboutContainer">
        
        <div className="aboutTitle">About Us!</div>
      </div>
      <section>
        <div className="container">
          <div className="containerBoxOne">
            <h3 className="text1">How it all began</h3>
            <div className="para1">
              OnGrid was established in 2015 with the vision of catalyzing trust
              and accountability in communities with a trust deficit. Our
              philosophy is to enable individuals and organizations to engage in
              a frictionless manner in a high-trust environment by facilitating
              data-driven decisions that go beyond fact-checking.
            </div>
          </div>
        </div>
      </section>
      <section className="aboutSection2">
        <div className="section2Box">
          <h2 className="section2Heading">Where we are</h2>
          <div className="section2Para">
            OnGrid is a reputed name in the space of trust establishment via
            background verification and checks, having served over 2000+ clients
            across multiple industries, and having completed over 100 million
            checks. We continue to grow at a rapid pace, as we introduce new
            solutions such as <span className="blue">eLockr</span> and{" "}
            <b>Gridlines</b> for making trust establishment and verifications
            faster, cheaper, and more accurate.
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="containerBoxOne">
            <h3 className="text1">Our team</h3>
            <div className="para1">
              Our team comprises of passionate people across engineering,
              product management, operations, business development and account
              management, who are committed to solving the trust-deficit problem
              in a manner that is elegant, and easy to adopt for our clients. We
              are a team of 200+ full-time employees and 1000+ contractual field
              verifiers. We are constantly hiring, and if you wish to be a part
              of our team, give us a shout at{" "}
              <span className="blue">careers@ongrid.in.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutSection2">
        <div className="section2Box">
          <h2 className="section2Heading">Our core values</h2>
          <div className="section2Para">
            1. Be the gatekeepers to authenticity, and protect the truth. <br />
            2. Creating a fair working world, devoid of fraud. <br />
            3. Empower the less privileged to achieve upward mobility.
          </div>
        </div>
      </section>
    <Footer />
    </>
  );
}

export default About;
