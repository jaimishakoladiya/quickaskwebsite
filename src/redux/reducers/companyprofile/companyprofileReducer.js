import {
     GET_DEPT_DATA, GET_JOB_DATA, GET_MANAGER_DATA,GET_ALL_MANAGER
} from "../../types/companyprofile/companyprofileTypes";

const intitialstate = {
    deptquestion: [],
    jobquestion: [],
    managerquestion: [],
    deptdata:[],
    managerdata:[],
    jobdata:[],
    deletedept:[],
    deletejobdata:[],
    users:[],
    job:[],
    manager:[],
    dept:[],
    managers:[]

}

const companyprofileReducer = (state = intitialstate, action) => {
    switch (action.type) {
                         case GET_DEPT_DATA:
                            if(action.payload.status)
                               { 
                                   return {
                                    ...state,
                                    users:action.payload.result,
                                    dept:action.payload.result.map((item)=>({
                                        name:item.name
                                    }))
                                }}
                                else{
                                    return {
                                        ...state,
                                        users:[],
                                        dept:[]
                                    } 
                                }
                           case GET_JOB_DATA:
                                if(action.payload.status)
                                 {return{
                                         ...state,
                                        job:action.payload.result
                                        }}
                                else{
                                            return{
                                                ...state,
                                               job:[]
                                               }
                                        }
                            case GET_MANAGER_DATA:
                                        return{
                                            ...state,
                                            manager:action.payload
                                        }
                            case GET_ALL_MANAGER:
                                            return{
                                                ...state,
                                                managers:action.payload
                                            }
     default:
            return {
                ...state
            }




    }
}

export default companyprofileReducer