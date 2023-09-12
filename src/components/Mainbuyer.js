import React from 'react'
import './Mainbuyer.css'
import { Link , Outlet } from 'react-router-dom';

export default function Mainbuyer () {
  return (
    <div className='mainbuyer'>
      <h2 className="welcome">
        WELCOME BUYER
      </h2>
        <div className="buyeroptions">
            <div className="bidoptions">
                <ul className="bids">
                    <li className="create"> <Link to="/Bidcreatebybuyer"  > Create Bid </Link> </li>
                    <li className="manage"><Link to="/Buyerprofile"  > Manage Profile </Link></li>
                    <li className="older"> <Link to="/Buyerprebids"  > Previous Bids </Link> </li>
                    <li className="older"> <Link to="/Managebidbuyer"  > Manage Bid </Link> </li>
                </ul>
            </div>
        </div>

    </div>
  )
}
