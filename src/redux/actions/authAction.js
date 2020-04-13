import { 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS, 
    ADD_PROFILE,
    REMOVE_PROFILE
} from './actionType';


export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS

    }
}


export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE

    }
}

export const addProfile = (profile) =>{
    return {
        type: ADD_PROFILE,
        payload: profile
    }
}

export const removeProfile = () => {
    return {
        type:REMOVE_PROFILE,
    }
}