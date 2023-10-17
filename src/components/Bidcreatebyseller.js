import React from 'react'
import './Bidcreatebyseller.css'
import { Link , Outlet } from 'react-router-dom';

export default function Bidcreatebyseller () {
  return (

    <div className='flexing'>
  <div className='outerdash' >
      <div className="dashboard">
      <div className="option" >
              <Link to="/Mainseller"> <button>  Home </button></Link>
          </div>
      <div className="option" >
              <Link to="/Viewbidsseller"> <button>  View bids </button></Link>
          </div>
        <div className="option" >
            <Link to="/Bidcreatebyseller"> <button>  Create Bid </button></Link>
        </div>
        <div className="option">
            <Link to="/sellercurrentbids"> <button> Current Bids </button></Link>
        </div>
        <div className="option">
            <Link to="/sellerprofile"> <button> Manage Profile </button></Link>
        </div>
    </div>
  </div>
  
    <div className='bidcreations'>
        <h2 className="heading">
            Create Bid for Transporter
        </h2>

          <form className="bidForm" action="" >
            <div className="bidreq">
                <label for="userId"> </label>
                    {/* <input type="text" className="userId require" name="userId" required placeholder='User ID' />

                <label for="bidId"></label>
                    <input type="text" className="bidId require" name="bidId" required placeholder='Bid ID'/> */}

                <label for="location"></label>
                    <input type="text" className="location require" name="location" required placeholder='Location'/>

                <label for="category"></label>
                        <select className="category require" name="category" required >
                                <option value="electronics">Cotton</option>
                                <option value="clothing">Rice</option>
                                <option value="furniture">Wheat</option>
                        </select>

                <label for="price"></label>
                    <input type="number" className="price require" name="price" required placeholder='Price'/>

                <label for="quantity"></label>
                    <input type="number" className="quantity require" name="quantity" required placeholder='Quantity'/>

                <label for="description"></label>
                    <textarea className="description require" name="description" rows="4" required placeholder='Description'></textarea>

                <input type="submit" value="Submit"/>
        </div>
    </form>
    </div>
    </div>
  )
}
