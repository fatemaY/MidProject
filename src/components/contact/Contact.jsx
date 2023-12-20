import React from 'react'
import './contact.css'
import { AiOutlineMobile, AiOutlineMail } from 'react-icons/ai'
import Navbar from '../navbar/Navbar'

const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className="contact-head-wrapper">
        <div className="head-nav">
          <Navbar />
        </div>
        <div className="contact-head">
          <p> Contact </p>
        </div>
      </div>

      {/* Box */}
      <div className="contactFillerContatiner">
        <div className="fillerWrapper">
          <p>
            At High MAth Tutoring centre, we aim to personalize every session in Mathematics to 
            meet the needs of our students, and focus on areas on which the students have 
            the potential to improve.
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="mainContainer">
        <div className="mainFlexbox">
          <div className="mainLeftPane">
            <p> Where to find us? </p>
          </div>
          <div className="mainRightPane">
            <p> Contact Details : </p>
            <p> High Math Tutoring Centre </p>
            <p> South,in Tamra city </p>
            <p> <AiOutlineMobile /> Mb: 0525555552 </p>
            <p> <AiOutlineMail /> Email: <a href='mailto:high-math-tutoring@gmail.com'> High_Math </a> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact