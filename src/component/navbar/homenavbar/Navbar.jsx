import React from 'react';
import './navbar.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import img from '../../images/logo2.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div class="navbar">
      <div className="navbar-logo">
<img src={img} alt="img" className="navbar-logo" />
</div>
        <div class="dropdown">
          <button class="dropbtn">
            Team
            <ArrowDropDownIcon style={{ fontSize: "35px", margin: "-10px 0px" }}/>
          </button>
          <div class="dropdown-content">
            <NavLink to="/team" className="a">
              About Us
            </NavLink>
            <NavLink smooth={true} to="/contact" className="a">
              Contact Us
            </NavLink>
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
