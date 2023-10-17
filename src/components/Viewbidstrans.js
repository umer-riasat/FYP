import React from 'react'
import { Link } from 'react-router-dom'
import "./Viewbidstrans.css"

export default function Viewbidstrans() {
  return (
    <div>
     <div className='flexing'>
    <div className='outerdash' >
        <div className="dashboard">
        <div className="option" >
              <Link to="/Maintransporter"  > <button> Home </button></Link>
          </div>
        <div className="option" >
              <Link to="/Transporterprofile"  ><button> Manage Profile </button></Link>
          </div>
          <div className="option" >
              <Link to="/Viewbidstrans"  ><button> View bids </button></Link>
          </div>
          {/* <div className="option">
              <Link to="/Accepttrans"  ><button> Accepted Bids </button></Link>
          </div> */}
      </div>
    </div>

    <div className='viewbids'>
        <h1>Live Bids</h1>
    <div className="tablediv">
    <table>
        <thead>
            <tr>
                <th>Bid ID</th>
                <th>Date</th>
                <th>Buyer</th>
            </tr>
        </thead>
        <tbody>
            <tr onclick="selectBid(this)">
                <td>1</td>
                <td>10-9-2023</td>
                <td>Jhon</td>
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
                </td> */}
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
    </div>
  )
}
