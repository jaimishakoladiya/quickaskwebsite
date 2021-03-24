import React from 'react';
import img1 from '../../images/inter.png'
import img2 from '../../images/admin.png'
import './about.css'


function About() {
    return (
      <>
    
     
      <div className="title">
      <div>
        <img  className="about-img1" src={img1}/>
      </div>
     <h3  className="about-title">HOW WE</h3>
     <h3 className="about-title">CAN HELP YOU</h3>
     <h1> And why we care</h1>
     
     

      <div className="about-title-border" ></div><br></br>

     <h5 className="about-red-title">we are just getting started!!yahhhooo</h5>
     <p className="about-inner-text">QuickAsk is a new startup that has every intention of making your life easier.
      The idea came about after Founder, Leo Gonzalez found himself awake at all 
      hours in order to appease our new Global Market and Tech Lifestyle</p>
    
    
     <h5 className="about-red-title"> Many of us have been there, right?</h5>
     <p className="about-inner-text">As the world becomes united and technology allows for constant and instant communication, 
     a new challenge of timing has arrived-while the west coast is sleeping, the east coast rises and Europe is well within their day.
      When on Earth can we all get together to meet.</p>

      <p className="about-inner-text">Due to this global collaboration, Leo found himself tired of working all hours of the day and night and decided to create QuickAsk.</p>


     </div><br></br>

      <div className="aboutfooter">
     
    
     <img className="about-img2" src={img2}/>
      <div className="about-col-8">
     <h4 className="about-footer-title">MISSION STATMENT</h4>
     <p className="about-footer-text">We believe that the shortest video is longer than the longest memory. Our mission is to provide
      you the tools that will make your interviewing process easier,quick, and your hiring … a team choice</p>
     </div>
     </div> 

    

      </>
    )
}

export default About


