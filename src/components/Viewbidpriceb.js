import React from 'react'
import "./Viewbidpriceb.css"
import { Link } from 'react-router-dom'

export default function Viewbidpriceb() {
  return (
<div className='flexing'>
    <div className='outerdash' >
        <div className="dashboard">
          <div className="option" >
              <Link to="/Bidcreatebybuyer"> <button>  Create Bid </button></Link>
          </div>
          <div className="option">
              <Link to="/Buyercurrentbids"> <button> Manage Bid </button></Link>
          </div>
          <div className="option">
              <Link to="/Buyerprofile"> <button> Manage Profile </button></Link>
          </div>
      </div>
    </div>

    <div className='viewbidpriceb'>
      <div className='heading'>
        <h1>Bid Response By Sellers</h1>
      </div>
     <div className='bidprice'>
    <table border="1">
        <tr>
            <th>Quantity</th>
            <th>Location</th>
            {/* <th>Location</th> */}
            <th>Category</th>
            <th>Bidding Price</th>
            <th></th>
        </tr>
        <tr>
            <td>1</td>
            <td>Address 1</td>
            {/* <td>133 main street</td> */}
            <td>Cotton</td>
            <td>$1000</td>
            <td>
                    <div className="viewbutton">
                    <Link to="/Viewbidpriceb" >
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
  )
}
