import React from 'react'
import './Transporterprofile.css'

export default function Transporterprofile() {
  return (
    <div className='transprofile'>
        <header>
        <div class="trans-info">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=
            M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt=""/>
            <h6>Transporter Name</h6>
            <h6>Transporter Address</h6>
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
  )
}
