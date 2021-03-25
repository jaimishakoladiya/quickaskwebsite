import React from 'react'
import { Route, Switch } from 'react-router'
import Navbar from './Navbar'
import Registration from '../../account/register/Registartion'
import Login from '../../account/login/Login'
import forpass from '../../account/login/Forpass';
import About from '../../team/about/About'
import Contact from '../../team/contact/Contact'
import { useLocation} from "react-router-dom";
function HomeNavbar() {
    
    const location =useLocation();
    return (
        <div>
        {location.pathname==="/login"  || location.pathname==="/registartion" || location.pathname==="/forgotpassword"?null:<Navbar/>}
           
            <Switch>
            
                <Route exact path="/registartion" component={Registration}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/forgotpassword" component={forpass}/>
                 </Switch>
                
        </div>
    )
}

export default HomeNavbar
