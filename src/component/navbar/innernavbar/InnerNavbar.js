import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar2 from './Navbar2';
import './navbar2.css';
import CompanyProfilePage from '../../companyprofile/CompanyProfilePage';
import Interviews from '../../interviews/Interviews';
import Login from './../../account/login/Login';
import { useLocation } from 'react-router-dom';
import Registration from './../../account/register/Registartion';
import Forpass from './../../account/login/Forpass';
import ViewRecord from "../../interviews/ViewRecord";
const InnerNavbar = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/login' ||
      location.pathname === '/registartion' ||
      location.pathname === '/forgotpassword' ? null : (
        <Navbar2 />
      )}
      <br></br>
      <br></br>
      <Switch>
        <Route
          className="activename"
          exact
          path="/innernavbar"
          component={CompanyProfilePage}
        />

        <Route
          exact
          path="/companyprofilepage"
          component={CompanyProfilePage}
        />
        <Route exact path="/interview" component={Interviews} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgotpassword" component={Forpass} />
        <Route exact path="/registartion" component={Registration} />
        <Route exact path="/viewrecord" component={ViewRecord} /> 
      </Switch>
    </>
  );
};

export default InnerNavbar;
