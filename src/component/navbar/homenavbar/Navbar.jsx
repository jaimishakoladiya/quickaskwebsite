import React from 'react'
import './navbar.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DehazeIcon from '@material-ui/icons/Dehaze';
import img from '../../images/logo.png'

import { NavLink } from 'react-router-dom';
//  import Home from '../../home/Home'

function Navbar() {
  return (
    <>
      <header className="in-navbar">
      <div className="in-navbar-logo">
      <img src={img} className="in-navbar-logo"/>
      </div>
        <nav className="active">
          <ul>
            <li><NavLink to ="/" className="a">Home</NavLink></li>
            <li className="in-sub-menu"><a href="#" className="a">Account <ArrowDropDownIcon style={{fontSize:"32px",margin:"-10px 0px"}}/></a>
            <ul>
             {/* <li><a href="#" className="a">Create Accout</a></li>
              <li><a href="#" className="a">Login</a></li> */}
              <li><NavLink to ="/registartion" className="a"> Create Account</NavLink></li> 
             
              <li><NavLink to ="/login" className="a">Login</NavLink></li>
            </ul>
            </li>
            <li className="sub-menu"><a href="#" className="a">Team <ArrowDropDownIcon style={{fontSize:"32px",margin:"-10px 0px"}}/></a>
            <ul>
              {/* <li><a href="#" className="a">About Us</a></li> 
              <li><a href="#" className="a">About Us</a></li>  */}
             <li><NavLink to="/about" className="a">About Us</NavLink></li> 
              
               <li><NavLink to="/contact" className="a">Contact Us</NavLink></li> 
            </ul>
            </li>
            <li><a href="#" className="a">Blog</a></li>
          </ul> 
        </nav>
        <div className="icon"><DehazeIcon/></div>

      
      </header>
       {/* <Home/>  */}
    </>
    
  )
}

export default Navbar
