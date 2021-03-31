import React from "react";
import { Route, Switch } from "react-router";
import Navbar from "./Navbar";
import "./navbar.css"
import Registration from "../../account/register/Registartion";
import Login from "../../account/login/Login";
import forpass from "../../account/login/Forpass";
import About from "../../team/about/About";
import Contact from "../../team/contact/Contact";
import Home from "../../home/Home";
import { BrowserRouter, useLocation } from "react-router-dom";
import InnerNavbar from './../innernavbar/InnerNavbar';
import CompanyProfilePage from "../../companyprofile/CompanyProfilePage";
import Interviews from "../../interviews/Interviews";

function HomeNavbar() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/login" ||
      location.pathname === "/registartion" ||
      location.pathname === "/forgotpassword" ||
      location.pathname ==="/innernavbar"? null : (
        <Navbar />
      )}

      <Switch>
        <Route   exact path="/" component={Home} />
        <Route exact path="/registartion" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/forgotpassword" component={forpass} />
        <Route exact path="/innernavbar" render={()=>
          <BrowserRouter><InnerNavbar name={"innernavbar"}/></BrowserRouter>
        }/>
    
      </Switch>
    </div>
  );
}

export default HomeNavbar;
