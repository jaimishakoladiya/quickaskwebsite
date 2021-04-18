import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./Navbar";
import Registration from "../../account/register/Registartion";
import Login from "../../account/login/Login";
import Forpass from "../../account/login/Forpass";
import Home from "../../home/Home";
import { BrowserRouter, useLocation } from "react-router-dom";
import InnerNavbar from './../innernavbar/InnerNavbar';
import Team from "../../team/Team";
import ResetPassword from '../../account/register/ResetPassword'
function HomeNavbar() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/login" ||
      location.pathname === "/registartion" ||
      location.pathname === "/forgotpassword" ||
      location.pathname ==="/reset-password" ||
      location.pathname ==="/innernavbar"? null : (
        <Navbar />
        
      )}

      <Switch>
        <Route   exact path="/" component={Home} />
        <Route exact path="/registartion" component={Registration} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/team" component={Team}/>
        {/* <Route exact path="/fifthhomecomp" component={FifthHomeComp}/> */}
        <Route exact path="/forgotpassword" component={Forpass} />
        <Route   exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/innernavbar" render={()=>
          <BrowserRouter><InnerNavbar name={"innernavbar"}/></BrowserRouter>
        }/>
    
      </Switch>
    </div>
  );
}

export default HomeNavbar;
