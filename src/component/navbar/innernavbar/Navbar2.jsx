import React from 'react'
import './navbar2.css'
import DehazeIcon from '@material-ui/icons/Dehaze';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import img from '../../images/logo2.png'
import { NavLink } from 'react-router-dom';
function Navbar2() {
  return (
    <div>
      <header>
        <div className="out-nav-logo">
          <img src={img} className="out-nav-logo" />
        </div>
        <nav className="first">
          <ul>
            {/* <li><a href="#" className="a">INTERVIEWS</a></li> */}

            <li>
              <NavLink to="/interview" className="a">
                INTERVIEWS
              </NavLink>
            </li>

            <li className="sub-menu">
              <NavLink to="/login" className="a">
                LOGOUT
              </NavLink>
            </li>
            <li>
              <a href="#" className="activename">
                NAME
              </a>
            </li>
          </ul>
        </nav>
        <nav className="second">
          <ul>
            <li>
              <a href="#" className="a">
                INTERVIEW DASHBOARD
              </a>
            </li>
            {/* <li className="sub-menu"><a href="#" className="a">COMPANY PROFILE </a>

            </li> */}
            <li>
              <NavLink to="/companyprofilepage" className="a">
                COMPANY PROFILE
              </NavLink>
            </li>

            {/* <li className="sub-menu">
              <a href="#" className="a">
                INVOICE
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="icon">
          <DehazeIcon />
        </div>
      </header>
    </div>
  );
}

export default Navbar2;
