import React from 'react'
import './Maintransporter.css'
import { Link } from 'react-router-dom';

export default function Maintransporter() {
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


    <div className='viewtransprofile'>
      <header>
        <div class="trans-info">
            <div className='imgdiv' >
                <img src="/profile.jpg" alt=""/>
            </div>
            <div className='namediv'>
                <h6>seller Name</h6>
                <h6>Address</h6>
            </div>
        </div>
    </header>
    <main>
        <div className='tablebox' >
        {/* <section class="product-list">
            <h2>Products Exported</h2>
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
        <section class="trans-stats">
            <h2>Seller Stats</h2>
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


{/* //     <div className='maintrans'>
// <h1 className="welcome">
//         WELCOME TRANSPORTER
//       </h1>
//         <div className="buyeroptions">
//             <div className="bidoptions">
//                 <ul className="bids">
//                     <li className="create"> <Link to="/Transporterprofile"  > <button>  Profile </button></Link> </li>
//                      <li className="manage"><Link to="/Viewbids"  ><button> View bids </button></Link></li>
//                      <li className="manage"><Link to="/Accepttrans"  ><button> Accepted Bids </button></Link></li>
//                 </ul> 
//             </div>
//         </div>
//     </div> */}


  