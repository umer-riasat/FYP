import React from 'react'
import "./Buyercurrentbids.css"
import { Link } from 'react-router-dom'

export default function Buyercurrentbids() {
  return (
    <div className='buyercurrentbids'>
        <div className='viewbids'>
         <h1>Current Bids</h1>
    </div>
     <div className="tablediv">
     <table>
         <thead>
             <tr>
                 <th>Bid ID</th>
                 <th>Date (YYYY-MM-DD)</th>
                 <th>Description</th>
                 <th></th>
             </tr>
         </thead>
         <tbody>
             <tr onclick="selectBid">
                 <td>1</td>
                 <td> 2023-05-19 </td>
                 <td>123 Main St</td>
                 <td>
                    <div className="editbuton">
                    <Link to="/Editbid" >
                        <button>
                            EDIT
                        </button>
                    </Link>
                    <Link to="" >
                        <button>
                            DELETE
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
  )
}
