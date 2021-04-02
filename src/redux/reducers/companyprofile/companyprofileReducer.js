import {
    ADD_DEPT_QUESTIONS, DELETE_DEPT_QUESTIONS, ADD_JOB_QUESTIONS, DELETE_JOB_QUESTIONS
    , ADD_MANAGER_QUESTIONS, DELETE_MANAGER_QUESTIONS, ADD_DEPT_DATA
} from "../../types/companyprofile/companyprofileTypes";

const intitialstate = {
    deptquestion: [],
    jobquestion: [],
    managerquestion: [],
    deptdata:[]
}

const companyprofileReducer = (state = intitialstate, action) => {
    switch (action.type) {
        case ADD_DEPT_QUESTIONS:
            return {
                ...state,
                deptquestion: [...state.deptquestion, action.payload]
            }

        case DELETE_DEPT_QUESTIONS:

            return {
                ...state,
                deptquestion: state.deptquestion.filter((item, id) => id !== action.payload)
            }

        case ADD_JOB_QUESTIONS:
            return {
                ...state,
                jobquestion: [...state.jobquestion, action.payload]
            }

        case DELETE_JOB_QUESTIONS:

            return {
                ...state,
                jobquestion: state.jobquestion.filter((item, id) => id !== action.payload)
            }

        case ADD_MANAGER_QUESTIONS:
            return {
                ...state,
                managerquestion: [...state.managerquestion, action.payload]
            }

        case DELETE_MANAGER_QUESTIONS:

            return {
                ...state,
                managerquestion: state.managerquestion.filter((item, id) => id !== action.payload)
            }
        
        case ADD_DEPT_DATA:
            return{
                ...state,
                deptdata:[...state.deptdata,action.payload]
            }
        default:
            return {
                ...state
            }
    }
}

export default companyprofileReducer