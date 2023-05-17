import React from 'react';
import "./Team.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import team4 from "../../assets/images/team4.jpg";

const teamData = [
  {
    image: team1,
    name: 'Jennifer Foster',
    title: 'Associate Dentist',
  },
  {
    image: team2,
    name: 'Dhony Abraham',
    title: 'Orthodontist',
  },
  {
    image: team3,
    name: 'Marko Dugonji',
    title: 'Health Therapist',
  },
  {
    image: team4,
    name: 'Rhoda Byrd',
    title: 'Implantologist',
  },
]

const Team = () => {
  return (
    <section className="w3l-team">
      <div className="team py-5">
        <div className="container py-lg-5 py-md-4">
          <div className="title-content text-center">
            <h6 className="title-subhny text-center">Leading Team</h6>
            <h3 className="title-w3l mb-sm-3 text-center">Meet Our Team</h3>
          </div>
          <div className="row team-row">

            {teamData?.map((item, index) => (
              <div className="col-lg-3 col-6 team-wrap mt-4 pt-lg-2">
                <div className="team-info">
                  <div className="column position-relative img-circle">
                    <a href="#url"><img src={item?.image} alt="" className="img-fluid" /></a>
                  </div>
                  <div className="column-btm">
                    <h3 className="name-pos"><a href="#url">{item?.name}
                    </a></h3>
                    <p>{item?.title}</p>
                    <div className="social">
                      <FaFacebook aria-hidden="true" href="#facebook" className="facebook" />
                      <FaTwitter aria-hidden="true" href="#twitter" className="twitter" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Team