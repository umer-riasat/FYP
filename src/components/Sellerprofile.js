import React from 'react'
import "./Sellerprofile.css"

export default function 
() {
  return (
    <div>
        <header>
        <div class="seller-info">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=
            M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt=""/>
            <h1>Seller Name</h1>
            <p>Seller Address</p>
        </div>
    </header>
    <main>
        <section class="product-list">
            <h2>Products Available for Selling</h2>
            <form>
                <label for="product-name">Product Name:</label>
                <input type="text" id="product-name" name="product-name" required />

                <label for="product-price">Product Price:</label>
                <input type="text" id="product-price" name="product-price" required />
            </form>
            
        </section>
        <section class="seller-stats">
            <h2>seller Stats</h2>
            <form>
                <label for="total-bids">Total Bids:</label>
                <input type="text" id="total-bids" name="total-bids" value="100" readonly />

                <label for="bids-succeeded">Bids Succeeded:</label>
                <input type="text" id="bids-succeeded" name="bids-succeeded" value="50" readonly />
            </form>
        </section>
    </main>
    </div>
  )
}
