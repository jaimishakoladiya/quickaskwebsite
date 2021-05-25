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
import InterviewQuestion from "../../videoupload/InterviewQuestion";
import RealInterview from "../../videoupload/RealInterview";
import AddInterview from '../../interviews/AddInterview';
import ViewRecord from "../../interviews/ViewRecord";
import Contact from "../../team/contact/Contact";



function HomeNavbar() {
  const location = useLocation();
  return (
    <div>

      {location.pathname === "/adminview" ||
        location.pathname === "/interview" ||
        location.pathname === "/companyprofilepage" ||
        location.pathname === "/viewrecord" ||
        location.pathname === "/addinterview"
        ? <InnerNavbar /> : null}




      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addinterview" component={AddInterview} />
        <Route exact path="/registartion" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminview" component={AdminView} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/forgotpassword" component={Forpass} />
        <Route   exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/companyprofile" render={()=>
          <BrowserRouter><InnerNavbar name={"companyprofile"}/></BrowserRouter>
        }/>
        <Route exact path="/start/:tokenid/:id" component={StartTest}/>
        <Route exact path="/start/:tokenid" component={RealInterview}/>
        <Route exact path="/viewrecord/:managerid/:role/:id" component={ViewRecord} /> 

      </Switch>
    </div>
  );
}

export default HomeNavbar;
