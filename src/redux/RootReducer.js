import companyprofileReducer from '../redux/reducers/companyprofile/companyprofileReducer';
import InterviewReducer from '../redux/reducers/interview/InterviewReducer'
import { combineReducers} from 'redux';

const RootReducer=combineReducers({
    companyprofile:companyprofileReducer,
   
    interview:InterviewReducer
})

export default RootReducer;