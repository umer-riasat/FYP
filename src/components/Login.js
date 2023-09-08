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
                    <button>
                        <Link to="/Mainbuyer" > Login</Link>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
