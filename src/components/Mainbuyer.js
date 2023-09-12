import React from 'react'
import './Mainbuyer.css'
import { Link , Outlet } from 'react-router-dom';

export default function Mainbuyer () {
  return (
    <div className='mainbuyer'>
        <div className="buyeroptions">
            <div className="bidoptions">
                <ul className="bids">
                    <li className="create"> <Link to="/Bidcreatebybuyer"  > Create Bid </Link> </li>
                    <li className="manage">Manage Bids</li>
                    <li className="older"> View old Bids </li>
                </ul>
            </div>
        </div>

    </div>
  )
}
