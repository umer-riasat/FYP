import React from 'react'
import './Bidcreatebybuyer.css'
import { Link , Outlet } from 'react-router-dom';

export default function Bidcreatebybuyer () {
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
    <div className='bidcreation'>
        <h1 className="heading">
            Create Bid for Seller
        </h1>

          <form className="bidForm" action="" >
            <div className="bidreq">
                {/* <label for="Date"> Start Date </label>
                    <input type="date" className="date require" name="userId" required placeholder='DATE' />

                <label for="Date"> End Date </label>
                    <input type="date" className="date require" name="userId" required placeholder='DATE' />

                <label for="bidId"></label>
                    <input type="text" className="bidId require" name="bidId" required placeholder='Bid ID'/> */}

                <label for="location"></label>
                    <input type="text" className="location require" name="location" required placeholder='Locaton'/>

                <label for="category"></label>
                        <select className="category require" name="category" placeholder='Category' required >
                                <option value="electronics">Cotton</option>
                                <option value="clothing">Yarn</option>
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
