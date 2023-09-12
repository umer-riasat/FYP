import React from 'react'
import "./Viewbids.css"
import { useState, useEffect } from 'react';


function BidTable({ bids }) {
    const selectBid = (selectedBid) => {
      // Handle selecting a bid (you can add your logic here)
    };
  
    return (
      <div className="tablediv">
        <table>
          <thead>
            <tr>
              <th>Bid ID</th>
              <th>Buyer Name</th>
              <th>Buyer Address</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id} onClick={() => selectBid(bid)}>
                <td>{bid.id}</td>
                <td>{bid.buyerName}</td>
                <td>{bid.buyerAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default function ViewBids() {
    const [bids, setBids] = useState([
      { id: 1, buyerName: 'John Doe', buyerAddress: '123 Main St' },
      { id: 2, buyerName: 'Jane Smith', buyerAddress: '456 Elm St' },
    ]);
  
    useEffect(() => {
      // Simulate rendering more bids after a 2-second delay
      const timer = setTimeout(() => {
        const newBids = [
          ...bids,
          { id: 3, buyerName: 'New Buyer 3', buyerAddress: 'New Address 3' },
          { id: 4, buyerName: 'New Buyer 4', buyerAddress: 'New Address 4' },
          { id: 5, buyerName: 'New Buyer 5', buyerAddress: 'New Address 5' },
        ];
        setBids(newBids);
      }, 2000); // Adjust the delay as needed
  
      return () => clearTimeout(timer);
    }, [bids]);
  
    return (
      <div className="viewbids">
        <h1>Bid Information</h1>
        <BidTable bids={bids} />
      </div>
    );
  }
    
// export default function Viewbids () {
//   return (
//     <div className='viewbids'>
//         <h1>Bid Information</h1>
//     <div className="tablediv">
//     <table>
//         <thead>
//             <tr>
//                 <th>Bid ID</th>
//                 <th>Buyer Name</th>
//                 <th>Buyer Address</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr onclick="selectBid(this)">
//                 <td>1</td>
//                 <td>John Doe</td>
//                 <td>123 Main St</td>
//             </tr>
//             {bids.map((bid) => (
//             <tr key={bid.id} onClick={() => selectBid(bid)}>
//               <td>{bid.id}</td>
//               <td>{bid.buyerName}</td>
//               <td>{bid.buyerAddress}</td>
//             </tr>
//           ))}

//             </tbody>
//     </table>
//     </div>

   
//     </div>
//   )
// }
