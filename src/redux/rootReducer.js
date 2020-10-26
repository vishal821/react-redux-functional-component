import { combineReducers } from 'redux';
import dataReducer from './userData/userData.reducer';

const rootReducer = combineReducers({
    userData: dataReducer,
});
export default rootReducer;