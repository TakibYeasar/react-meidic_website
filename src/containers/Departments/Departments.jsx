import React from 'react';
import "./Departments.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaArrowRight, FaFacebook, FaTwitter } from "react-icons/fa";
import g1 from "../../assets/images/g1.jpg";
import g2 from "../../assets/images/g2.jpg";
import g3 from "../../assets/images/g3.jpg";
import g4 from "../../assets/images/g4.jpg";
import g5 from "../../assets/images/g5.jpg";
import g6 from "../../assets/images/g6.jpg";

const Departments = () => {
  return (
    <section className="departments-sec">
      <div className="breadcrumb-bg w3l-inner-page-breadcrumb py-5">
        <div className="container pt-lg-5 pt-md-3 p-lg-4 pb-md-3 my-lg-3">
          <h2 className="title pt-5">Departments</h2>
          <ul className="breadcrumbs-custom-path mt-3 text-center">
            <li><a href="/">Home</a></li>
            <li className="active"><FaArrowRight className=" mx-2" aria-hidden="true" /> Departments </li>
          </ul>
        </div>
      </div>

      <div className="position-relative">
        <div className="shape overflow-hidden">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section className="dept-services py-5" id="services1">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-content text-center">
            <h6 className="title-subhny text-center">
              Services
            </h6>
            <h3 className="title-w3l mb-sm-5 mb-4 pb-sm-o pb-2 text-center">Our Departments</h3>
          </div>
          <div className="grids-area-hny text-center row mt-lg-4">
            <div className="col-lg-4 col-md-6 grids-feature">
              <div className="area-box icon-blue">
                <a href="#"> <img src={g1} alt="" className="img-fluid radius-image"/></a>
                <h4><a href="#feature" className="title-head">Prosthodontist</a></h4>
                <div className="w3doctor-box-bottom">
                  <div className="doctor-phone"><p><a href="tel:+1(21) 234 4567">+1(21) 234 557 4567</a></p></div>
                  <div className="social-icons-dr">
                    <a href="#url" className="twitter"><FaTwitter /></a>
                    <a href="#url" className="facebook"><FaFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
              <div className="area-box icon-pink">
                <a href="#"> <img src={g2} alt="" className="img-fluid radius-image"/></a>
                <h4><a href="#feature" className="title-head">Orthodontist</a></h4>
                <div className="w3doctor-box-bottom">
                  <div className="doctor-phone"><p><a href="tel:+1(21) 234 4588">+1(21) 234 557 4588</a></p></div>
                  <div className="social-icons-dr">
                    <a href="#url" className="twitter"><FaTwitter /></a>
                    <a href="#url" className="facebook"><FaFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
              <div className="area-box icon-yellow">
                <a href="#"> <img src={g3} alt="" className="img-fluid radius-image"/></a>
                <h4><a href="#feature" className="title-head">Oral Health Therapist</a></h4>
                <div className="w3doctor-box-bottom">
                  <div className="doctor-phone"><p><a href="tel:+1(21) 234 4597">+1(21) 234 557 4597</a></p></div>
                  <div className="social-icons-dr">
                    <a href="#url" className="twitter"><FaTwitter /></a>
                    <a href="#url" className="facebook"><FaFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-5 mt-4">
              <div className="area-box icon-yellow">
                <a href="#"> <img src={g4} alt="" className="img-fluid radius-image"/></a>
                <h4><a href="#feature" className="title-head">
                  Implantologist</a></h4>
                <div className="w3doctor-box-bottom">
                  <div className="doctor-phone"><p><a href="tel:+1(21) 234 4597">+1(21) 234 557 4597</a></p></div>
                  <div className="social-icons-dr">
                    <a href="#url" className="twitter"><FaTwitter /></a>
                    <a href="#url" className="facebook"><FaFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-5 mt-4">
              <div className="area-box icon-yellow">
                <a href="#"> <img src={g5} alt="" className="img-fluid radius-image"/></a>
                <h4><a href="#feature" className="title-head">Orthodontist</a></h4>
                <div className="w3doctor-box-bottom">
                  <div className="doctor-phone"><p><a href="tel:+1(21) 234 4567">+1(21) 234 557 4567</a></p></div>
                  <div className="social-icons-dr">
                    <a href="#url" className="twitter"><FaTwitter /></a>
                    <a href="#url" className="facebook"><FaFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-5 mt-4">
              <div className="area-box icon-yellow">
                <a href="#"> <img src={g6} alt="" className="img-fluid radius-image"/></a>
                <h4><a href="#feature" className="title-head">
                  Cosmetic Dentist</a></h4>
                <div className="w3doctor-box-bottom">
                  <div className="doctor-phone"><p><a href="tel:+1(21) 234 4569">+1(21) 234 557 4569</a></p></div>
                  <div className="social-icons-dr">
                    <a href="#url" className="twitter"><FaTwitter /></a>
                    <a href="#url" className="facebook"><FaFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Departments