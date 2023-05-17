import React from 'react'
import { About, Appointment, Blog, Client, Medical, Service, Stat, Whyus } from '../containers'

const Homepage = () => {
  return (
    <div className="homepage">
      <Medical />
      <About />
      <Whyus />
      <Service />
      <Stat />
      <Blog />
      <Appointment />
      <Client />
    </div>
  )
}

export default Homepage