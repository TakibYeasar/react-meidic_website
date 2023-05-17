import React from 'react';
import "./Motivation.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaHandshake, FaLightbulb, FaPodcast } from "react-icons/fa";

const Motivation = () => {
  return (
    <section className="motivation-sec py-5" id="services1">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="title-content text-center">
          <h6 className="title-subhny text-center">Motivation is easy</h6>
          <h3 className="title-w3l mb-sm-5 mb-4 pb-sm-o pb-2 text-center">Our Core Values</h3>
        </div>
        <div className="grids-area-hny text-center row mt-lg-4">
          <div className="col-lg-4 col-md-6 grids-feature">
            <div className="area-box icon-blue">
              <FaLightbulb className="icon" />
              <h4><a href="#feature" className="title-head">Innavation</a></h4>
              <p>Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor
                amet.</p>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
            <div className="area-box icon-pink">
              <FaHandshake className="icon" />
              <h4><a href="#feature" className="title-head">Compassion</a></h4>
              <p>Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et
                amet.</p>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
            <div className="area-box icon-yellow">
              <FaPodcast className="icon" />
              <h4><a href="#feature" className="title-head">Integrity</a></h4>
              <p>Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et
                amet.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motivation