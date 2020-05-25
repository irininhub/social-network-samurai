import {authAPI} from "../components/api/api";
import {stopSubmit} from "redux-form"


const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload, //payload по сути - данные
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
};


export const login = (mail, password, rememberMe) => (dispatch) => {
    authAPI.login(mail, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}))   //функция из redux-thunk? для того, чтобы остановить сабмит санки
            }      // для ошибок, например. Передаем name формы, которую стопаем и Обьект св-во. которое явл проблемным и вызывает ошибку
        })
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
};

export default authReducer;