import { ADD_DEPARTMENT_QUESTIONS , DELETE_DEPARTMENT_QUESTIONS} from "../../types/companyprofile/companyprofileTypes"

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
            case DELETE_DEPARTMENT_QUESTIONS:
                return{
                    ...state,
                    departmentque:state.departmentque.filter((item,id)=>id !== action.payload)
                }
            
        default : return { ...state }
    }
}

export default companyprofileReducer;