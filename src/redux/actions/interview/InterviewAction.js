import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION,DELETE_CANDIDATE_DATA } from '../../types/interview/InterviewTypes'



export const addinterviewque =(newquestion)=>{
    return{
        type:ADD_INTERVIEW_QUESTION,
        payload:newquestion
    }
}

export const deleteinterviewque =(id)=>{
    return{
        type:DELETE_INTERVIEW_QUESTION,
        payload:id
    }
}
export const deletecandidate =(id)=>{
    return{
        type:DELETE_CANDIDATE_DATA,
        payload:id
    }
}