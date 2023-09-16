import React, { useState } from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"

const Navbar = () => {
  const[active,setactive]=useState('navbar');
  // if(active==)
  const shownav=()=>{
    setactive('navbar activenavbar');
  }
  const hidenav=()=>{
    setactive('navbar');
  }
  return (
    <section className="navbarsection">
      <header className="header flex">
        <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
            </a>
        </div>
        <div className={active}>
          <ul className="navlists flex">
            <li className="navitem">
              <a href="#home" className="navlink">Home</a>
            </li>
            <li className="navitem">
              <a href="#home" className="navlink">package</a>
            </li>
            <li className="navitem">
              <a href="#home" className="navlink">shop</a>
            </li>
            <li className="navitem">
              <a href="#home" className="navlink">about</a>
            </li>
            <li className="navitem">
              <a href="#home" className="navlink">pages</a>
            </li>
            <li className="navitem">
              <a href="#home" className="navlink">news</a>
            </li>
            <li className="navitem">
              <a href="#home" className="navlink">contact</a>
            </li>
            <button className='btn' >
             <a href="#">Book Now</a>
            </button>
          </ul>
          <div className="closenavbar">
            <AiFillCloseCircle className="icon" onClick={hidenav}/>
          </div>
        </div>
        <div className="togglenavbar" onClick={shownav}>
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  )
}

export default Navbar