import {getAuthUserData} from "./auth-reducer";


const INITIALISED_SUCCESS = 'app-reducer/INITIALISED_SUCCESS';

let initialState = {
    initialised: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALISED_SUCCESS:
            return {
                ...state,
                initialised: true
            };
        default:
            return state;
    }
};

export const initialisedSuccess = () => ({type: INITIALISED_SUCCESS});

export const initialisedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initialisedSuccess())
    })
};


export default appReducer;