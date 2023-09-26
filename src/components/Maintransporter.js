import React from 'react'
import './Maintransporter.css'
import { Link } from 'react-router-dom';

export default function Maintransporter() {
  return (
    <div className='maintrans'>
<h1 className="welcome">
        WELCOME TRANSPORTER
      </h1>
        <div className="buyeroptions">
            <div className="bidoptions">
                <ul className="bids">
                    <li className="create"> <Link to="/Transporterprofile"  > <button>  Profile </button></Link> </li>
                     <li className="manage"><Link to="/Viewbids"  ><button> View bids </button></Link></li>
                </ul> 
            </div>
        </div>
    </div>
  )
}
