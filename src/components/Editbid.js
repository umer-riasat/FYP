import React from 'react'
import "./Editbid.css"

export default function Editbid() {
  return (
    <div className="managebid">
    <h2 className="heading">
        Edit Bid
    </h2>

      <form className="bidForm" action="" >
        <div className="bidreq">

            <label for="bidId">Bid Id</label>
                <input type="text" className="bidId require" name="bidId" required placeholder='Bid ID'/>

            <label for="location">Location</label>
                <input type="text" className="location require" name="location" required placeholder='Location'/>

            <label for="category">Category</label>
                <input type="text" className="category require" name="category" required placeholder='category'/>


            <label for="price">Price</label>
                <input type="number" className="price require" name="price" required placeholder='Price'/>

            <label for="quantity">Quantity</label>
                <input type="number" className="quantity require" name="quantity" required placeholder='Quantity'/>

            <label for="description">Description</label>
                <textarea className="description require" name="description" rows="4" required placeholder='Description'></textarea>

                <input type="submit" value="Update"/>

    </div>
</form>
</div>
  )
}
