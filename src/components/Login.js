import React from 'react'
import './Login.css'
import { Link  } from 'react-router-dom'
import  { useState } from 'react';



export default function Login() {
  
    // useEffect(() => {
    //     const loginSelect = document.getElementById('loginSelect');
    //     const loginButton = document.getElementById('loginButton');
    
    //     // Add a click event handler to the button
    //     loginButton.addEventListener('click', () => {
    //       // Get the selected option's value
    //       const selectedOption = loginSelect.options[loginSelect.selectedIndex];
    //       const selectedValue = selectedOption.value;
    
    //       // Redirect to the selected URL
    //       window.location.href = selectedValue;
    //     });
    //   }, []);

  return (
    <div className='mainlogin'>
        <div className="outerdiv">
            <form action="" className="login">
                <div className="emaildiv ep">
                    <label htmlFor="" className="email">
                        
                    </label>
                    <input placeholder='Email' type="text" className="values" />
                </div>
                <div className="passdiv ep">
                    <label htmlFor="" className="pass">
                    </label>
                    <input placeholder='Password' type="text" className="values" />
                </div>
                <div className="buton">
                        <Link to = "/Mainbuyer" >
                            <button>
                                Login Buyer
                            </button>
                        </Link>
                        <Link to="/Maintransporter" >
                            <button>
                                Login Transporter
                            </button>
                        </Link>
                    
                        <Link to="/Mainseller" > 
                            <button>
                                Login seller
                            </button>
                        </Link>
                </div>
                {/* <div className="select">
                        <select>
                            <option value="/Mainbuyer"><Link to = "/Mainbuyer" ></Link> Login Buyer</option>
                            <option value="/Maintransporter">Login Transporter</option>
                            <option value="/Mainseller">Login Seller</option>
                        </select>
                            <button>Go</button>
                        </div> */}

                <div className="footer">
                    <p className="foothead">
                        ------Don't have an Acount.------
                    </p>
                    <div className="signbuton">
                        <Link to="/Signupoption"> 
                            <button >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
