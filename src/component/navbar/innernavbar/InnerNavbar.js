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
<<<<<<< HEAD
import ViewRecord from "../../interviews/ViewRecord";
=======
// import ViewRecord from "../../interviews/ViewRecord";

>>>>>>> 4e6e5c50b32196973c5cc8f7ef5ba4d8675a986c
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
<<<<<<< HEAD
        <Route exact path="/viewrecord" component={ViewRecord} /> 
      </Switch>
=======
       
           </Switch>
>>>>>>> 4e6e5c50b32196973c5cc8f7ef5ba4d8675a986c
    </>
  );
};

export default InnerNavbar;
