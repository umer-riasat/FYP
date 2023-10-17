import React from 'react';
import './NavBar.css';
//import { Link } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

export default function NavBar (props) {
  return (<>
    <div className="navbar" >
      <div className="imgbox">
      <Link className="logo" to="/" ><img src="/logomain.png"  alt="" /></Link>
      </div>
    <ul className="nav-links">
        { props.show && <li><Link to='/Login' >Login</Link></li> }
        { props.show && <li><Link to='/Signupoption' >Sign Up </Link></li> }
    </ul>
    
</div> <Outlet/></>
  )
} 
