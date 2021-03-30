
import React from 'react'
import Grid from '@material-ui/core/Grid';
import AOS from 'aos';
import 'aos/dist/aos.css';
function FouthHomeComp() {
    AOS.init({
        offset: 300,
        duration: 800,
        
    
      });
return (
<div>

<Grid container spacing={0}>
<Grid item xs={12}>
<div className="home-advantage-card" data-aos="fade-up">
<h1 className="home-advantage-header">
ADVANTAGES
</h1>
<body className="min">
<div>


<div className="home-service-section">
<div className="gome-inner-width">
<div className="home-service-container">
<div className="home-service-box"><br />
<div className="home-service-icon">
<i class="fas fa-file-alt"></i>
</div>
<div className="home-service-title"><button type="address" className="home-advantage-kite" ><b>Template Questions.</b></button></div>
<div className="home-service-desc">
Customize your questions based on your Company, Department, Job, or <br />Manager.
</div>
</div>
<div className="home-service-box"><br />
<div className="home-service-icon">
<i class="fas fa-calendar-alt"></i>
</div>
<div className="home-service-title"><button type="address" className="home-advantage-kite" ><b>Scheduling Done Right</b></button></div>
<div className="home-service-desc">
AskAway has removed the challenge of <br />scheduling yet, another meeting — view<br /> and share interviews whenever.
</div>
</div>
<div className="home-service-box"><br />
<div className="home-service-icon">
<i class="fas fa-play-circle"></i>
</div>
<div className="home-service-title"><button type="address" className="home-advantage-kite" ><b>Press Play</b></button></div>
<div className="home-service-desc">
Sit back and watch the recorded interview <br />at your convenience.
</div>
</div>
<div className="home-service-box"><br />
<div className="home-service-icon">
<i class="fas fa-forward"></i>
</div>
<div className="home-service-title"><button type="address"
className="home-advantage-kite" ><b>Second Opinions?</b></button></div>
<div className="home-service-desc">
Invite and share the candidates interview<br /> with your co-workers and team leads before <br />you make a decision.
</div>
</div>
<div className="home-service-box"><br />
<div className="home-service-icon">
<i class="fas fa-comment-alt"></i>
</div>
<div className="home-service-title"><button type="address"
className="home-advantage-kite" ><b>Comments And Ratings</b></button></div>
<div className="home-service-desc">
Compare and rate your candidates answers<br /> — comment on each response, to better <br />select your hire.
</div>
</div>
<div className="home-service-box"><br />
<div className="home-service-icon">
<i class="far fa-star"></i>
</div>
<div className="home-service-title"><button type="address"
className="home-advantage-kite" ><b>Managment</b></button></div>
<div className="home-service-desc">
—Go Ahead— Enjoy Life! You're Done!
</div>
</div>

</div>
</div>
</div>
</div>
</body>
</div>
</Grid>
</Grid>

</div>
)
}

export default FouthHomeComp;
