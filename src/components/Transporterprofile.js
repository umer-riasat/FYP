import React from 'react'
import './Transporterprofile.css'
import { Link , Outlet } from 'react-router-dom';

export default function Transporterprofile() {
  return (

    <div className='flexing'>
    <div className='outerdash' >
        <div className="dashboard">
        <div className="option" >
              <Link to="/Maintransporter"  > <button> Home </button></Link>
          </div>
        <div className="option" >
              <Link to="/Transporterprofile"  > <button> Manage Profile </button></Link>
          </div>
          <div className="option" >
              <Link to="/Viewbidstrans"  ><button> View bids </button></Link>
          </div>
          {/* <div className="option">
              <Link to="/Accepttrans"  ><button> Accepted Bids </button></Link>
          </div> */}
      </div>
    </div>


    <div className='transprofile'>
        <header>
        <div class="trans-info">
            <img src="profile.jpg" alt=""/>
            <input type="file" id="file" accept="image/*" />
            <h6> <input placeholder='Edit name' /></h6>
            <h6><input placeholder='Edit address' /></h6>
        </div>
    </header>
    <main>
        <section class="product-list">
            <h2>Products Imported/Exported</h2>
            <form>
                <label for="product-name">Product Name:</label>
                <input type="text" id="product-name" name="product-name" required />
            </form>
            
        </section>
        <section class="trans-stats">
            <h2>Transporter Stats</h2>
            <form>
                <label for="total-bids">Total Bids:</label>
                <input type="text" id="total-bids" name="total-bids" value="100" readonly />
            </form>
        </section>
    </main>
    </div>
    </div>
  )
}
