import React from 'react'
import './Mainbuyer.css'
import { Link , Outlet } from 'react-router-dom';


export default function Mainbuyer () {
  return (

<div className='flexing'>
    <div className='outerdash' >
        <div className="dashboard">
        <div className="option" >
            <Link to="/Mainbuyer"> <button>  Home </button></Link>
        </div>
          <div className="option" >
              <Link to="/Bidcreatebybuyer"> <button>  Create Bid </button></Link>
          </div>
          <div className="option">
              <Link to="/Buyercurrentbids"> <button> Current Bids </button></Link>
          </div>
          <div className="option">
              <Link to="/Buyerprofile"> <button> Manage Profile </button></Link>
          </div>
      </div>
    </div>

    <div className='viewbuyerprofile'>
      <header>
        <div class="buyer-info">
            <div className='imgdiv' >
                <img src="/profile.jpg" alt=""/>
            </div>
            <div className='namediv'>
                <h6>Buyer Name</h6>
                <h6>Address</h6>
            </div>
        </div>
    </header>
    <main>
        <div className='tablebox' >
        {/* <section class="product-list">
            <h2>Products Imported</h2>
            <table>
                <tr>
                    <th>Product Name:</th>
                    <th>Product Quantity:</th>
                    <th>Product Price:</th>
                </tr>
                <tr>
                    <td>Wheat</td>
                    <td>10kg</td>
                    <td>1000$</td>
                </tr>
            </table>
        </section> */}
        <section class="buyer-stats">
            <h2>Buyer Stats</h2>
            <table>
                <tr>
                    <th>Total Bids:</th>
                    <th>Bids Succeeded:</th>
                </tr>
                <tr>
                    <td>100</td>
                    <td>34</td>
                </tr>
            </table>
        </section>
        </div>
    </main>
    </div>
    </div>
  )
}
