import React, { useState, useEffect } from "react";
import "./Buyercurrentbids.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

export default function Buyercurrentbids() {
  const [currentBids, setCurrentBids] = useState([]);

  useEffect(() => {
    axios
      .post(`${BASE_URL}/api/getbid`)
      .then((response) => {
        setCurrentBids(response.data);
      })
      .catch((error) => {
        console.error("Error fetching current bids:", error);
      });
  }, []);

  return (
    <div className="flexing">
      <div className="outerdash">
        <div className="dashboard">
          <div className="option">
            <Link to="/Mainbuyer">
              <button>Home</button>
            </Link>
          </div>
          <div className="option">
            <Link to="/Bidcreatebybuyer">
              <button>Create Bid</button>
            </Link>
          </div>
          <div className="option">
            <Link to="/Buyercurrentbids">
              <button>Current bids</button>
            </Link>
          </div>
          <div className="option">
            <Link to="/Buyerprofile">
              <button>Manage Profile</button>
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
              {Array.isArray(currentBids) && currentBids.map((bid) => (
                <tr key={bid.id}>
                  <td>{bid.location}</td>
                  <td>{bid.category}</td>
                  <td>{bid.quantity}</td>
                  <td>{bid.price}</td>
                  <td>{bid.description}</td>
                  <td>
                    <div className="editbutton">
                      <Link to={`/Editbidbuyer/${bid.id}`}>
                        <button>Edit</button>
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



// const handleDelete = (bidId) => {
  //   // Implement Axios logic to delete the bid with the given bidId
  //   axios
  //     .delete(`your-api-endpoint-for-deleting-bid/${bidId}`)
  //     .then((response) => {
  //       // Handle success, such as removing the bid from the currentBids state
  //       setCurrentBids(currentBids.filter((bid) => bid.id !== bidId));
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting bid:", error);
  //     });
  // };


  {/* <button onClick={() => handleDelete(bid.id)}>Delete</button>
                      <Link to={`/Viewbidpriceb/${bid.id}`}>
                        <button>Bidings</button>
                      </Link> */}