import React from 'react';
import "./Blog.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaClock, FaComments, FaUser } from "react-icons/fa";
import g3 from "../../assets/images/g3.jpg";
import g5 from "../../assets/images/g5.jpg";
import g7 from "../../assets/images/g7.jpg";

const Blog = () => {
  return (
    <section className="blog-sec py-5" id="blog">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="title-content text-center">
          <h6 className="title-subhny text-center">Latest News</h6>
          <h3 className="title-w3l pb-sm-o pb-2 text-center">Blog Posts</h3>
        </div>
        <div className="row inner-sec">
          <div className="col-lg-4 col-md-6 about-in blog-grid-info text-left mt-5">
            <div className="card img">
              <div className="card-body img">
                <a href="/blog-single" className="d-block">
                  <img src={g7} alt="" className="img-fluid radius-image"/>
                </a>
                <div className="blog-des mt-4">
                  <h6 className="card-cap mb-2"><a href="/blog-single">Investigations</a></h6>
                  <h5 className="card-title mb-2"><a href="/blog-single">The Right Choice For Your Health Care Needs.</a>
                  </h5>
                  <ul className="admin-post mb-3">
                    <li><FaUser className="icon" /><a href="#admin"> by Admin</a></li>
                    <li><p><FaClock className="icon" /> Jan 22,2021</p></li>
                    <li><a href="#comments"><FaComments className="icon" /> 3</a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 about-in blog-grid-info text-left mt-5">
            <div className="card img">
              <div className="card-body img">
                <a href="/blog-single" className="d-block">
                  <img src={g5} alt="" className="img-fluid radius-image"/>
                </a>
                <div className="blog-des mt-4">
                  <h6 className="card-cap mb-2"><a href="/blog-single">Researches</a></h6>
                  <h5 className="card-title mb-2"><a href="/blog-single">The Right Choice For Your Health Care Needs.</a>
                  </h5>
                  <ul className="admin-post mb-3">
                    <li><FaUser className="icon" /><a href="#admin"> by Admin</a></li>
                    <li><p><FaClock className="icon" /> Jan 24,2021</p></li>
                    <li><a href="#comments"><FaComments className="icon" /> 3</a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 about-in blog-grid-info text-left mt-5">
            <div className="card img">
              <div className="card-body img">
                <a href="/blog-single" className="d-block">
                  <img src={g3} alt="" className="img-fluid radius-image"/>
                </a>
                <div className="blog-des mt-4">
                  <h6 className="card-cap mb-2"><a href="/blog-single">Your Health </a></h6>
                  <h5 className="card-title mb-2"><a href="/blog-single">The Right Choice For Your Health Care Needs.</a>
                  </h5>
                  <ul className="admin-post mb-3">
                    <li><FaUser className="icon" /><a href="#admin"> by Admin</a></li>
                    <li><p><FaClock className="icon" /> Jan 28,2021</p></li>
                    <li><a href="#comments"><FaComments className="icon" /> 3</a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section >
  )
}

export default Blog