import React from 'react';
import './NavBar.css';
// import { Link } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

export default function NavBar () {
//const navigate = useNavigate();

  const Signup = ()=>{
    console.log("clicked")
    //navigate("SignUpseller")
  }

  return (
    <div className="navbar" >
      <div className="imgbox">
      <a className="logo" href="/" ><img src="/logomain.png"  alt="" /></a>
      </div>
    <ul className="nav-links">
        {/* <li><Link to='/SignUpseller' >Login</Link></li>
        <li><Link to='/' >Sign Up </Link></li> */}
        {/* <button className="chek"  onClick={Signup}> goto </button> */}
    </ul>
</div>
  )
} 
