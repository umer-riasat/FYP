import React from 'react'
import './Mainseller.css'
import { Link , Outlet } from 'react-router-dom';

export default function Mainbuyer () {
  return (
    <div className='mainbuyer'>
      <h2 className="welcome">
        WELCOME SELLER
      </h2>
        <div className="buyeroptions">
            <div className="bidoptions">
                <ul className="bids">
                    <li className="create"> <Link to="/Bidcreatebyseller"  > Create Bid </Link> </li>
                    <li className="manage"><Link to="/Viewbids"  > View Bids </Link></li>
                    <li className="create"> <Link to="/Sellerprofile"  > Manage Profile </Link> </li>
                </ul>
            </div>
        </div>

    </div>
  )
}