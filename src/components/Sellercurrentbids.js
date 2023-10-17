import React from 'react'
import './Sellercurrentbids.css'
import { Link } from 'react-router-dom'

export default function Sellercurrentbids() {
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

    <div className='sellercurrentbids'>
        <div className='viewbids'>
         <h1>Current Bids</h1>
    </div>
     <div className="tablediv">
     <table>
         <thead>
             <tr>
                 <th>Bid ID</th>
                 <th>Location</th>
                 <th>Category</th>
                 <th>Price</th>
                 <th></th>
             </tr>
         </thead>
         <tbody>
             <tr onclick="selectBid">
                 <td>1</td>
                 <td>123 Main St </td>
                 <td>Cotton</td>
                 <td>100$</td>
                 <td>
                    <div className="editbuton">
                    {/* <Link to="/Editbidseller" >
                        <button>
                            Edit
                        </button>
                    </Link> */}
                    <Link to="" >
                        <button>
                            Delete
                        </button>
                    </Link>
                    <Link to="/Viewbidprices" >
                        <button>
                            Bidings
                        </button>
                    </Link>
                    </div>
                </td>
             </tr>
             {/* {bids.map((bid) => (
            <tr key={bid.id} onClick={() => selectBid(bid)}>
              <td>{bid.id}</td>
              <td>{bid.buyerName}</td>
              <td>{bid.buyerAddress}</td> */}
            </tbody>
    </table>
    </div>
    </div>
    </div>
  )
}
