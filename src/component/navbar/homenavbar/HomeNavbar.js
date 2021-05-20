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
import Start from '../../videoupload/Start'
import AdminView from '../../interviews/AdminView';
import StartTest from "../../videoupload/StartTest";



function HomeNavbar() {
  const location = useLocation();
  return (
    <div>
      {/* {location.pathname === "/login" ||
      location.pathname === "/registartion" ||
      location.pathname === "/forgotpassword" ||
      location.pathname ==="/reset-password" ||
      location.pathname ==="/innernavbar"||
      location.pathname ==="/adminview" ||
      location.pathname === "/interview" ||
      location.pathname === "/companyprofilepage"||
      location.pathname === "/viewrecord" ||
      location.pathname === "/start/:token"
       ? null : (
        <Navbar />
        
      )} */}
        {location.pathname === "/adminview" ||
          location.pathname === "/interview" ||
          location.pathname === "/companyprofilepage" ||
          location.pathname === "/viewrecord"
        ? <InnerNavbar/> : null}
      
       
      

      <Switch>
        <Route   exact path="/" component={Home} />
        <Route exact path="/registartion" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminview" component={AdminView} />
         <Route exact path="/team" component={Team}/>
        <Route exact path="/forgotpassword" component={Forpass} />
        <Route   exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/companyprofile" render={()=>
          <BrowserRouter><InnerNavbar name={"companyprofile"}/></BrowserRouter>
        }/>
        <Route  path="/start/:token/:id" component={StartTest}/>
        {/* <Route exact path="/start/:token/:token1" component={StartTest}/> */}
      </Switch>
    </div>
  );
}

export default HomeNavbar;
