import React from 'react';
import "./Whyus.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaCalendar, FaPencilAlt, FaShieldAlt } from "react-icons/fa";
import ab from "../../assets/images/ab.jpg";

const Whyus = () => {
  return (
    <div className="whyus-sec py-5">
      <div className="container py-md-5 py-2">
        <div className="row whybox-wrap">
          <div className="col-lg-6 whybox-wrap-left">
            <div className="title-content text-left">
              <h6 className="title-subhny">Extraordinary Services</h6>
              <h3 className="title-w3l mb-sm-5 mb-4 pb-2">Why You Should Choose Medick?.</h3>
            </div>

            <div className="whybox-wrap-grid mb-4">
              <FaCalendar className="icon" />
              <div className="info">
                <h4><a href="#url">10 Years Of Experience</a></h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit. </p>
              </div>
            </div>
            <div className="whybox-wrap-grid mb-4">
              <FaPencilAlt className="icon" />
              <div className="info">
                <h4><a href="#url">Free Consultation</a></h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit. </p>
              </div>
            </div>
            <div className="whybox-wrap-grid mb-4">
            <FaShieldAlt className="icon" />
              <div className="info">
                <h4><a href="#url">100% Guranteed</a></h4>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 whybox-wrap-right pl-lg-5 position-relative mt-lg-0 mt-4">
            <img src={ab} alt="" className="img-fluid radius-image"/>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Whyus