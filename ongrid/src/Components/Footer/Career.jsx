import React from "react";
import Nav from '../../Header/Nav';
import Footer from "../Footer";
import './Style.css';

function Career() {
  return (
    <>
  <Nav />
      <div className="careerContainer">
        <div className="aboutTitle">Brighten Your Future!</div>
      </div>
      <section>
        <div className="container">
          <div className="containerBoxOne">
            <h3 className="text1">Explore opportunities with us!</h3>
            <div className="para1">
              We are a team of individuals with diverse backgrounds and
              expertise, all driven with a common purpose of enabling secure and
              digital transactions in a modern and growing India, with an
              opportunity to help millions of Indians access services easily,
              meet their aspirations, and provide upward mobility in society.
              All playing different yet significant roles, all working fervently
              towards creating better user experiences, all driven with a thirst
              for innovation. And in that dynamic, fast-paced community is a
              cornucopia of opportunities, for you. Pick a team, find your
              opportunity and get in touch with us.
            </div>
          </div>
        </div>
      </section>
      <section className="aboutSection2">
        <div className="section2Box">
          <h2 className="section2Heading">Current Openings</h2>
          <div className="section2Para marginTop">
            <span className="careerFont">
              Currently, there are no open positions.
            </span>
            <br />
            However, please write to OnGrid with your profile if you are
            interested to be a part of the OnGrid journey.
          </div>
          <button className="careerBtn">Send your CV to <span className="blue">partner@ongrid.in</span></button>
        </div>
      </section>
      <Footer />
     
    </>
  );
}

export default Career;
