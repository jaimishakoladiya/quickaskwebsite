import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import InterviewQuestion from './InterviewQuestion';
import PractiseInterviewTips from './PractiseInterviewTips'
import Startinterview from './Startinterview';
function StartTest() {
    const [tips,settips]=useState(true)
    const [practice,setpractice]=useState(false)

    const closepracticetips=()=>{
        settips(false)
    }
    const startinterview =()=>{
        setpractice(true)
    }
    return (
        <div>
           {/* { tips?<PractiseInterviewTips close={closepracticetips}/>:<Startinterview open={startinterview}/>} */}
            {practice?<InterviewQuestion/>:
            tips?<PractiseInterviewTips close={closepracticetips}/>:<Startinterview open={startinterview}/>}
        </div>
    )
}

export default StartTest
