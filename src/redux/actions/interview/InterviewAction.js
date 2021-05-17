import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION , ADD_CANDIDATE_DATA,GET_ORGANIZATION_INFO,
    ADD_PANEL_DATA ,DELETE_CANDIDATE_DATA,DELETE_PANEL_DATA,GET_MANAGER,
    DELETE_ORGANIZATION_INFO,EMPTY_DATA,SET_DISABLED, GET_ADMINVIEW} from '../../types/interview/InterviewTypes'
import axios from 'axios'
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
export const fetchdatasuccess=(data)=>{
    return{
        type: GET_ADMINVIEW,
        payload:data
    }
}
export const setdisabled=(data)=>{
    return{
        type:SET_DISABLED,
        payload:data
    }
}
export const getadminview = () => {
    const user=JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    return async dispatch => {
        try {
            let res = await axios({
                method: 'get',
                url:"http://localhost:2002/manager/candidates/information/false",
                headers:{
                    Authorization:token
                }
            })
            console.log(res.data.data);
            dispatch(fetchdatasuccess(res.data.data))
        }
        catch(e){
            console.log(e);
        }
    }
}
