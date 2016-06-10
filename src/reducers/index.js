import {combineReducers} from 'redux';
import courses           from './courseReducer';
import authors           from './authorReducer';

const rootReducer = combineReducers({
	// using shorthand property name
	// could have been written like: courses: courses
	courses,
	authors
});

export default rootReducer;
