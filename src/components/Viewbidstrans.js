import React, { useState, useEffect } from "react";
import "./Viewbidstrans.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

export default function Viewbidstrans() {
  const [liveBids, setLiveBids] = useState([]);

  useEffect(() => {
    // Fetch live bids from the server using Axios
    axios
      .get(`${BASE_URL}/api/getbid`)
      .then((response) => {
        setLiveBids(response.data);
      })
      .catch((error) => {
        console.error("Error fetching live bids:", error);
      });
  }, []);

  const selectBid = (bidId) => {
    // Handle bid selection (e.g., navigate to a bid details page)
    // You can implement the behavior you want here.
    // For example:
    // history.push(/BidDetails/${bidId});
  };

  return (
    <div className="flexing">
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
      </div>
    </div> 

      <div className="viewbids">
        <h1>Live Bids</h1>
        <div className="tablediv">
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Location</th>
                <th>Category</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {liveBids.map((bid) => (
                <tr key={bid.id} onClick={() => selectBid(bid.id)}>
                  <td>{bid.quantity}</td>
                  <td>{bid.location}</td>
                  <td>{bid.category}</td>
                  <td>{bid.price}</td>
                  <td>{bid.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}