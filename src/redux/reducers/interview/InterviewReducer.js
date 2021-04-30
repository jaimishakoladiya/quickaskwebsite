import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION,ADD_CANDIDATE_DATA,ADD_PANEL_DATA ,GET_MAN_DATA} from "../../types/interview/InterviewTypes"
const initialstate = {
    interviewque:[],
    candidatedata:[],
    paneldata:[],
    manager:[]
}

const InterviewReducer =(state=initialstate,action)=>{
    switch(action.type){
        case ADD_INTERVIEW_QUESTION:
            return{
                ...state,
                interviewque:[...state.interviewque , action.payload]
            }
        case DELETE_INTERVIEW_QUESTION :
            return{
                ...state,
                    interviewque:state.interviewque.filter((item,id)=> id !== action.payload)
            }
            case ADD_CANDIDATE_DATA :
                return{
                    ...state,
                    candidatedata:[...state.candidatedata,action.payload]
                }
                case ADD_PANEL_DATA :
                    return{
                        ...state,
                        paneldata:[...state.paneldata,action.payload]

                    }
                case GET_MAN_DATA:
                   return{
                       ...state,
                       manager:action.payload
                   }
        default : 
            return{
                ...state
            }
    }
}

export default InterviewReducer;