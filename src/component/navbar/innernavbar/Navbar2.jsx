import React, { useEffect, useState } from 'react'
import './navbar2.css'
import DehazeIcon from '@material-ui/icons/Dehaze';
import img from '../../images/logo2.png'
import { NavLink } from 'react-router-dom';
import axios from "axios";
function Navbar2() {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.token;
  const type=user.data.type;
  const [name, setname] = useState()

  useEffect(() => {
    getdata()

  }, [name])
  async function getdata() {
    var res = await axios({
      method: 'get',
      url: "http://localhost:2002/get-company-info",
      headers: {
        Authorization: token
      }
    })
  
    if(type==="admin"){
      setname(user.data.admin.firstname + ' ' + user.data.admin.lastname);
    }
    else{
      setname(user.data.manager.firstname + ' ' + user.data.manager.lastname)
      
    }
   

  }
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
                {name}
              </a>
            </li>
          </ul>
        </nav>
        <nav className="second">
          <ul>
            <li>
              <NavLink to="/adminview" className="a">
                ADMIN VIEW
              </NavLink>
            </li>

            <li>
              <NavLink to="/companyprofilepage" className="a">
                COMPANY PROFILE
              </NavLink>
            </li>

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
