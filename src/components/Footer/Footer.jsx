import React,{useEffect} from 'react'
import "./footer.css"
import videooo from "../../assets/ocean_-_65560 (540p).mp4";
import {FiSend} from "react-icons/fi"
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"
import {FiChevronRight} from "react-icons/fi"

import Aos from 'aos'
import 'aos/dist/aos.css' 


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="footer">
      <div className="videodiv">
      <video src={videooo} type="video/mp4" autoPlay loop></video>
      </div>
      <div className="seccontent container">
        <div className="contactdiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep IN TOUCH</small>
            <h2>Travel With us</h2>
          </div>
          <div className="inputdiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
             Send<FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footercard flex">
          <div className="footerintro flex">
            <div className="logodiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className="icon"/>
               travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerparagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique commodi iure nobis voluptas corporis saepe eligendi esse consequuntur ipsum ullam sed qui sapiente consequatur possimus, quisquam doloremque officia earum!
            </div>

            <div data-aos="fade-up" className="footersocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>

              
              
            </div>
          </div>

          <div className="footerlinks grid">

            <div data-aos="fade-up"
              data-aos-duration="3000"
             className="linkgroup">
              <span className="grouptitle">
                OUR AGENCY
              </span>

              <li className="footerlist flex">
                <a href='#' >
                <FiChevronRight className="icon" />
               Services </a>
              </li>
              <li className="footerlist flex">
              <a href='#' >
                <FiChevronRight className="icon" />
               Insurance </a>
              </li> 
               <li className="footerlist flex">
               <a href='#' >
                <FiChevronRight className="icon" />
                Agency </a>
              </li>
                <li className="footerlist flex">
                <a href='#' >
                <FiChevronRight className="icon" />
                Tourism  </a>
              </li>
              <li className="footerlist flex">
              <a href='#' >
                <FiChevronRight className="icon" />
                Payment  </a>
              </li>

            </div>

            <div data-aos="fade-up"
             data-aos-duration="4000"
             className="linkgroup">
              <span className="grouptitle">
                PARTNERS
              </span>

              <li className="footerlist flex">
              <a href="#">
                <FiChevronRight className="icon" />
               Booking </a>
              </li>
              <li className="footerlist flex">
              <a href="#">
                <FiChevronRight className="icon" />
               Rentcars </a>
              </li> 
               <li className="footerlist flex">
               <a href="#">
                <FiChevronRight className="icon" />
                HostelWorld </a>
              </li>
                <li className="footerlist flex">
                <a href="#">
                <FiChevronRight className="icon" />
                Trivago   </a>
              </li>
              <li className="footerlist flex">
              <a href="#">
                <FiChevronRight className="icon" />
                  TripAdvisor  </a>
              </li>

            </div>


            <div data-aos="fade-up"           
              data-aos-duration="5000"
            className="linkgroup">
              <span className="grouptitle">
                LAST MINUTE
              </span>

              <li className="footerlist flex">
                <a href="#">
                <FiChevronRight className="icon" />
               London
               </a>
              </li>
              <li className="footerlist flex">
              <a href="#">
                <FiChevronRight className="icon" />
               California</a>
              </li> 
               <li className="footerlist flex">
               <a href="#">
                <FiChevronRight className="icon" />
                Indonesia</a>
              </li>
                <li className="footerlist flex">
                <a href="#">
                <FiChevronRight className="icon" />
                Europe  </a>
              </li>
              <li className="footerlist flex">              
               <a href="#">
                <FiChevronRight className="icon" />
                Oceania  </a>
              </li>

            </div>
          </div>

          <div  className="footerdiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH  2023 </small>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer