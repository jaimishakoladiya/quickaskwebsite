import React from 'react'
import './home.css'

import SecondHomeComp from './SecondHomeComp'
import ThirdHomeComp from './ThirdHomeComp';
import FirstHomeComp from './FirstHomeComp';
import FouthHomeComp from './FouthHomeComp';
import FifthHomeComp from './FifthHomeComp';
import HomeFooter from './HomeFooter';
import Navbar from '../navbar/innernavbar/Navbar';

function Home() {
    return (
        <>
        <Navbar/><br/><br/><br/><br/><br/><br/>
                
            
            <FirstHomeComp /><br></br>
             <SecondHomeComp /> <br></br><br></br><br></br>
             <ThirdHomeComp />
            <FouthHomeComp />
            <FifthHomeComp /><br></br><br></br>
            <HomeFooter/>
           


        </>
    );
}

export default Home
