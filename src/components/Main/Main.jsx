import React from "react";
import'./main.css'
import img from "../../assets/Bara.jpg";
import img2 from "../../assets/MachuPicchu.jpg";
import img3 from "../../assets/GreatBarrierReef.jpg";
import img4 from "../../assets/Cappadocia.jpg";
import img5 from "../../assets/Guanajuato.jpg";
import img6 from "../../assets/CinqueTerre.jpg";
import {HiOutlineLocationMarker} from 'react-icons/hi' 
import {BsClipboard2Check} from 'react-icons/bs' 


const Data = [
  {
    id: 1,
    imgsrc: img,
    desttitle: "Bora Bora",
    location: "New Zealand",
    grade: "CUL TRUAL RELAX",
    fees: "$700",
    description:
      "The epitome of remance, Bora Bora is one of the best  travel destinations in the world. this place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgsrc: img2,
    desttitle: "Machu Picchu",
    location: "Pure",
    grade: "CUL TRUAL RELAX",
    fees: "$600",
    description:
      "Huayna picchu is a mountain in pure, rising over Machu picchu the so-called lost city of incas. this place is popular among tourists as the sunrise from the sun Gate is simply spectacular",
  },
  {
    id: 3,
    imgsrc: img3,
    desttitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CUL TRUAL RELAX",
    fees: "$700",
    description:
      "one of the most remarkable Australia natural gifts is the Great Barrier Reef. the hallmark of this place is  lavish and beauty . always interesting to be in this place",
  },
  {
    id: 4,
    imgsrc: img4,
    desttitle: "Cappadocia",
    location: "Turkey",
    grade: "CUL TRUAL RELAX",
    fees: "$800",
    description:
      "The epitome of remance, Bora Bora is one of the best  travel destinations in the world. this place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 5,
    imgsrc: img5,
    desttitle: "Guanajuato",
    location: "Mexico",
    grade: "CUL TRUAL RELAX",
    fees: "$1100",
    description:
      "The epitome of remance, Bora Bora is one of the best  travel destinations in the world. this place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 6,
    imgsrc: img6,
    desttitle: "Cinque Terre",
    location: "Italy",
    grade: "CUL TRUAL RELAX",
    fees: "$840",
    description:
      "The epitome of remance, Bora Bora is one of the best  travel destinations in the world. this place is known for its luxurious stays and adventurous activities.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="sectitle">
        <h3 className="title">most visited destinations</h3>
      </div>
      <div className="seccontent grid">
        {Data.map(({id,imgsrc,desttitle,location,grade,fees,description})=>{
           return(
            <div className="singledestination" key={id}>
                 <div className="imgdiv">
                  <img src={imgsrc} alt={desttitle} />
                  </div> 
                 <div className="cardinfo">
                  <h4 className="destitle">
                    {desttitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small> </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    Details <BsClipboard2Check className="icon"/>
                  </button>
                  </div>  
            </div>
           )
        })}
        </div>
    </section>
  );
};

export default Main;
