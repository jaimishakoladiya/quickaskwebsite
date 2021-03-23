import React from 'react'
import maleface from '../images/maleface.png'
import femaleface from '../images/femaleface.png'

function FifthHomeComp() {
return (
 
    <div>


<h1 className="home-comment-name">What Are They Saying About Us....</h1>

<div class="home-team">
<div class="home-members">
<div class="img">
<img src={femaleface} alt="home-members_img"/>
</div>

<p className="home-comment-title">
QuickAsk has made the hiring process easy! Being able to streamline the interview process has been a game-changer for me.
I love the ability to view multiple candidates in one single
grid and compare the answers. It is a huge time saver. Great job you guys.
</p>
<h3>Carlis Gonzils</h3>
<p class="role">BRANCH MANAGER ,GOLDEN EMPIRE MORTGAGE</p>
</div>
<div class="home-members">
<div class="img">
<img src={maleface} alt="home-members_img"/>
</div>

<p className="home-comment-title">
"As a tool, QuickAsk gives me the exact solution to my problem.
I don't care to learn a complicated ATS/HR system,
I just want to have the ability to screen my candidates quickly and effectively. AskAway provides me with the
ability to do just that, and can serve as a valuable complement to whatever ATS/HR system you have in place"
</p>
<h3>Brendas Nicholas</h3>
<p class="role">RECRUITER , ABLEFORCE</p>
</div>
</div>
</div>

)
}

export default FifthHomeComp;