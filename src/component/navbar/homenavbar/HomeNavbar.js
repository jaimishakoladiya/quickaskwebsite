import React from 'react'
import { Route, Switch } from 'react-router'
import Navbar from './Navbar'
import Registration from '../../account/register/Registartion'
import Login from '../../account/login/Login'
import About from '../../team/about/About'
import Contact from '../../team/contact/Contact'

function HomeNavbar() {
    return (
        <div>
            <Navbar/>
            <Switch>
            
                <Route exact path="/registartion" component={Registration}/>
                <Route exact path="/login" componet={Login}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                          </Switch>
                
        </div>
    )
}

export default HomeNavbar
