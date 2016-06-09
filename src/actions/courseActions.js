import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';


export function loadCoursesSuccess (courses) {
	//debugger;
	return { type: types.LOAD_COURSES_SUCCESS, courses};
}

// Redux-Thunk
export function loadCourses () {
	return function (dispatch) {
		return courseApi.getAllCourses().then((courses) => {
			dispatch(loadCoursesSuccess(courses));
		}).catch((error) => {
			throw(error);
		});
	};
}
