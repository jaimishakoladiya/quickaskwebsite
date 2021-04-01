import { ADD_DEPARTMENT_QUESTIONS } from "../../types/companyprofile/companyprofileTypes"

const initialstate = {
    departmentque :[]
}

const companyprofileReducer = (state=initialstate,action)=>{
    switch(action.type){
        case ADD_DEPARTMENT_QUESTIONS:
            return{
                ...state,
                departmentque:[...state.departmentque,action.payload]
            }
        default : return { ...state }
    }
}

export default companyprofileReducer;