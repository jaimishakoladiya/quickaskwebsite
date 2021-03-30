import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar2 from "./Navbar2";

import CompanyProfilePage from "../../companyprofile/CompanyProfilePage";
import Interviews from "../../interviews/Interviews";
import Login from "./../../account/login/Login";
import { useLocation } from "react-router-dom";

const InnerNavbar = () => {
  const location = useLocation();
  return (
    <>
   {location.pathname==="/login" ?null:<Navbar2/>}<br></br><br></br>
    <Switch>
   


           
      {/* <Route exact path="/companyprofilepage" component={CompanyProfilePage} />     */}
     <Route exact path="/interviews" component={Interviews} />
     <Route exact path="/login" component={Login}/>
   
    
      <CompanyProfilePage/> 
    </Switch>
    </>)
}

export default InnerNavbar;
