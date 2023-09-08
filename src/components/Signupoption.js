import React from 'react'
import './Signupoption.css'
import { Link, Outlet } from 'react-router-dom';

 export default function Signupoption () {
  return (
    <div className='mainoption'>
        <div className="outerdiv">
            <ul className="signuplist">
              <li className='opt seller' >  <Link to="/SignUpseller"  > SignUp as Seller </Link></li>
              <li className='opt buyer'>  <Link to="/SignUpseller"  > SignUp as Buyer </Link></li>
              <li className='opt transporter'> <Link to="/SignUpseller"  > SignUp as Transporter </Link></li>
            </ul>
        </div>
    </div>
  )
}

