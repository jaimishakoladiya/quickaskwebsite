import {
  ADD_INTERVIEW_QUESTION,
  DELETE_INTERVIEW_QUESTION,
  ADD_CANDIDATE_DATA,
  ADD_PANEL_DATA,
  DELETE_CANDIDATE_DATA,
  DELETE_PANEL_DATA,
  GET_MANAGER,
  GET_ORGANIZATION_INFO,
  DELETE_ORGANIZATION_INFO,
  EMPTY_DATA,
  SET_DISABLED,
  GET_ADMINVIEW,
} from "../../types/interview/InterviewTypes";
const initialstate = {
  interviewque: [],
  candidate: [],
  panel: [],
  managers: [],
  orginfo: [],
  disabled: false,
  admindata: [],
};

const InterviewReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_INTERVIEW_QUESTION:
      return {
        ...state,
        interviewque: [...state.interviewque, action.payload],
      };
    case DELETE_INTERVIEW_QUESTION:
      var newarr = state.interviewque.filter(
        (item, id) => id !== action.payload
      );
      return {
        ...state,
        interviewque: newarr,
      };
    case ADD_CANDIDATE_DATA:
      return {
        ...state,
        candidate: [...state.candidate, action.payload],
      };
    case DELETE_CANDIDATE_DATA:
      var newarr = state.candidate.filter((item, id) => id !== action.payload);
      console.log(newarr);
      return {
        ...state,
        candidate: newarr,
      };
    case ADD_PANEL_DATA:
      return {
        ...state,
        panel: [...state.panel, action.payload],
      };
    case GET_ORGANIZATION_INFO:
      console.log(action.payload);
      return {
        ...state,
        orginfo: [...state.orginfo, action.payload],
      };

    case DELETE_PANEL_DATA:
      return {
        ...state,
        panel: state.panel.filter((item, id) => id !== action.payload),
      };

    case GET_MANAGER:
      return {
        ...state,
        managers: action.payload,
      };
    case DELETE_ORGANIZATION_INFO: {
      return {
        ...state,
        orginfo: state.orginfo.splice(action.payload, action.payload),
      };
    }
    case EMPTY_DATA: {
      return {
        ...state,
        candidate: [],
        panel: [],
        orginfo: [],
        interviewque: [],
      };
    }
    case SET_DISABLED: {
      return {
        ...state,
        disabled: action.payload,
      };
    }
    case GET_ADMINVIEW: {
      return {
        ...state,
        admindata: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default InterviewReducer;
