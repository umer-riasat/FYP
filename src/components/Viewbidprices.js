import React from 'react'
import "./Viewbidprices.css"
import { Link } from 'react-router-dom'

export default function Viewbidprices() {
  return (

    <div className='flexing'>
    <div className='outerdash' >
        <div className="dashboard">
        <div className="option" >
              <Link to="/Viewbidsseller"> <button>  View bids </button></Link>
          </div>
          <div className="option" >
              <Link to="/Bidcreatebyseller"> <button>  Create Bid </button></Link>
          </div>
          <div className="option">
              <Link to="/Sellercurrentbids"> <button> Manage Bid </button></Link>
          </div>
          <div className="option">
              <Link to="/Sellerprofile"> <button> Manage Profile </button></Link>
          </div>
      </div>
    </div>

    <div>
      <div className='viewbidprices'>
      <div className='heading'>
        <h1>Bid Response By Transporters</h1>
      </div>
     <div className='bidprice'>
    <table border="1">
        <tr>
            <th>Seller Name</th>
            <th>Address</th>
            <th>Category</th>
            <th>Bidding Price</th>
            <th></th>
        </tr>
        <tr>
            <td>Seller 1</td>
            <td>Address 1</td>
            <td>Cotton</td>
            <td>$1000</td>
            <td>
                    <div className="viewbutton">
                    <Link to="" >
                        <button>
                            Accept
                        </button>
                    </Link>
                    <Link to="" >
                        <button>
                            Delete
                        </button>
                    </Link>
                    </div>
                </td>
        </tr>
        {/* <tr>
            <td>Seller 2</td>
            <td>Address 2</td>
            <td>2023-10-11</td>
            <td>$800</td>
        </tr> */}
    </table>
    </div>
    </div>
    </div>
    </div>
  )
}
