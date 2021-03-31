import React from 'react'
import logo from '../images/logo2.png'

function CompanyFooter() {
    return (
        <div>
            <div style={{border :"4px solid black"}}></div> 
            <div className="company-footer">
                 <img className="company-footer-logo"  src={logo}></img>
                <h4>QuickAsk © 2020.All Rights Reserved</h4>

            </div>
        </div>
    )
}

export default CompanyFooter
