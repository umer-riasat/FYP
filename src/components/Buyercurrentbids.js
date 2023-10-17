import React, { useState, useEffect } from "react";
import "./Buyercurrentbids.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Buyercurrentbids() {
  const [currentBids, setCurrentBids] = useState([]);

  useEffect(() => {
    // Fetch current bids from the server using Axios
    axios
      .get("your-api-endpoint-for-current-bids")
      .then((response) => {
        setCurrentBids(response.data);
      })
      .catch((error) => {
        console.error("Error fetching current bids:", error);
      });
  }, []);

  const selectBid = (bidId) => {
    // Handle bid selection (e.g., navigate to a bid details page)
    // You can implement the behavior you want here.
  };

  const handleDelete = (bidId) => {
    // Implement Axios logic to delete the bid with the given bidId
    axios
      .delete(`your-api-endpoint-for-deleting-bid/${bidId}`)
      .then((response) => {
        // Handle success, such as removing the bid from the currentBids state
        setCurrentBids(currentBids.filter((bid) => bid.id !== bidId));
      })
      .catch((error) => {
        console.error("Error deleting bid:", error);
      });
  };

  return (
    <div className="flexing">
      <div className="outerdash">
        <div className="dashboard">
          <div className="option">
          <div className="option" >
            <Link to="/Mainbuyer"> <button>  Home </button></Link>
        </div>
            <Link to="/Bidcreatebybuyer">
              <button> Create Bid </button>
            </Link>
          </div>
          <div className="option">
            <Link to="/Buyercurrentbids">
              <button> Current bids </button>
            </Link>
          </div>
          <div className="option">
            <Link to="/Buyerprofile">
              <button> Manage Profile </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="buyercurrentbids">
        <div className="viewbids">
          <h1>Current Bids</h1>
        </div>
        <div className="tablediv">
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBids.map((bid) => (
                <tr key={bid.id}>
                  <td>{bid.location}</td>
                  <td>{bid.category}</td>
                  <td>{bid.quantity}</td>
                  <td>{bid.price}</td>
                  <td>{bid.description}</td>
                  <td>
                    <div className="editbutton">
                      {/* You can replace "#" with the actual route for editing the bid */}
                      <Link to={`/Editbidbuyer/${bid.id}`}>
                        <button>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(bid.id)}>Delete</button>
                      <Link to={`/Viewbidpriceb/${bid.id}`}>
                        <button>Bidings</button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}