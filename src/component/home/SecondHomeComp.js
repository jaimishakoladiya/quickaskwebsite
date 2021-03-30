import React from "react";
import Grid from "@material-ui/core/Grid";
import img1 from "../images/undraw_remotely_2j6y.svg";

function SecondHomeComp() {
    
    return (
        <>
        <div className="home-start" >
            <Grid container spacing={0}>
               
                    <Grid item xs >
                        <img style={{ height: "400px", width: "500px" }} src={img1}></img>
                    </Grid>
                    <div className="home-pragraph">
                    <Grid item xs>
                    <p className="home-text">
                         There is no replacement for a face-to-face interview, that’s why phone interviews are so ineffective. But when you can’t meet face-to-face,
                        the best thing you can do is to have a video-recorded interview,
                        and that’s what we do. We give you the best interview tool so you can make the right decision on the most qualified candidate for your job.
                        <br></br>
                       </p>
                       <p className="home-text">
                        Interviews can be fun until they are not. Candidates may look good on a resume until you meet them.
                        Sometimes we know within the first minute whether the candidate is a good fit for the team. And when it is not,
                        we feel compelled to 
                        </p>
                    </Grid>
                    <Grid item xs>
                    <p className="home-text">
                        carry on with the interview knowing full well the candidate does not have a chance. Most of us are polite and continue with
                         it until the end. However, our politeness just cost us one hour; and we have five more candidates to interview.<br></br><br></br>
                         AskAway has many features that help you recover that time, but most importantly, it will allow you to get back to your job
                          with the peace of mind that comes from knowing you have given everyone a fair chance.<br></br><br></br>
                        So – Go Ahead-QuickAsk!
                        </p>
                    </Grid>
                    </div>
                </Grid>
                </div>
        </>
    )
}

export default SecondHomeComp;
