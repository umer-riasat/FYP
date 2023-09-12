import React from 'react'
import './Bidcreatebyseller.css'

export default function Bidcreatebyseller () {
  return (
    <div className='bidcreations'>
        <h2 className="heading">
            Create Bid for Transporter
        </h2>

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
  )
}
