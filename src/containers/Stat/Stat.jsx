import React from 'react';
import "./Stat.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaLaptop, FaSmile, FaTrophy, FaUser } from "react-icons/fa";

const Stat = () => {
  return (
    <section className="stats-sec py-lg-0 py-5" id="stats">
      <div className="gallery-inner container py-lg-0 py-3">
        <div className="row stats-con">
          <div className="col-lg-3 col-6 stats_info counter_grid">
            <FaUser className="icon" />
            <p className="counter">1100</p>
            <h4>Expert Doctors</h4>
          </div>
          <div className="col-lg-3 col-6 stats_info counter_grid1">
            <FaLaptop className="icon" />
            <p className="counter">1020</p>
            <h4>Health Programs</h4>
          </div>
          <div className="col-lg-3 col-6 stats_info counter_grid mt-lg-0 mt-5">
            <FaSmile className="icon" />
            <p className="counter">912</p>
            <h4>Happy Clients</h4>
          </div>
          <div className="col-lg-3 col-6 stats_info counter_grid2 mt-lg-0 mt-5">
            <FaTrophy className="icon" />
            <p className="counter">80</p>
            <h4>Success Meets</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stat