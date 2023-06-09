import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	LOGIN_EMAIL_CHANGED,
	LOGIN_PASSWORD_CHANGED,
	SIGNUP_USER,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAILURE,
	LOGOUT_USER
} from 'redux/actions/Types'

/**
 * Initial auth user
 */
const INIT_STATE = {
	user: localStorage.getItem("user_id"),
	loading: false,
	email: 'hulktestuser@hulk.com',
	password: '12345678',
	error: ''
}

const AuthUserReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return { ...state, loading: true };

		case LOGIN_USER_SUCCESS:
			return { ...state,  loading: false, user: action.payload };

		case LOGIN_USER_FAILURE:
			return { ...state, loading: false, password: '', error: action.payload };

		case LOGIN_EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case LOGIN_PASSWORD_CHANGED:
			return { ...state, password: action.payload };

		case SIGNUP_USER:
			return { ...state, loading: true };

		case SIGNUP_USER_SUCCESS:
			return { ...state, loading: false, user: action.payload };

		case SIGNUP_USER_FAILURE:
			return { ...state, loading: false, error: action.payload };

		case LOGOUT_USER:
			return { ...state, user: null }

		default: return { ...state };
	}
}

export default AuthUserReducer; 