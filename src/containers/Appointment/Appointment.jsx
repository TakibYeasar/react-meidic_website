import React from 'react';
import "./Appointment.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Appointment = () => {
  return (
    <section className="appointment-sec py-5">
      <div className="content-3-info py-3">
        <div className="container py-lg-4">
          <div className="row appointment-formw3">
            <div className="col-lg-6 welcome-left">
              <h6 className="title-subhny mb-2">Free Appointment</h6>
              <h3 className="title-w3l two mb-3">Make an Appointment</h3>
              <p className="mb-3">
                We believe in providing the best possible care to all our existing patients and welcomenew patients to
                sample.</p>
              <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio adipisicing.</p>
              <a className="btn-style btn-outline-light mt-sm-5 mt-4 mr-2" href="#">
                Contact Us</a>
            </div>
            <div className="col-lg-6 free-appointment pl-lg-5 mt-5">
              <div className="appointment-form">
                <form action="#" method="post">
                  <div className="fields-grid">
                    <div className="styled-input">

                      <div className="appointment-form-field">

                        <input type="text" name="fullname" placeholder="Full Name" required=""/>
                      </div>
                    </div>
                    <div className="styled-input">

                      <div className="appointment-form-field">

                        <input type="email" name="email" placeholder="Enter Email" required=""/>
                      </div>
                    </div>
                    <div className="styled-input">

                      <div className="appointment-form-field">

                        <input type="text" name="phone" placeholder="Enter Number" required=""/>
                      </div>
                    </div>

                    <div className="styled-input">

                      <div className="appointment-form-field">

                        <input type="date" name="date" placeholder="Set a Date" required=""/>
                      </div>
                    </div>
                    <div className="styled-input">

                      <div className="appointment-form-field">

                        <select id="department" required="Specialization">
                          <option value="">Specialization*</option>
                          <option value="">Cardiology</option>
                          <option value="">Heart Surgery</option>
                          <option value="">Skin Care</option>
                          <option value="">Body Check-up</option>
                          <option value="">Numerology</option>
                          <option value="">Diagnosis</option>
                          <option value="">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="styled-input">

                      <div className="appointment-form-field">

                        <select id="doctor" required="Select Doctor">
                          <option value="">Select Doctor</option>
                          <option value="">Doctor 1</option>
                          <option value="">Doctor 2</option>
                          <option value="">Doctor 3</option>
                          <option value="">Doctor 4</option>
                          <option value="">Doctor 5</option>
                          <option value="">Doctor 6</option>
                          <option value="">Doctor 7</option>
                        </select>
                      </div>
                    </div>

                  </div>
                  <div className="appointment-btn text-lg-right">
                    <button type="submit" className="btn-style mt-4">Book Appointment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment