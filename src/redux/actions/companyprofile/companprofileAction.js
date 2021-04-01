import { ADD_DEPARTMENT_QUESTIONS , DELETE_DEPARTMENT_QUESTIONS } from "../../types/companyprofile/companyprofileTypes"

export const adddepartmentque =(newquestion)=>{
    return {
        type:ADD_DEPARTMENT_QUESTIONS,
        payload:newquestion
    }
} 
export const deletedepartmentque =(id)=>{
    return {
        type:DELETE_DEPARTMENT_QUESTIONS,
        payload:id
    }
} 