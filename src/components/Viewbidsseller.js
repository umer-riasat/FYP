import React from 'react'
import "./Viewbidsseller.css"
import { Link } from 'react-router-dom'

    
export default function Viewbidsseller () {
  return (

    <div className='flexing'>
    <div className='outerdash' >
        <div className="dashboard">
        <div className="option" >
              <Link to="/Mainseller"> <button>  Home </button></Link>
          </div>
        <div className="option" >
              <Link to="/Viewbidsseller"> <button>  View bids </button></Link>
          </div>
          <div className="option" >
              <Link to="/Bidcreatebyseller"> <button>  Create Bid </button></Link>
          </div>
          <div className="option">
              <Link to="/Sellercurrentbids"> <button> Current Bids </button></Link>
          </div>
          <div className="option">
              <Link to="/Sellerprofile"> <button> Manage Profile </button></Link>
          </div>
      </div>
    </div>

    <div className='viewbids'>
        <h1>Live Bids</h1>
    <div className="tablediv">
    <table>
        <thead>
            <tr>
                <th>Quantity</th>
                <th>Location</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr onclick="selectBid(this)">
                <td>1</td>
                <td>1333 main</td>
                <td>cotton</td>
                <td>1000$</td>
                 {/* <td>
                     <div className="editbuton">
                    <Link to="/Biddetails" >
                        <button>
                            Details
                        </button>
                    </Link>
                     <Link to="/Viewbuyerprofile" >
                        <button>
                            View Buyer 
                        </button>
                    </Link> 
                    </div> 
                </td>  */}
            </tr>

            </tbody>
    </table>
    </div>

    <div className='desc'>
        <div className="">
        <h4>Description</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eum!
        </p>
        </div>
    </div>

    <div className='yourbid'>
        <input className='in' placeholder='Enter your price ' type="text" id="bidAmount"/>
        <button>Bid </button>
    </div>

    </div>
    </div>
  )
}
