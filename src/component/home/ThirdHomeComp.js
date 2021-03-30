import React from 'react'
import img1 from '../images/Admininterview.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function ThirdHomeComp() {
    AOS.init({
        offset: 300,
        duration: 1000,
        
    
      });
    return (
        <>
           <div className="home-thirdcomp" data-aos="fade-up">
        <img  className="home-img1" src={img1}/>
      <div className="home-col-8">
     <h4 className="home-thirdcomp-title" >WIN YOUR TIME BACK!!</h4>
     <h4 className="home-thirdcomp-text">Rather Than Spending Precious Time Interviewing<br></br>
The Wrong Candidates, We’ll On-Screen For You So<br></br>
You Can Spend Your Time On Other Endeavors.</h4>
     </div>
        </div> 
        </>
    )
}

export default ThirdHomeComp;
