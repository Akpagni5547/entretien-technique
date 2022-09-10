import React from 'react'
import  './receipeCard.style.css'
import favoris from "../../assets/favoris.jpeg"

interface IReceipeCard{
    img: any;
}
export default function ReceipeCard({img}: IReceipeCard) {
  return (
    <div className="card">
       <img className="card-img" src={img} alt="receipe" /> 
        <div className="card-content">
            <h3>Avocado sandwich with boilded egg</h3>
            <span> <img className="bookmark" src={favoris} alt=" bookmark" /> Under 1 hour</span>
        </div>
    </div>
  )
}
