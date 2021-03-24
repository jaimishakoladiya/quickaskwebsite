import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import Navbar2 from './Navbar2';



import CompanyProfilePage from '../../companyprofile/CompanyProfilePage';
import Interviews from '../../interviews/Interviews'

const OuterNavbar=()=>{
    return (
    <>
    <Navbar2/><br></br><br></br><br></br>
    <Switch>
   

  
     <Route exact path="/companyprofilepage" component={CompanyProfilePage} />   
     <Route exact path="/interviews" component={Interviews} />
        
        
    </Switch>
    </>)
}

export default OuterNavbar;