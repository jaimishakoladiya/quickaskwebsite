<<<<<<< HEAD
import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION , ADD_CANDIDATE_DATA,ADD_PANEL_DATA,DELETE_CANDIDATE_DATA } from '../../types/interview/InterviewTypes'
=======
import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION , ADD_CANDIDATE_DATA,ADD_PANEL_DATA ,GET_MANAGER} from '../../types/interview/InterviewTypes'
>>>>>>> 6476db13efc7ea0609477b2c36519b3f1ce2cd6f

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
<<<<<<< HEAD
export const deletecandidatedata =(id)=>{
    return{
        type:DELETE_CANDIDATE_DATA,
        payload:id
=======

export const getmanager=(data)=>{
    return{
        type:GET_MANAGER,
        payload:data
>>>>>>> 6476db13efc7ea0609477b2c36519b3f1ce2cd6f
    }
}