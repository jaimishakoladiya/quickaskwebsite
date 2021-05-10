import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION , ADD_CANDIDATE_DATA,GET_ORGANIZATION_INFO,
    ADD_PANEL_DATA ,DELETE_CANDIDATE_DATA,DELETE_PANEL_DATA,GET_MANAGER,DELETE_ORGANIZATION_INFO,EMPTY_DATA} from '../../types/interview/InterviewTypes'

export const addinterviewque =(newquestion)=>{
    console.log(newquestion)
    return{
        type:ADD_INTERVIEW_QUESTION,
        payload:newquestion
    }
}

export const deleteinterviewque =(id)=>{
    console.log(id)

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
export const deletecandidatedata =(id)=>{
    
    return{
        type:DELETE_CANDIDATE_DATA,
        payload:id
    }
}
export const deletepaneldata = (id)=>{
  return{
      type:DELETE_PANEL_DATA,
      payload:id
  }
}
export const getmanager=(data)=>{
    return{
        type:GET_MANAGER,
        payload:data
    }
}
export const getorginfo=(data)=>{
    return{
        type:GET_ORGANIZATION_INFO,
        payload:data
    }
}
export const deleteorginfo=(id)=>{
    return{
        type:DELETE_ORGANIZATION_INFO,
        payload:id
    }

}
export const emptydata=()=>{
    return{
        type:EMPTY_DATA,
    }
}