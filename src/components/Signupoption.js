import React from 'react'
import './Signupoption.css'

 export default function Signupoption () {
  return (
    <div className='mainoption'>
        <div className="outerdiv">
            <ul className="signuplist">
                <li className='opt seller'> SignUp as Seller</li>
                <li className='opt buyer'>SignUp as Buyer</li>
                <li className='opt transporter'>SignUp as Transporter</li>
            </ul>
        </div>
    </div>
  )
}

