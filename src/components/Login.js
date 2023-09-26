import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
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
                        <Link to="/Mainbuyer" >
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
