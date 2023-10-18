import React from 'react'
import { Link } from 'react-router-dom';
import "./Buyerdashboard.css"

export default function Buyerdashboard() {
  return (
    <div  >
      <div className="dashboard">
        <div className="option" >
            <Link to="/Bidcreatebybuyer"> <button>  Create Bid </button></Link>
        </div>
        <div className="option">
            <Link to="/Buyercurrentbids"> <button> Manage Bid </button></Link>
        </div>
        <div className="option">
            <Link to="/Buyerprofile"> <button> Manage Profile </button></Link>
        </div>
    </div>
    </div>
  )
}
