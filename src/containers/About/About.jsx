import React from 'react';
import "./About.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const About = () => {
  return (
    <div className="about-sec py-5">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="row w3l-content-inf mt-lg-5 pt-lg-5">
          <div className="col-lg-5 w3l-content-left mt-lg-4">
            <h6 className="title-subhny mb-2">About Us</h6>
            <h3 className="title-w3l mb-4">Changing the way you receive healthcare.</h3>
          </div>
          <div className="col-lg-7 w3l-content-right pl-lg-5 mt-lg-4">
            <p className="para-sub pr-lg-5 mt-md-4 mt-3 mx-auto">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui
              eligendi
              vitae sit.Ea
              ipsum sed consequuntur illum facere.Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo
              non..
            </p>
            <p className="para-sub pr-lg-5 mt-md-4 mt-3 mx-auto">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui
              eligendi
              vitae sit.Ea
              ipsum sed consequuntur illum facere.
            </p>
            <a className="btn-style btn-outline-light mt-sm-5 mt-4 mr-2" href="/about">
              Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About