import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION,ADD_CANDIDATE_DATA,ADD_PANEL_DATA 
    ,DELETE_CADIDAE_DATA,DELETE_PANEL_DATA,GET_MANAGER,GET_ORGANIZATION_INFO,DELETE_ORGANIZATION_INFO, EMPTY_DATA} from "../../types/interview/InterviewTypes"
const initialstate = {
    interviewque:[],
    candidate:[],
    panel:[],
    managers:[],
    orginfo:[]
}

const InterviewReducer =(state=initialstate,action)=>{
    switch(action.type){
        case ADD_INTERVIEW_QUESTION:
            return{
                ...state,
                interviewque:[...state.interviewque ,...action.payload]
            }
        case DELETE_INTERVIEW_QUESTION :
            return{
                ...state,
                    interviewque:state.interviewque.filter((item,id)=> id !== action.payload)
            }
            case ADD_CANDIDATE_DATA :
                return{
                    ...state,
                    candidate:[...state.candidate,action.payload]
                }
                // case DELETE_CANDIDATE_DATA:
                //     return{
                //         ...state,
                //         candidate:state.candidate.filter((item,id)=> id !==action.payload)
                //     }
                case ADD_PANEL_DATA :
                    return{
                        ...state,
                        panel:[...state.panel,action.payload]

                    }
                case GET_ORGANIZATION_INFO:
                    console.log(action.payload)
                    return{
                        ...state,
                        orginfo:[...state.orginfo,action.payload]
                    }
                    case DELETE_CADIDAE_DATA :
                        return{
                            ...state,
                            candidate:state.candidate.splice(action.payload,action.payload)
                        }
                        case DELETE_PANEL_DATA : 
                        return{
                            ...state,
                            panel:state.panel.filter((item,id)=> id !== action.payload)
                        }
                        
                case GET_MANAGER:
                    return{
                        ...state,
                        managers:action.payload
                    }
                case DELETE_ORGANIZATION_INFO:{
                    return{
                        ...state,
                        orginfo:state.orginfo.splice(action.payload,action.payload)
                    }
                }
                case EMPTY_DATA:{
                    return{
                        ...state,
                        candidate:[],
                        panel:[],
                        orginfo:[],
                        interviewque:[]
                    }
                }

        default : 
            return{
                ...state
            }
    }
}

export default InterviewReducer;