import React from 'react'
import './Mainbuyer.css'
import { Link , Outlet } from 'react-router-dom';

export default function Mainbuyer () {
  return (
    <div className='mainbuyer'>
      <h1 className="welcome">
        WELCOME BUYER
      </h1>
        <div className="buyeroptions">
            <div className="bidoptions">
                <ul className="bids">
                    <li className="create"> <Link to="/Bidcreatebybuyer"  > <button>  Create Bid </button></Link> </li>
                    <li className="manage"><Link to="/Buyerprofile"  ><button> Manage Profile </button></Link></li>
                    <li className="older"> <Link to="/Buyerprebids"  ><button> Previous Bids </button></Link> </li>
                    <li className="older"> <Link to="/Buyercurrentbids"  ><button> Manage Bid </button></Link> </li>
                </ul>
            </div>
        </div>

    </div>
  )
}
