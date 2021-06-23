import React, { useState } from 'react'
import InterviewQuestion from './InterviewQuestion';
import PractiseInterviewTips from './PractiseInterviewTips'
import Startinterview from './Startinterview';
import FinishInterview from './FinishInterview';
import { useHistory } from 'react-router-dom';

function StartTest() {
    const [tips, settips] = useState(true)
    const [practice, setpractice] = useState(false)
    const [yes, setyes] = useState(true)
    const history = useHistory()

    const [tokenid, settokenid] = useState()
    const closepracticetips = () => {
        settips(false)
    }
    const startinterview = () => {
        setpractice(true)
    }
    const finish = (id) => {
        setyes(false)
        console.log(id)
        settokenid(id)
    }
    const gotostart = () => {
        console.log(tokenid)
        history.push(`/start/${tokenid}`)
    }
return (
        <div>
            {practice ? yes ? <InterviewQuestion start={finish} /> : <FinishInterview gotostart={gotostart} /> :
                tips ? <PractiseInterviewTips close={closepracticetips} /> : <Startinterview open={startinterview} />}
        </div>
    )
}

export default StartTest
