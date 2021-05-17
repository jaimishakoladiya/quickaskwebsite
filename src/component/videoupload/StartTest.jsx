import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import PractiseInterviewTips from './PractiseInterviewTips'
import Startinterview from './Startinterview';
function StartTest() {
    const [tips,settips]=useState(true)
    const closepracticetips=()=>{
        settips(false)
    }
    const location =useLocation();
    return (
        <div>
           { tips?<PractiseInterviewTips close={closepracticetips}/>:<Startinterview/>}
            
        </div>
    )
}

export default StartTest
