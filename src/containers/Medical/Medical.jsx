import React from 'react';
import "./Medical.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaGlobe, FaShieldAlt, FaUser } from "react-icons/fa";

const Medical = () => {
  return (
      <div className="banner-sec">
        <div className="banner-content">
          <div className="container">
            <div className="bannerhny-info text-center">
              <h6 className="title-subhny mb-2">Medical</h6>
              <h3 className="">Better Doctors. Better Care.</h3>
              <a className="btn-style btn-white mt-sm-5 mt-4" href="/about">
                Read More</a>
            </div>
          </div>
      </div>
      
      <section className="home-services pt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                    <FaUser className="icon" />
                  <div className="info">
                    <p>Protect</p>
                    <h4><a href="#url">Qualified Team</a></h4>
                  </div>
                </div>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                    <FaShieldAlt className="icon" />
                  <div className="info">
                    <p>Help</p>
                    <h4><a href="#url">Quality Service</a></h4>

                  </div>
                </div>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                    <FaGlobe className="icon" />
                  <div className="info">
                    <p>World</p>
                    <h4><a href="#url">Global Work</a></h4>

                  </div>
                </div>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Medical