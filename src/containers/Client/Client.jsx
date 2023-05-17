import React from 'react';
import "./Client.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import team4 from "../../assets/images/team4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";


const Client = () => {
  return (
    <section className="clients-sec w3l-test pb-5" id="testimonials">
      <div className="midd-w3 py-5">
        <div className="container py-lg-5 py-md-4 pt-2 pb-lg-5">
          <div className="title-content text-center">
            <h6 className="title-subhny text-center">Happy Clients</h6>
            <h3 className="title-w3l mb-sm-5 mb-4 pb-sm-o pb-2 text-center">What Our Clients Say</h3>
          </div>
          <div id="owl-demo2" className="owl-carousel owl-theme mt-4 py-md-2 mb-md-4">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="row">
                <div className="item col-lg-4">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>Pellen tesque libero ut justo</q>
                      </blockquote>
                      <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                        faucibus orci luctus.Vivamus a ligula quam tesque et libero ut justo, ultrices in. </p>
                    </div>
                    <div className="bottom-info mt-4">
                      <a className="comment-img" href="#url"><img src={team1} className="img-responsive"
                        alt="placeholder image" /></a>
                      <div className="people-info align-self">
                        <h3>Johnson william</h3>
                        <p className="identity">Example City</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-lg-4">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>Lorem ipsum dolor sit amet</q>
                      </blockquote>
                      <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                        faucibus orci luctus.Vivamus a ligula quam tesque et libero ut justo, ultrices in. </p>
                    </div>
                    <div className="bottom-info mt-4">
                      <a className="comment-img" href="#url"><img src={team2} className="img-responsive"
                        alt="placeholder image" /></a>
                      <div className="people-info align-self">
                        <h3>Alexander sakura</h3>
                        <p className="identity">Example City</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-lg-4">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>Pellen tesque libero ut justo</q>
                      </blockquote>
                      <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                        faucibus orci luctus.Vivamus a ligula quam tesque et libero ut justo, ultrices in. </p>
                    </div>
                    <div className="bottom-info mt-4">
                      <a className="comment-img" href="#url"><img src={team3} className="img-responsive"
                        alt="placeholder image" /></a>
                      <div className="people-info align-self">
                        <h3>John wilson</h3>
                        <p className="identity">Example City</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                <div className="item col-lg-4">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>Lorem ipsum dolor sit amet</q>
                      </blockquote>
                      <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                        faucibus orci luctus.Vivamus a ligula quam tesque et libero ut justo, ultrices in. </p>
                    </div>
                    <div className="bottom-info mt-4">
                      <a className="comment-img" href="#url"><img src={team4} className="img-responsive"
                        alt="placeholder image" /></a>
                      <div className="people-info align-self">
                        <h3>Julia sakura</h3>
                        <p className="identity">Example City</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-lg-4">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>Pellen tesque libero ut justo</q>
                      </blockquote>
                      <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                        faucibus orci luctus.Vivamus a ligula quam tesque et libero ut justo, ultrices in. </p>
                    </div>
                    <div className="bottom-info mt-4">
                      <a className="comment-img" href="#url"><img src={team2} className="img-responsive"
                        alt="placeholder image" /></a>
                      <div className="people-info align-self">
                        <h3>John wilson</h3>
                        <p className="identity">Example City</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-lg-4">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <blockquote>
                        <q>Lorem ipsum dolor sit amet.</q>
                      </blockquote>
                      <p>Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
                        faucibus orci luctus.Vivamus a ligula quam tesque et libero ut justo, ultrices in. </p>
                    </div>
                    <div className="bottom-info mt-4">
                      <a className="comment-img" href="#url"><img src={team3} className="img-responsive"
                        alt="placeholder image" /></a>
                      <div className="people-info align-self">
                        <h3>Julia sakura</h3>
                        <p className="identity">Example City</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Client