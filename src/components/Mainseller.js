import React from 'react'
import './Mainseller.css'
import { Link , Outlet } from 'react-router-dom';

export default function Mainbuyer () {
  return (
    <div className='mainseller'>
      <h2 className="welcome">
        WELCOME SELLER
      </h2>
        <div className="buyeroptions">
            <div className="bidoptions">
                <ul className="bids">
                    <li className="create"> <Link to="/Bidcreatebyseller"  ><button> Create Bid </button></Link> </li>
                    <li className="manage"><Link to="/Viewbids"  ><button> View Bids </button></Link></li>
                    <li className="create"> <Link to="/Sellerprofile"  ><button> Manage Profile</button> </Link> </li>
                    <li className="create"> <Link to="/Sellercurrentbids"  ><button> Current bids</button> </Link> </li>
                </ul>
            </div>
        </div>

    </div>
  )
}