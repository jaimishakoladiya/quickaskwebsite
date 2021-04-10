import {
    ADD_DEPT_QUESTIONS, DELETE_DEPT_QUESTIONS, ADD_JOB_QUESTIONS, DELETE_JOB_QUESTIONS
   ,ADD_MANAGER_DATA
    , ADD_MANAGER_QUESTIONS, DELETE_MANAGER_QUESTIONS, ADD_DEPT_DATA,ADD_JOB_DATA, EDIT_DEPT_DATA,
    EDIT_MANAGER_DATA,DELETE_JOB_DATA, EDIT_JOB_DATA, DELETE_QUESTION, DELETE_DEPT_DATA,DELETE_MANAGER_DATA
} from "../../types/companyprofile/companyprofileTypes";
import update from "react-addons-update"

const intitialstate = {
    deptquestion: [],
    jobquestion: [],
    managerquestion: [],
    deptdata:[],
    managerdata:[],
    jobdata:[],
    deletedept:[],
    deletejobdata:[],
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
         case ADD_MANAGER_DATA:
                return{
                    ...state,
                    managerdata:[...state.managerdata,action.payload]
                }
            case ADD_JOB_DATA:
                return{
                    ...state,
                    jobdata:[...state.jobdata,action.payload]
                }
            case EDIT_DEPT_DATA:
                return update(state,{
                       deptdata:{
                           [action.id]:{
                               $set :action.payload
                           }
                       }
                   }
                )
            case EDIT_JOB_DATA:
                return update(state,{
                    jobdata:{
                        [action.id]:{
                            $set:action.payload
                        }
                    }
                }
            )
            case EDIT_MANAGER_DATA:
                return update(state,{
                    managerdata:{
                        [action.id]:{
                            $set:action.payload
                        }
                    }
                })
            case DELETE_QUESTION:
              
                switch(action.payload){
                    case "dept" :
                        const n=state.deptdata[action.userid].newque.filter((item,index)=>index !== action.queid)
                       
                        return update(state,{
                            deptdata:{
                                [action.userid]:{
                                        newque:{
                                            $set:n
                                        }
                                }
                            }
                        })
                     case "job":
                         const n1=state.jobdata[action.userid].newque.filter((item,index)=>index !== action.queid) 

                         return update(state,{
                             jobdata:{
                                 [action.userid]:{
                                     newque:{
                                         $set:n1
                                     }
                                 }
                             }
                         })
                }
                case DELETE_DEPT_DATA:
                    return{
                        ...state,
                       deptdata: state.deptdata.filter((item, id) => id !== action.payload)
                    }
                    case DELETE_JOB_DATA:
                        return{
                            ...state,
                            jobdata: state.jobdata.filter((item, id) => id !== action.payload)
                        }
                        case DELETE_MANAGER_DATA:
                            return{
                                ...state,
                                managerdata: state.managerdata.filter((item,id) => id !== action.payload)

                            }
        default:
            return {
                ...state
            }
          


            
    }
}

export default companyprofileReducer