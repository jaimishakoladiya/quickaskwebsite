import React from 'react'
import './navbar2.css'
import DehazeIcon from '@material-ui/icons/Dehaze';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import img from '../images/logo.png';
function Navbar2() {
    return (
        <div>
           <header>
      <div className="logo">
      <img src={img} className="logo"/>
      </div>
        <nav className="first">
          <ul>
            <li><a href="#">INTERVIEWS</a></li>
            
            <li className="sub-menu"><a href="#">LOGOOUT </a></li>
            <li><a href="#">NAME</a></li>
          </ul>
        </nav>
        <nav className="second">
          <ul>
            <li><a href="#">INTERVIEW DASHBOARD</a></li>
            <li className="sub-menu"><a href="#">COMPANY PROFILE </a>
           
            </li>
            <li className="sub-menu"><a href="#">INVOICE </a>
            
            </li>
          
          </ul>
        </nav>
        <div className="icon"><DehazeIcon/></div>
      </header>
        </div>
    )
}

export default Navbar2
