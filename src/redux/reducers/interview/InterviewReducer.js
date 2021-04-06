import { ADD_INTERVIEW_QUESTION , DELETE_CANDIDATE_DATA, DELETE_INTERVIEW_QUESTION } from "../../types/interview/InterviewTypes"
const initialstate = {
    interviewque:[],
    candidatedel:[]
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

            case DELETE_CANDIDATE_DATA:
                return{
                    ...state,
                    candidatedel:state.candidatedel.filter((item,id) => id !==action.payload)

                }
        default : 
            return{
                ...state
            }
    }
}

export default InterviewReducer;