import React from "react";

import Footer from "../Footer";
import './Style.css';
import Nav from '../../Header/Nav';

function Contact() {
  return (
    <>
    <Nav />
      <div className="contactContainer">
        <div className="aboutTitle">Contact us</div>
      </div>
      <section className="cantactSectionContainer">
        <div className="contactFlexBox">
          <div className="flexLeftBox">
            <h3 className="leftBoxHeading">
              Business Enquiry? Bugs? Catch up for tea?
            </h3>
            <form className="contactFormBox">
              <div className="formBoxContainer">
                <div className="formBoxContain">
                  <div className="bottomMargin">
                    <div className="input-container">
                      <input
                        id="name"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                      />
                      <div className="cut" />
                      <label htmlFor="name" className="placeholder">
                        Name*
                      </label>
                    </div>
                  </div>
                </div>
                <div className="formBoxContain">
                  <div className="formBoxLeftContainer">
                    <div className="input-container">
                      <input
                        id="email"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                      />
                      <div className="cut" />
                      <label htmlFor="email" className="placeholder">
                        Email*
                      </label>
                    </div>
                  </div>
                  <div className="formBoxRightContainer">
                    <div className="input-container">
                      <input
                        id="phone"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                      />
                      <div className="cut" />
                      <label htmlFor="phnoe" className="placeholder">
                        Phone*
                      </label>
                    </div>
                  </div>
                </div>
                <div className="formBoxContain">
                  <div className="bottomMargin">
                    <div className="input-container">
                      <input
                        id="query"
                        className="input"
                        type="text"
                        placeholder=" "
                        required
                      />
                      <div className="cut" />
                      <label htmlFor="query" className="placeholder">
                        Please enter your query here...*
                      </label>
                    </div>
                  </div>
                </div>
                <div className="contactCaptionMainBox">
                  <div className="contactCaptionBox">Verification box</div>
                </div>
                <div className="contactBtnBox">
                  <button className="contactBtn">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="flexRightBox">
            <div className="flexRightBoxTop">
              <h3 className="flexRightBoxTopHeading">Address</h3>
              <div className="flexRightBoxText">
                <span>
                  <b>Handy Online Solutions Private Limited</b>
                </span>
                <br />
                ThinkPlus, 18B, Institutional Area
                <br />
                Opposite Eli Lilly and Company
                <br />
                Sector 32, Gurugram, Haryana - 122003
                <br />
                <div className="flexRightBoxTextflexBox">
                  <div className="flexRightBoxTextflexBoxLeft">
                    <div className="RightBoxTextLogo Logo1"></div>
                    <div className="RightBoxTextLogo Logo2"></div>
                    <div className="RightBoxTextLogo Logo3"></div>
                    <div className="RightBoxTextLogo Logo4"></div>
                    <div className="RightBoxTextLogo Logo5"></div>
                  </div>
                  <div className="flexRightBoxTextflexBoxRight">
                    <span className="blue">080470 94800</span>
                    <br />
                    Business Inquiries - <span className="blue">partner@ongrid.in</span>
                    <br />
                    Platform Support - <span className="blue">support@ongrid.in</span>
                    <br />
                    Apply to OnGrid - <span className="blue">careers@ongrid.in</span>
                    <br />
                    Feedback - <span className="blue">feedback@ongrid.in</span> 
                  </div>
                </div>
              </div>
              <div className="contactMapBox">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.046392054422!2d77.03733517554623!3d28.448017875766045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1872871970cd%3A0x29a35131333be0ed!2sOnGrid%20-%20Background%20verification%20platform!5e0!3m2!1sen!2sin!4v1686198416472!5m2!1sen!2sin" width={320} height={250} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
