import React from 'react';
import "./Service.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAmericanSignLanguageInterpreting, FaBuilding, FaEye, FaHeartbeat, FaSnowflake, FaSuperpowers } from "react-icons/fa";

const Service = () => {
  return (
    <section className="service-sec py-5" id="features">
      <div className="content-4-main py-lg-5 py-md-4">
        <div className="container">
          <div className="title-content text-center">
            <h6 className="title-subhny">Extraordinary Services</h6>
            <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">Our Services.</h3>
          </div>
          <div className="content-info-in row">
            <div className="content-left col-lg-6">
              <div className="row content4-right-grids mb-sm-5 mb-4">
                <div className="col-lg-2 col-3 content4-right-icon">
                  <div className="content4-icon icon-clr1">
                    <FaAmericanSignLanguageInterpreting className="icon" />
                  </div>
                </div>
                <div className="col-lg-10 col-9 content4-right-info pl-4">
                  <h6><a href="#url">Therapiya</a></h6>
                  <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                    adipisicing.</p>
                </div>
              </div>
              <div className="row content4-right-grids mb-sm-5 mb-4">
                <div className="col-lg-2 col-3 content4-right-icon">
                  <div className="content4-icon icon-clr2">
                    <FaSuperpowers className="icon" />
                  </div>
                </div>
                <div className="col-lg-10 col-9 content4-right-info pl-4">
                  <h6><a href="#url">Dentistry</a></h6>
                  <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                    adipisicing.</p>
                </div>
              </div>
              <div className="row content4-right-grids mb-sm-5 mb-4">
                <div className="col-lg-2 col-3 content4-right-icon">
                  <div className="content4-icon icon-clr2">
                    <FaSnowflake className="icon" />
                  </div>
                </div>
                <div className="col-lg-10 col-9 content4-right-info pl-4">
                  <h6><a href="#url">Virusology</a></h6>
                  <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                    adipisicing.</p>
                </div>
              </div>
            </div>
            <div className="content-right col-lg-6 pl-lg-4 mt-lg-0 mt-2">
              <div className="row content4-right-grids mb-sm-5 mb-4">
                <div className="col-lg-2 col-3 content4-right-icon">
                  <div className="content4-icon icon-clr3">
                    <FaBuilding className="icon" />
                  </div>
                </div>
                <div className="col-lg-10 col-9 content4-right-info pl-4">
                  <h6><a href="#url">Pharmocology</a></h6>
                  <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                    adipisicing.</p>
                </div>
              </div>
              <div className="row content4-right-grids mb-sm-5 mb-4">
                <div className="col-lg-2 col-3 content4-right-icon">
                  <div className="content4-icon icon-clr4">
                    <FaHeartbeat className="icon" />
                  </div>
                </div>
                <div className="col-lg-10 col-9 content4-right-info pl-4">
                  <h6><a href="#url"> Cardiology</a></h6>
                  <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                    adipisicing.</p>
                </div>
              </div>
              <div className="row content4-right-grids">
                <div className="col-lg-2 col-3 content4-right-icon">
                  <div className="content4-icon icon-clr4">
                    <FaEye className="icon" />
                  </div>
                </div>
                <div className="col-lg-10 col-9 content4-right-info pl-4">
                  <h6><a href="#url"> Eye Surgery</a></h6>
                  <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                    adipisicing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service