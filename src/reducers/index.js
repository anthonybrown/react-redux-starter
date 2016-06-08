import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
	// using shorthand property name
	// could have been written like: courses: courses
	courses
});

export default rootReducer;
