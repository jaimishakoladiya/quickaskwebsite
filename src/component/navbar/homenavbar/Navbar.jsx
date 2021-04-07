import React from 'react';
import './navbar.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DehazeIcon from '@material-ui/icons/Dehaze';
import img from '../../images/logo2.png';
import {HashLink as Link} from "react-router-hash-link";
import { NavLink } from 'react-router-dom';
// import Home from '../../home/Home'

function Navbar() {
  return (
    <>
      <div class="navbar">
      <div className="navbar-logo">
<img src={img} className="navbar-logo" />
</div>
        <a href="#home" className="a">Blog</a>

        <div class="dropdown">
          <button class="dropbtn">
            Team
            
            <ArrowDropDownIcon style={{ fontSize: "35px", margin: "-10px 0px" }}/>
          </button>
          <div class="dropdown-content">
            <NavLink to="/team" className="a">
              About Us
            </NavLink>
            <Link smooth={true} to="#contact" className="a">
              Contact Us
            </Link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Accounts
            <ArrowDropDownIcon style={{ fontSize: "35px", margin: "-10px 0px" }}/>
          </button>
          <div class="dropdown-content">
            <NavLink to="/registartion" className="a">
              Create Account
            </NavLink>
            <NavLink to="/login" className="a">
              Login
            </NavLink>
          </div>
        </div>
        <NavLink to="/" className="a">
          Home
        </NavLink>
      </div>

 
    </>
  );
}

export default Navbar;
