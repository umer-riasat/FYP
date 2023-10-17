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
              <Link to="/Transporterprofile"  ><button>  Profile </button></Link>
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
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr onclick="selectBid(this)">
                <td>1</td>
                <td>10-9-2023</td>
                <td>Jhon</td>
                <td>
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
                </td>
            </tr>

            </tbody>
    </table>
    </div>

    </div>
    </div>
    </div>
  )
}
