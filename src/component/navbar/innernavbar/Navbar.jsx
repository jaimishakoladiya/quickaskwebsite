import React from 'react'
import './navbar.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DehazeIcon from '@material-ui/icons/Dehaze';
import img from '../../images/admin.png'
function Navbar() {
  return (
    <div>
      <header className="in-navbar">
      <div className="in-navbar-logo">
      <img src={img} className="logo"/>
      </div>
        <nav className="active">
          <ul>
            <li><a href="#">Home</a></li>
            <li className="in-sub-menu"><a href="#">Account <ArrowDropDownIcon style={{fontSize:"32px",margin:"-10px 0px"}}/></a>
            <ul>
             <li><a href="#">Create Accout</a></li>
              <li><a href="#">Login</a></li>
            </ul>
            </li>
            <li className="sub-menu"><a href="#">Team <ArrowDropDownIcon style={{fontSize:"32px",margin:"-10px 0px"}}/></a>
            <ul>
             <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            </li>
            <li><a href="#">Blog</a></li>
          </ul> 
        </nav>
        <div className="icon"><DehazeIcon/></div>
      </header>
    </div>
  )
}

export default Navbar
