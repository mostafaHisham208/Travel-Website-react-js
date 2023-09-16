import React from "react";
import videeo from "../../assets/ocean_-_65560 (540p).mp4";
import "./home.css";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoTripAdvisor } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";


 


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="overlay"></div>
      <video src={videeo} muted autoPlay loop type="video/mp4"></video>
      <div className="homecontent container">
        <div className="textdiv">
          <span className="smalltext">our packages</span>
          <h1 className="hometitle">search your holiday</h1>
        </div>
        <div className="carddiv grid">
          <div className="destinationinput">
            <label htmlFor="city">search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="enter name here....." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateinput">
            <label htmlFor="data">select your date:</label>
            <div className="input flex">
              <input type="date" placeholder="enter name here....." />
            </div>
          </div>
          <div className="priceinput">
            <div className="label_total flex">
              <label htmlFor="price">max price:</label>
              <h3 className="total">$5000</h3>
            </div>

            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchoptions flex">
            <HiFilter className="icon" />
            <span>more filters</span>
          </div>
        </div>
        <div className="homefootericons flex">
          <div className="righticons">
             <FiFacebook  className="icon"/>
             <AiOutlineInstagram  className="icon"/>
             <BiLogoTripAdvisor  className="icon"/>
          </div>
          <div className="lefticons">
          <BsListTask  className="icon"/>
          <TbApps  className="icon"/>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
