import companyprofileReducer from '../redux/reducers/companyprofile/companyprofileReducer';
import { combineReducers} from 'redux';

const RootReducer=combineReducers({
    companyprofile:companyprofileReducer
})

export default RootReducer;