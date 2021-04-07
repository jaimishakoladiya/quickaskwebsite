import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION , ADD_CANDIDATE_DATA,ADD_PANEL_DATA } from '../../types/interview/InterviewTypes'

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
export const addcandidatedata =(newdata)=>{
    return{
        type:ADD_CANDIDATE_DATA,
        payload:newdata
    }
}
 export const addpaneldata =(newdata)=>{
        return{
        type:ADD_PANEL_DATA,
        payload:newdata
        }
}