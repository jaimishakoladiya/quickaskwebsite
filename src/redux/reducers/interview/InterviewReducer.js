<<<<<<< HEAD
import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION,ADD_CANDIDATE_DATA,ADD_PANEL_DATA ,DELETE_CANDIDATE_DATA} from "../../types/interview/InterviewTypes"
=======
import { ADD_INTERVIEW_QUESTION , DELETE_INTERVIEW_QUESTION,ADD_CANDIDATE_DATA,ADD_PANEL_DATA, GET_MANAGER } from "../../types/interview/InterviewTypes"
>>>>>>> 6476db13efc7ea0609477b2c36519b3f1ce2cd6f
const initialstate = {
    interviewque:[],
    candidatedata:[],
    paneldata:[],
<<<<<<< HEAD

=======
    manager:[]
>>>>>>> 6476db13efc7ea0609477b2c36519b3f1ce2cd6f
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
                case DELETE_CANDIDATE_DATA:
                    return{
                        ...state,
                        candidatedata:state.candidatedata.filter((item,id)=> id !==action.payload)
                    }
                case ADD_PANEL_DATA :
                    return{
                        ...state,
                        paneldata:[...state.paneldata,action.payload]

                    }
                case GET_MANAGER:
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