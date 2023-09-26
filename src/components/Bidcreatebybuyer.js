import React from 'react'
import './Bidcreatebybuyer.css'

export default function Bidcreatebybuyer () {
  return (
    <div className='bidcreation'>
        <h1 className="heading">
            Create Bid for Seller
        </h1>

          <form className="bidForm" action="" >
            <div className="bidreq">
                <label for="userId"> </label>
                    <input type="text" className="userId require" name="userId" required placeholder='User ID' />

                <label for="bidId"></label>
                    <input type="text" className="bidId require" name="bidId" required placeholder='Bid ID'/>

                <label for="location"></label>
                    <input type="text" className="location require" name="location" required placeholder='Location'/>

                <label for="category"></label>
                        <select className="category require" name="category" required >
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="furniture">Furniture</option>
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
  )
}
