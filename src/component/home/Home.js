import React from 'react'
import './home.css';

import SecondHomeComp from './SecondHomeComp'
import ThirdHomeComp from './ThirdHomeComp';
import FirstHomeComp from './FirstHomeComp';
import FouthHomeComp from './FouthHomeComp';
import FifthHomeComp from './FifthHomeComp';
import HomeFooter from './HomeFooter';


function Home() {
    return (
        <>
            <div className="home-all-start">
            <FirstHomeComp /><br></br>
             <SecondHomeComp /> <br></br><br></br><br></br>
             <ThirdHomeComp />
            <FouthHomeComp />
            <FifthHomeComp /><br></br><br></br>
            <HomeFooter/>
           
</div>

        </>
    );
}

export default Home
