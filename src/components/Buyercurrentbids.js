import React from 'react'
import "./Buyercurrentbids.css"
import { Link } from 'react-router-dom'

export default function Buyercurrentbids() {
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
  
    <div className='buyercurrentbids'>
        <div className='viewbids'>
         <h1>Current Bids</h1>
    </div>
     <div className="tablediv">
     <table>
         <thead>
             <tr>
                 <th>Bid ID</th>
                 <th>Locatin</th>
                 <th>Category</th>
                 <th>Price</th>
                 <th></th>
             </tr>
         </thead>
         <tbody>
             <tr onclick="selectBid">
                 <td>1</td>
                 <td>123 Main St</td>
                 <td>Cotton</td>
                 <td>1000$</td>
                 <td>
                    <div className="editbuton">
                    {/* <Link to="/Editbidbuyer" >
                        <button>
                            Edit
                        </button>
                    </Link> */}
                    <Link to="" >
                        <button>
                            Delete
                        </button>
                    </Link>
                    <Link to="/Viewbidpriceb" >
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
